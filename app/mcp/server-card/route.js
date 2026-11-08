import { serverCard, CARD_HEADERS } from '../../../lib/mcp';

export const dynamic = 'force-static';

export function GET() {
  return new Response(JSON.stringify(serverCard(), null, 2), {
    headers: { 'Content-Type': 'application/mcp-server-card+json', ...CARD_HEADERS },
  });
}
