import { ardManifest, CARD_HEADERS } from '../../../lib/mcp';

export const dynamic = 'force-static';

// Where an ARD consumer must look first when resolving a domain's entries.
export function GET() {
  return new Response(JSON.stringify(ardManifest(), null, 2), {
    headers: { 'Content-Type': 'application/json', ...CARD_HEADERS },
  });
}
