addEventListener('fetch', (event) => {
    const response = new Response(JSON.stringify({
        message: 'Hello World!'
    }))
    
    event.respondWith(response);
})