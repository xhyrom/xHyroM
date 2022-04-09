const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,HEAD,POST,OPTIONS",
    "Access-Control-Max-Age": "86400",
}

export const handleOptions = () => {
    return new Response(null,{
        headers: corsHeaders
    })
}