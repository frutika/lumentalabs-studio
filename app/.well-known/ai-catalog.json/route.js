import { MCP_URL, CARD_HEADERS } from '../../../lib/mcp';
import { site } from '../../../site.config';

export const dynamic = 'force-static';

// What SEP-2127 has clients fetch first when discovering a domain's servers.
export function GET() {
  const catalog = {
    specVersion: '1.0',
    entries: [
      {
        identifier: `urn:air:${site.domain}:mcp:site`,
        type: 'application/mcp-server-card+json',
        url: `${MCP_URL}/server-card`,
      },
    ],
  };
  return new Response(JSON.stringify(catalog, null, 2), {
    headers: { 'Content-Type': 'application/ai-catalog+json', ...CARD_HEADERS },
  });
}
