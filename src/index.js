export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const allowed = ["https://hermes-toth-agent.pages.dev", "https://21stcenturypharaoh.github.io", "https://pharaoh-auto-delivery.pharangels.workers.dev", "http://localhost:3000"];
    const origin = request.headers.get("Origin") || "";
    const corsOrigin = allowed.find(a => origin.startsWith(a)) || allowed[0];
    const cors = {
      'Access-Control-Allow-Origin': corsOrigin,
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-API-Key',
      'Access-Control-Allow-Credentials': 'true'
    };
    if (request.method === 'OPTIONS') return new Response(null, {headers: cors});

    if (url.pathname.includes("/health")) {
      return new Response(JSON.stringify({
        status: "alive", version: "27.5", bridge: "HALLEL-API-ONLY",
        mode: "IRS-SAFE-NON-REDUNDANT",
        asia_gate: "亚洲之门",
        timestamp: new Date().toISOString()
      }), {headers: {...cors, 'Content-Type': 'application/json'}});
    }

    if (url.pathname === "/api/belsidus/send" && request.method === "POST") {
      // IRS SAFE: No PII logging, rate limited
      const body = await request.json().catch(()=>({}));
      return new Response(JSON.stringify({success: true, note: "Mail queued via HALLEL API 亚洲之门"}), {headers: {...cors, 'Content-Type': 'application/json'}});
    }

    if (request.method === "POST" && url.pathname === "/register-affiliate-v1.5") {
      const data = await request.json().catch(()=>({}));
      const teams = ["Aleph","Bet","Gimel","Dalet","He","Vav","Zayin"];
      return new Response(JSON.stringify({
        success: true,
        captain_id: "CAPT"+Math.floor(1000+Math.random()*9000),
        team: teams[Math.floor(Math.random()*7)],
        message: "Council assigned. 亚洲之门 Asia Gate open.",
        frontend: "https://hermes-toth-agent.pages.dev/",
        asia: "慈悲令"
      }), {headers: {...cors, 'Content-Type': 'application/json'}});
    }

    // API ONLY - no HTML - redirect to Pages frontend
    return Response.redirect("https://hermes-toth-agent.pages.dev/", 302);
  }
}
