import { site } from '../../site.config';
import { handleRequest, PROTOCOL_VERSIONS, RpcError } from '../../lib/mcp';

// Streamable HTTP, stateless: JSON answers to POST and nothing else.
export const dynamic = 'force-dynamic';

const MAX_BODY_BYTES = 64 * 1024;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

const rpcError = (id, code, message, status = 200) =>
  json({ jsonrpc: '2.0', id, error: { code, message } }, status);

const notAllowed = () =>
  new Response(null, { status: 405, headers: { Allow: 'POST', 'Cache-Control': 'no-store' } });

// No server-to-client stream to open and no session to end.
export const GET = notAllowed;
export const DELETE = notAllowed;

const allowedOrigins = new Set([site.url, `https://www.${site.domain}`]);

export async function POST(req) {
  // The transport spec requires this, against DNS rebinding. No Origin means
  // not a browser, and the rebinding it guards against needs one.
  const origin = req.headers.get('origin');
  if (origin && !allowedOrigins.has(origin)) return rpcError(null, -32000, 'Origin not allowed', 403);

  const version = req.headers.get('mcp-protocol-version');
  if (version && !PROTOCOL_VERSIONS.includes(version)) {
    return rpcError(null, -32000, `Unsupported MCP-Protocol-Version: ${version}`, 400);
  }

  if (!(req.headers.get('content-type') || '').includes('application/json')) {
    return rpcError(null, -32600, 'Content-Type must be application/json', 415);
  }

  const raw = await req.text();
  if (Buffer.byteLength(raw) > MAX_BODY_BYTES) return rpcError(null, -32600, 'Request too large', 413);

  let msg;
  try {
    msg = JSON.parse(raw);
  } catch {
    return rpcError(null, -32700, 'Parse error', 400);
  }

  if (!msg || typeof msg !== 'object' || Array.isArray(msg) || msg.jsonrpc !== '2.0') {
    return rpcError(null, -32600, 'Expected one JSON-RPC 2.0 message', 400);
  }

  // Notifications and responses need no answer, and there is no state for them
  // to change.
  if (msg.id === undefined || msg.id === null || !msg.method) {
    return new Response(null, { status: 202, headers: { 'Cache-Control': 'no-store' } });
  }

  try {
    return json({ jsonrpc: '2.0', id: msg.id, result: await handleRequest(msg.method, msg.params) });
  } catch (err) {
    if (err instanceof RpcError) return rpcError(msg.id, err.code, err.message);
    console.error('[mcp]', msg.method, err);
    return rpcError(msg.id, -32603, 'Internal error');
  }
}
