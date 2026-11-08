'use client';

import { useEffect } from 'react';
import { TOOLS } from '../../lib/mcp-tools';

/** Calls the site's own MCP server, so the two can never answer differently. */
async function callTool(name, args, signal) {
  try {
    const res = await fetch('/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name, arguments: args } }),
      signal,
    });
    const { result, error } = await res.json();
    if (result) return result;
    throw new Error(error?.message || `HTTP ${res.status}`);
  } catch (err) {
    // Returned rather than thrown: the spec hides a rejection's reason from the
    // agent, which would then have nothing to act on.
    return { content: [{ type: 'text', text: `The tool could not run: ${err.message}` }], isError: true };
  }
}

/**
 * Renders nothing; offers the site's read-only tools to agents in the browser.
 *
 * The spec has moved the API to document.modelContext, while earlier drafts and
 * some tools still use navigator.modelContext. Both get the tools; where they
 * are one object, the Set registers once.
 */
export default function WebMcpTools() {
  useEffect(() => {
    const contexts = new Set([document.modelContext, navigator.modelContext].filter(Boolean));
    if (!contexts.size) return undefined;

    const controller = new AbortController();
    contexts.forEach((context) => {
      TOOLS.forEach(({ name, title, description, inputSchema }) => {
        // Failing to offer a tool must never disturb the page, whether the call
        // throws or rejects (an aborted registration rejects by design).
        try {
          Promise.resolve(
            context.registerTool(
              {
                name,
                title,
                description,
                inputSchema,
                annotations: { readOnlyHint: true },
                execute: (args, options) => callTool(name, args ?? {}, options?.signal),
              },
              { signal: controller.signal }
            )
          ).catch(() => {});
        } catch {}
      });
    });
    return () => controller.abort();
  }, []);

  return null;
}
