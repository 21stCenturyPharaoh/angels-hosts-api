/**
 * H.A.L.L.EL PLATFORM
 * 亚洲之门
 *
 * angels-hosts-api3
 *
 * MISSION 2B:
 * Hermes-Toth Service Contract
 *
 * SECURITY:
 *   - No EINs
 *   - No tax IDs
 *   - No public "firewall" claims
 *   - Internal Hermes requests require shared secret
 */

const VIDEOS = [
  { id: "KRiIS2qplRI", title: "The Institutional Shield", slot: "INSTITUTIONAL SHIELD", youtube: "https://www.youtube.com/watch?v=KRiIS2qplRI", embed: "https://www.youtube.com/embed/KRiIS2qplRI", status: "active" },
  { id: "SGPJWd2q2RM", title: "H.A.L.L.EL Official Video / Training", slot: "H.A.L.L.EL", youtube: "https://www.youtube.com/watch?v=SGPJWd2q2RM", embed: "https://www.youtube.com/embed/SGPJWd2q2RM", status: "active" },
  { id: "yKufPwpT4E4", title: "TOTH The Scribe", slot: "TOTH / SCRIBE", youtube: "https://www.youtube.com/watch?v=yKufPwpT4E4", embed: "https://www.youtube.com/embed/yKufPwpT4E4", status: "active" },
  { id: "dhLboOnPljo", title: "Pharaoh Conglomerate Autonomous Synthetic Assets", slot: "PHARAOH CONGLOMERATE", youtube: "https://www.youtube.com/watch?v=dhLboOnPljo", embed: "https://www.youtube.com/embed/dhLboOnPljo", status: "active" },
  { id: "Dk2nBc8_97M", title: "Registry Affiliate Accelerator", slot: "REGISTRY ACCELERATOR", youtube: "https://www.youtube.com/watch?v=Dk2nBc8_97M", embed: "https://www.youtube.com/embed/Dk2nBc8_97M", status: "active" },
  { id: "4JIA5fNc4qw", title: "Autonomous Synthetic Assets Trailer", slot: "AUTONOMOUS SYNTHETIC ASSETS", youtube: "https://www.youtube.com/watch?v=4JIA5fNc4qw", embed: "https://www.youtube.com/embed/4JIA5fNc4qw", status: "active" },
  { id: "1ePOgjtA2q8", title: "The Unsealing", slot: "THE UNSEALING", youtube: "https://www.youtube.com/watch?v=1ePOgjtA2q8", embed: "https://www.youtube.com/embed/1ePOgjtA2q8", status: "active" }
];

const ENGINES = {
  VOLUNTEER_EXCHANGE: "https://pharaoh-serve-flow.base44.app",
  CORE_ENGINE: "https://pharaoh-core-engine.base44.app",
  WATCHER: "https://pharaoh-sight-engine.base44.app",
  SOVEREIGN_ENGINE: "https://pharaoh-sovereign-engine.base44.app",
  DECISION_ENGINE: "https://sovereign-decision-engine.base44.app",
  VOLUNTEER_PORTAL: "https://pharaoh-direct-flow.base44.app",
  SYNERGY_HUB: "https://pharaoh-synergy-hub.base44.app",
  FINANCIAL_RAIL: "https://pharaoh-nexus-gold.base44.app"
};

const BASE44 = {
  version: "V27.10",
  apps: 8,
  count: 8,
  status: "operational",
  registry: "https://registry.pharaoh-conglomerate.org",
  conglomerate: "https://pharaoh-conglomerate.org",
  hermes: "https://hermes.pharaoh-conglomerate.org",
  endpoints: {
    engines: "/v27.5/engines.json",
    base44: "/v27.5/base44.json",
    whatsapp: "/v27.5/whatsapp.json",
    missions: "/v27.5/missions.json",
    health: "/v27.5/health",
    videos: "/v27.5/videos.json",
    proxy: "/v27.5/proxy/{ENGINE_KEY}/{path}"
  },
  engines: ENGINES
};

const WHATSAPP = {
  channel: "whatsapp",
  platform: "WhatsApp Business API",
  display: "+231 H.A.L.L.EL",
  webhook: "/v27.5/whatsapp/webhook",
  verify_token: "hallel_v27_5_verify",
  commands: ["JOIN", "MISSION", "DONATE", "TRACK", "VOLUNTEER", "HELP", "STATUS", "ENGINES"],
  flows: {
    JOIN: "Volunteer onboarding",
    MISSION: "Mission assignment",
    DONATE: "Financial rail",
    TRACK: "Shipment tracking",
    VOLUNTEER: "Volunteer exchange"
  },
  status: "active",
  region: "Liberia / Global"
};

const MISSIONS = [
  "Volunteer_Exchange", "EcoToken_Rewards", "Diamond_Credentials", "Mission_Control",
  "Strategic_Sims", "Governance_Analytics", "Shipment_Tracking", "Stewardship_Reports",
  "Donor_Recognition", "Sovereign_Command_UI"
];

const SYNTHETIC_ASSETS = ["Hermes-Toth-Agent", "HALL.EL", "Michael", "Gabriel", "Raphael", "Uriel", "Sariel", "Raguel", "Remiel"];

function normalizeEntity(entity) {
  return entity === "nonprofit" ? "nonprofit" : "commercial";
}

function J(obj, status = 200) {
  return new Response(JSON.stringify(obj, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, X-Internal-Secret",
      "Cache-Control": "no-store"
    }
  });
}

function authorizeHermes(request, env) {
  const supplied = request.headers.get("X-Internal-Secret");
  if (!supplied) return false;
  if (!env.INTERNAL_SHARED_SECRET) {
    console.error("INTERNAL_SHARED_SECRET is not configured");
    return false;
  }
  return supplied === env.INTERNAL_SHARED_SECRET;
}

function hermesStatus(data = {}) {
  return {
    status: "accepted",
    hermes: "Hermes-Toth",
    entity: normalizeEntity(data.entity),
    pillar: data.pillar || "hall-el",
    event: data.event || "platform.status",
    timestamp: new Date().toISOString(),
    capabilities: { engines: Object.keys(ENGINES), videos: VIDEOS.length, missions: MISSIONS.length, whatsapp: true }
  };
}

function hermesEngineLookup(data = {}) {
  const requested = String(data.engine || data.engineKey || "").toUpperCase();
  if (!requested) return { status: "error", error: "missing_engine" };
  const target = ENGINES[requested];
  if (!target) return { status: "error", error: "unknown_engine", engine: requested, available: Object.keys(ENGINES) };
  return { status: "accepted", engine: requested, target, entity: normalizeEntity(data.entity), timestamp: new Date().toISOString() };
}

function hermesMediaLookup(data = {}) {
  if (!data.videoId && !data.slot) {
    return { status: "accepted", count: VIDEOS.length, videos: VIDEOS };
  }
  const video = VIDEOS.find(v => v.id === data.videoId || v.slot === data.slot);
  if (!video) return { status: "error", error: "media_not_found" };
  return { status: "accepted", media: video, entity: normalizeEntity(data.entity), timestamp: new Date().toISOString() };
}

function hermesMissionLookup(data = {}) {
  return { status: "accepted", entity: normalizeEntity(data.entity), count: MISSIONS.length, missions: MISSIONS, timestamp: new Date().toISOString() };
}

async function handleHermes(request, env) {
  if (!authorizeHermes(request, env)) {
    return J({ status: "denied", error: "Unauthorized Hermes request" }, 401);
  }
  if (request.method !== "POST") {
    return J({ error: "POST required" }, 405);
  }
  let data = {};
  try {
    data = await request.json();
  } catch {
    return J({ error: "invalid_json" }, 400);
  }
  const action = String(data.action || data.event || "status").toLowerCase();
  switch (action) {
    case "status":
    case "platform.status":
      return J(hermesStatus(data));
    case "engine.lookup":
    case "engine":
      return J(hermesEngineLookup(data));
    case "media.lookup":
    case "media":
      return J(hermesMediaLookup(data));
    case "mission.lookup":
    case "missions":
      return J(hermesMissionLookup(data));
    default:
      return J({ status: "error", error: "unknown_action", action, available: ["status", "engine.lookup", "media.lookup", "mission.lookup"] }, 400);
  }
}

function buildReplyText(command) {
  switch (command) {
    case "JOIN": return `Welcome to H.A.L.L.EL! To join as a volunteer, visit: ${ENGINES.VOLUNTEER_PORTAL}`;
    case "MISSION": return `Active missions:\n${MISSIONS.map((m, i) => `${i + 1}. ${m}`).join("\n")}`;
    case "DONATE": return `Thank you for supporting the mission. Donation portal: ${ENGINES.FINANCIAL_RAIL}`;
    case "TRACK": return `Track your shipment/mission status here: ${ENGINES.WATCHER}`;
    case "VOLUNTEER": return `Volunteer Exchange: ${ENGINES.VOLUNTEER_EXCHANGE}`;
    case "STATUS": return `System status: operational. ${Object.keys(ENGINES).length} engines online.`;
    case "ENGINES": return `Engines online:\n${Object.entries(ENGINES).map(([k, v]) => `${k}: ${v}`).join("\n")}`;
    case "HELP":
    default: return `H.A.L.L.EL Commands:\n${WHATSAPP.commands.join(", ")}\nSend any of these keywords to get started.`;
  }
}

async function sendWhatsAppMessage(to, text, env) {
  if (!env.WHATSAPP_TOKEN || !env.WHATSAPP_PHONE_ID) {
    console.error("Missing WhatsApp credentials");
    return { ok: false, error: "missing_credentials" };
  }
  const resp = await fetch(`https://graph.facebook.com/v20.0/${env.WHATSAPP_PHONE_ID}/messages`, {
    method: "POST",
    headers: { "Authorization": `Bearer ${env.WHATSAPP_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify({ messaging_product: "whatsapp", to, type: "text", text: { body: text } })
  });
  const data = await resp.json().catch(() => ({}));
  return { ok: resp.ok, status: resp.status, data };
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (request.method === "OPTIONS") return J({ ok: true });

    if (path === "/internal/hermes") {
      return handleHermes(request, env);
    }

    if (path === "/v27.5/engines.json" || path === "/v27.5/engines") {
      return J({ version: "V27.10", timestamp: new Date().toISOString(), engines: ENGINES, count: Object.keys(ENGINES).length, base44: BASE44 });
    }

    if (path === "/v27.5/base44.json" || path === "/v27.5/base44") {
      return J({ version: "V27.10", base44: BASE44, engines: ENGINES, timestamp: new Date().toISOString() });
    }

    if (path === "/v27.5/whatsapp.json" || path === "/v27.5/whatsapp") {
      return J({ version: "V27.10", whatsapp: WHATSAPP, timestamp: new Date().toISOString() });
    }

    if (path === "/v27.5/missions.json" || path === "/v27.5/missions") {
      return J({ missions: MISSIONS, count: MISSIONS.length, version: "V27.10" });
    }

    if (path === "/v27.5/health" || path === "/health" || path === "/v27.1/health") {
      return J({
        status: "ok", version: "V27.10", engines: Object.keys(ENGINES).length, videos: VIDEOS.length, missions: MISSIONS.length,
        whatsapp: "connected", base44: "operational", assets: SYNTHETIC_ASSETS.length, timestamp: new Date().toISOString()
      });
    }

    if (path === "/v27.5/videos.json" || path === "/v27.1/videos.json") {
      return J({ videos: VIDEOS, count: VIDEOS.length, version: "V27.10" });
    }

    if (path === "/v27.5/whatsapp/webhook" && request.method === "GET") {
      const mode = url.searchParams.get("hub.mode");
      const token = url.searchParams.get("hub.verify_token");
      const challenge = url.searchParams.get("hub.challenge");
      if (mode === "subscribe" && token && env.WHATSAPP_VERIFY_TOKEN && token === env.WHATSAPP_VERIFY_TOKEN) {
        return new Response(challenge, { status: 200 });
      }
      return J({ error: "verify_failed" }, 403);
    }

    if (path === "/v27.5/whatsapp/webhook" && request.method === "POST") {
      let body;
      try { body = await request.json(); } catch { return J({ error: "invalid_json" }, 400); }
      try {
        const entries = body.entry || [];
        for (const entry of entries) {
          const changes = entry.changes || [];
          for (const change of changes) {
            const value = change.value || {};
            const messages = value.messages || [];
            for (const msg of messages) {
              const from = msg.from;
              const text = (msg.text && msg.text.body) ? msg.text.body.trim() : "";
              const command = text.toUpperCase().split(/\s+/)[0];
              const replyText = WHATSAPP.commands.includes(command) ? buildReplyText(command) : buildReplyText("HELP");
              ctx.waitUntil(sendWhatsAppMessage(from, replyText, env));
            }
          }
        }
      } catch (e) { console.error("Webhook processing error:", e); }
      return J({ received: true });
    }

    if (path.startsWith("/v27.5/proxy/")) {
      const parts = path.replace("/v27.5/proxy/", "").split("/");
      const engineKey = parts.shift();
      const remainingPath = parts.join("/");
      const engineBase = ENGINES[engineKey];
      if (!engineBase) return J({ error: "unknown_engine", engine: engineKey, available: Object.keys(ENGINES) }, 404);
      const targetUrl = `${engineBase}/${remainingPath}${url.search}`;
      try {
        const proxied = await fetch(targetUrl, {
          method: request.method,
          headers: request.headers,
          body: ["GET", "HEAD"].includes(request.method) ? undefined : await request.clone().arrayBuffer()
        });
        const proxyHeaders = new Headers(proxied.headers);
        proxyHeaders.set("Access-Control-Allow-Origin", "*");
        return new Response(proxied.body, { status: proxied.status, headers: proxyHeaders });
      } catch (e) {
        return J({ error: "proxy_failed", engine: engineKey, target: targetUrl, message: String(e) }, 502);
      }
    }

    const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>H.A.L.L.EL PLATFORM V27.10</title>
<style>
body{background:#070b1e;color:#e6e8ff;font-family:system-ui,sans-serif;margin:0}
.top{padding:24px;background:#0f1630;border-bottom:1px solid #1e2a5a;text-align:center}
.gold{color:#D4AF37}.mono{font-family:monospace;font-size:12px;opacity:.7}
.grid{max-width:1200px;margin:auto;padding:24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}
.card{background:#0f1630;border:1px solid #1e2a5a;border-radius:12px;padding:12px;font-size:12px}
.videos{max-width:1200px;margin:auto;padding:0 24px 24px 24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:16px}
.vid{background:#0f1630;border:1px solid #1e2a5a;border-radius:16px;overflow:hidden}
.vid iframe{width:100%;aspect-ratio:16/9;border:0}.vid .meta{padding:12px;font-size:12px}
a{color:#D4AF37;text-decoration:none}
</style></head><body>
<div class="top"><h1>H.A.L.L.EL PLATFORM <span class="gold">V27.10</span></h1>
<p class="mono">7 videos | 8 Base44 Engines | WhatsApp Active</p>
</div>
<div class="grid">
${Object.entries(ENGINES).map(([k,v])=>`<div class="card"><b>${k}</b><br><a href="${v}" target="_blank">${v}</a></div>`).join('')}
</div>
<div class="videos">
${VIDEOS.map(v=>`<div class="vid"><iframe src="${v.embed}" allowfullscreen></iframe><div class="meta"><b>${v.slot}</b> — ${v.title}</div></div>`).join('')}
</div>
</body></html>`;

    return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8", "Access-Control-Allow-Origin": "*" } });
  }
};
