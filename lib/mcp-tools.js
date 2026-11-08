import { site } from '../site.config';

// The site's agent tools, in one place: /mcp serves them to remote clients and
// WebMcpTools registers them with agents running in the browser. Kept apart from
// lib/mcp.js because that file pulls the Markdown converter, which has no place
// in a client bundle.
export const TOOLS = [
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
