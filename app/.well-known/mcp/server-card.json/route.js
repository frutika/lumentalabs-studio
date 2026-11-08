import { wellKnownServerCard, CARD_HEADERS } from '../../../../lib/mcp';

export const dynamic = 'force-static';

export function GET() {
  return new Response(JSON.stringify(wellKnownServerCard(), null, 2), {
    headers: { 'Content-Type': 'application/json', ...CARD_HEADERS },
  });
}
