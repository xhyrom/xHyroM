// @ts-nocheck

export async function onRequestGet() {
  return new Response(JSON.stringify({
    test: true
  }));
}
