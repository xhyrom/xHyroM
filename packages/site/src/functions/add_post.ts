// @ts-nocheck

export async function onRequestGet() {
    return new Response(JSON.stringify({
        test: typeof admin_name === 'undefined' ? 'nothing' : admin_name
    }));
}
