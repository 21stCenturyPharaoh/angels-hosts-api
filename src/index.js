export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };
    if (request.method === 'OPTIONS') return new Response(null, {headers: cors});
    if (url.pathname === "/v27.1/health") return new Response(JSON.stringify({ status: "alive", version: "27.1", bridge: "HALLEL", worker: "angels-hosts-api3" }), {headers: {...cors, 'Content-Type': 'application/json'}});
    if (url.pathname === "/") return new Response("HALLEL V27.1 ONLINE - angels-hosts-api3", {headers: {'Content-Type': 'text/html'}});
    return new Response("404 - Node Not Found", {status: 404});
  }
}
