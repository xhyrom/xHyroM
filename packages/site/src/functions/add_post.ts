// @ts-nocheck

export async function onRequestGet({ env }) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
    const data = await res.json();
    const info = JSON.stringify(data);

    return new Response(JSON.stringify({
        test: typeof admin_name,
        info
    }));
}
