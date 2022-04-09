// @ts-nocheck

export async function onRequestGet() {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
    const data = await res.json();
    const info = JSON.stringify(data);

    return new Response(JSON.stringify({
        name: process.env.admin_name,
        info
    }));
}
