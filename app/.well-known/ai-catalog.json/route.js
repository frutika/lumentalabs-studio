import { ardManifest, CARD_HEADERS } from '../../../lib/mcp';

export const dynamic = 'force-static';

// What SEP-2127 has clients fetch first when discovering a domain's servers.
export function GET() {
  return new Response(JSON.stringify(ardManifest(), null, 2), {
    headers: { 'Content-Type': 'application/ai-catalog+json', ...CARD_HEADERS },
  });
}
