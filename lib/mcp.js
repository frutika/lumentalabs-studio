import { site } from '../site.config';
import { markdownPaths, pageMarkdown } from './markdown';

/**
 * A small read-only MCP server over the public pages. Stateless: every POST
 * stands alone, so there are no sessions and no server-to-client stream, and
 * nothing here reads or writes anything a visitor could not already see.
 */

export const SERVER_NAME = 'studio.lumentalabs/site';
export const SERVER_VERSION = '1.0.0';
export const SERVER_TITLE = `${site.name} website`;
export const SERVER_DESCRIPTION = `Read-only access to the public pages of ${site.domain}, as Markdown.`;
export const MCP_URL = `${site.url}/mcp`;

// Newest first: the first is what a client asking for something unknown is offered.
export const PROTOCOL_VERSIONS = ['2025-11-25', '2025-06-18', '2025-03-26'];

export const CAPABILITIES = { tools: {} };

const TOOLS = [
  {
    name: 'list_pages',
    title: 'List pages',
    description: `Lists every public page of ${site.domain} by path. English pages sit at the root, Croatian under /hr, German under /de.`,
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
  },
  {
    name: 'get_page',
    title: 'Get page',
    description: `Returns one public page of ${site.domain} as Markdown, with its title, description, language and URL in front matter.`,
    inputSchema: {
      type: 'object',
      properties: { path: { type: 'string', description: 'Page path as returned by list_pages, for example /services' } },
      required: ['path'],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
  },
];

const text = (value, isError = false) => ({
  content: [{ type: 'text', text: value }],
  ...(isError ? { isError: true } : {}),
});

async function callTool(name, args) {
  if (name === 'list_pages') return text(markdownPaths().join('\n'));

  // A path that is not in the sitemap is simply "no such page": pageMarkdown
  // never fetches it, so this input cannot steer a request anywhere.
  const body = await pageMarkdown(args.path);
  return body === null ? text(`No such page: ${args.path}. Use list_pages.`, true) : text(body);
}

export class RpcError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

/** Answers one JSON-RPC request with its `result`, or throws RpcError. */
export async function handleRequest(method, params = {}) {
  switch (method) {
    case 'initialize':
      return {
        protocolVersion: PROTOCOL_VERSIONS.includes(params.protocolVersion)
          ? params.protocolVersion
          : PROTOCOL_VERSIONS[0],
        capabilities: CAPABILITIES,
        serverInfo: { name: SERVER_NAME, title: SERVER_TITLE, version: SERVER_VERSION },
        instructions: 'Call list_pages to see what exists, then get_page for the pages you need.',
      };
    case 'ping':
      return {};
    case 'tools/list':
      return { tools: TOOLS };
    case 'tools/call': {
      if (!TOOLS.some((t) => t.name === params.name)) {
        throw new RpcError(-32602, `Unknown tool: ${params.name}`);
      }
      const args = params.arguments ?? {};
      if (params.name === 'get_page' && typeof args.path !== 'string') {
        throw new RpcError(-32602, 'get_page needs a string "path"');
      }
      try {
        return await callTool(params.name, args);
      } catch (err) {
        // Reported as a tool result, so the model can see it and try again.
        console.error('[mcp]', params.name, err);
        return text('The page could not be read right now. Try again shortly.', true);
      }
    }
    default:
      throw new RpcError(-32601, `Method not found: ${method}`);
  }
}

/** The card as SEP-2127 defines it: identity and connection details, no primitives. */
export function serverCard() {
  return {
    $schema: 'https://static.modelcontextprotocol.io/schemas/v1/server-card.schema.json',
    name: SERVER_NAME,
    version: SERVER_VERSION,
    title: SERVER_TITLE,
    description: SERVER_DESCRIPTION,
    websiteUrl: site.url,
    remotes: [{ type: 'streamable-http', url: MCP_URL, supportedProtocolVersions: PROTOCOL_VERSIONS }],
  };
}

/**
 * The same card plus the fields of its predecessor, SEP-1649, for readers that
 * still look for it at /.well-known/mcp/server-card.json. SEP-2127 moved cards
 * out of .well-known and dropped capabilities, but clients have not all moved.
 */
export function wellKnownServerCard() {
  return {
    ...serverCard(),
    protocolVersion: PROTOCOL_VERSIONS[0],
    serverInfo: { name: SERVER_NAME, title: SERVER_TITLE, version: SERVER_VERSION },
    transport: { type: 'streamable-http', endpoint: '/mcp' },
    capabilities: CAPABILITIES,
  };
}

/** Public, read-only metadata: the wide-open CORS is what the spec asks for. */
export const CARD_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': 'Content-Type, If-None-Match',
  'Access-Control-Expose-Headers': 'ETag',
  'Cache-Control': 'public, max-age=3600',
};
