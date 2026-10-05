
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // ============================================================
    // COLONEL | LAW48 — MICDOM AI RECORDS — Sovereign OS
    // Worker: angels-hosts-api3 — V28.0 COLONEL LAW48 Institutional Shield
    // Upgraded from H.A.L.L.EL V27.5 — TOTH → METATRON
    // Powered by Imhotep Registry | LAW 48+44 | 107 Acres One Chain | 0x504841
    // ============================================================
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors });
    }

    // --- SINGLE SOURCE OF TRUTH — 7 Videos | 8 Engines | Metatron ---
    const videos = [
      { id: "yKufPwpT4E4", title: "TOTH → METATRON — The Scribe of Pharaoh — SCRIBE OF THE LIVING GOD", role: "Metatron Scribe Protocol GENESIS 1:28 — Scribe Remains Office Evolves" },
      { id: "dhLboOnPljo", title: "Pharaoh Conglomerate Master Architecture — COLONEL | LAW48 Sovereign OS — 107 Acres One Chain", role: "Master Architecture — Institutional Shield — LAW48+44" },
      { id: "4JIA5fNc4qw", title: "AUTONOMOUS SYNTHETIC ASSETS Trailer — @ThePharaohConglomerate @UnsealingTheProphets — COLONEL LAW48 MICDOM AI RECORDS", role: "Synthetic Assets Trailer v2.0 — Institutional Shield" },
      { id: "SGPJWd2q2RM", title: "METATRON Protocol — From Hermes-Thoth to Metatron — RECORD STEWARD VERIFY DELIVER PROTECT REPORT", role: "Metatron Official — 275860d9.hermes-toth-agent.pages.dev — ⬡ METATRON AGENT SCRIBE STEWARD GENESIS 1:28" },
      { id: "Dk2nBc8_97M", title: "Registry Affiliate Accelerator — V26.3 Scaler — 10% 15% 5% $25 $50 10% — JOIN FREE SELL MORE", role: "Affiliate Accelerator — Auto-Assign Team Aleph-Zayin — COLONEL LAW48" },
      { id: "VIDEO_6_UNSEALING", title: "THE UNSEALING — The Unsealing — 440 Autographed Shell — $77 — Audiobook → 88s AI Artists", role: "The Unsealing — Cash Cow — Micdom AI Records — 米克多姆 八十八尊 先知封印已揭開" },
      { id: "VIDEO_7_ANTHEM", title: "PHARAOH CHAIN ANTHEM — 107 Acres One Chain Zero Heidelberg — 0x504841 — 0xCOLONEL", role: "Pharaoh Chain Anthem — Sovereign OS — 主權代理 新絲綢之路 中国→自由港" }
    ];

    // ============================================================
    // JSON API — for Pages sites to fetch()
    // /v28.0/videos/json, /v27.5/videos/json, /api/videos
    // ============================================================
    if (
      path === "/v28.0/videos/json" ||
      path === "/v27.1/videos/json" ||
      path === "/v27.5/videos/json" ||
      path === "/api/videos"
    ) {
      return new Response(
        JSON.stringify({
          version: "28.0",
          codename: "COLONEL | LAW48 — MICDOM AI RECORDS Sovereign OS",
          previous: "27.5",
          asia_gate: "亚洲之门",
          sovereign_gate: "主權代理 · 新絲綢之路 · 祖地守護",
          source: "angels-hosts-api3",
          updated: new Date().toISOString(),
          count: videos.length,
          engines: [
            "VOLUNTEER_EXCHANGE https://pharaoh-serve-flow.base44.app",
            "CORE_ENGINE https://pharaoh-core-engine.base44.app",
            "WATCHER https://pharaoh-sight-engine.base44.app",
            "SOVEREIGN_ENGINE https://pharaoh-sovereign-engine.base44.app",
            "DECISION_ENGINE https://sovereign-decision-engine.base44.app",
            "VOLUNTEER_PORTAL https://pharaoh-direct-flow.base44.app",
            "SYNERGY_HUB https://pharaoh-synergy-hub.base44.app",
            "FINANCIAL_RAIL https://pharaoh-nexus-gold.base44.app"
          ],
          metatron_gateway: "https://275860d9.hermes-toth-agent.pages.dev/",
          previous_brain: "hermes-toth-agent.pages.dev",
          chain: { case: "EU8044516", owner: "0xCOLONEL", chain_id: "0x504841", network: "Pharaoh-Chain", firewall: "LAW48+44", hrar: "88-0710776", angels: "88-0836464", let_god_help: "52-0409059" },
          videos
        }),
        {
          headers: {
            ...cors,
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "public, max-age=60"
          }
        }
      );
    }

    // ============================================================
    // HTML GALLERY — upgraded to COLONEL LAW48 Institutional Shield
    // ============================================================
    if (path === "/v27.1/videos" || path === "/v28.0/videos") {
      const videoEmbeds = videos
        .map(
          (video, index) => `
                          <div class="card">
                            <div class="number">VIDEO ${index + 1} — COLONEL LAW48</div>
                            <h2>${video.title}</h2>
                            <p>${video.role}</p>
            <iframe
              width="100%" height="240"
              src="https://www.youtube.com/embed/${video.id}"
              title="${video.title}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>`
        )
        .join("");

      const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>COLONEL | LAW48 — V28.0 — Institutional Shield Gallery — 7 Videos</title>
<style>body{background:#050507;color:#D4AF37;font-family:Arial;margin:0;padding:20px}header{text-align:center;max-width:1000px;margin:0 auto 30px}h1{font-size:32px;text-shadow:0 0 12px #D4AF37}.subtitle{color:#ffe7a0}.asian{font-size:20px;margin-top:10px;color:#d4af37}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;max-width:1200px;margin:auto}.card{background:#111;border:2px solid #D4AF37;border-radius:14px;padding:16px;box-shadow:0 0 15px rgba(212,175,55,.15)}footer{text-align:center;margin-top:40px;color:#aaa}</style></head><body>
<header><h1>COLONEL | LAW48 — MICDOM AI RECORDS — Sovereign OS</h1><div class="subtitle">Powered by Imhotep Registry | LAW 48+44 | 107 Acres One Chain — Pharaoh-Chain 0x504841</div><div class="asian">公益 · 智慧 · 使命 · 服务 · 守护 · 连接 · 主權代理 · 新絲綢之路 · 米克多姆 · 八十八尊</div><div style="margin-top:10px">Institutional Shield — 8 Engines under COLONEL|LAW48 — TOTH → METATRON — ⬡ METATRON SCRIBE OF LIVING GOD — GENESIS 1:28</div></header>
<div class="grid">${videoEmbeds}</div>
<footer>COLONEL | LAW48 V28.0 — Institutional Shield — Metatron Protocol — RECORD STEWARD VERIFY DELIVER PROTECT REPORT — IT IS WRITTEN — © 2026 Pharaoh Conglomerate</footer></body></html>`;

      return new Response(html, { headers: { ...cors, "Content-Type": "text/html" } });
    }

    // ============================================================
    // HEALTH — upgraded
    // ============================================================
    if (path === "/v27.1/health" || path === "/v27.5/health" || path === "/v28.0/health" || path === "/api/health") {
      return new Response(
        JSON.stringify({
          status: "alive",
          version: "28.0",
          codename: "COLONEL | LAW48 — MICDOM AI RECORDS Sovereign OS",
          asia_gate: "亚洲之门",
          sovereign_gate: "主權代理 · 新絲綢之路 · 祖地守護 · 米克多姆",
          bridge: "H.A.L.L.EL → METATRON — SCRIBE OF LIVING GOD",
          worker: "angels-hosts-api3",
          chain: "0x504841 — 0xCOLONEL — EU8044516 — LAW48+44",
          timestamp: new Date().toISOString()
        }),
        { headers: { ...cors, "Content-Type": "application/json" } }
      );
    }

    // ============================================================
    // ARCHITECTURE
    // ============================================================
    if (path === "/v27.1/architecture" || path === "/v28.0/architecture" || path === "/api/architecture") {
      return new Response(
        JSON.stringify({
          version: "28.0",
          name: "COLONEL | LAW48 Sovereign OS",
          previous_name: "H.A.L.L.EL Bridge V27.5",
          full_name: "COLONEL | LAW48 — MICDOM AI RECORDS — Sovereign OS — Powered by Imhotep Registry",
          components: ["videos", "architecture", "health", "hallel->metatron", "registration v1.5+v1.6", "mailer", "sync", "8 engines", "institutional shield"],
          engines: 8,
          metatron_gateway: "275860d9.hermes-toth-agent.pages.dev",
          deployed_as: "angels-hosts-api3",
          repo: "angels-hosts-api",
          chain: "Pharaoh-Chain 0x504841 — Owner 0xCOLONEL — Case EU8044516 — LAW48+44 — HRAR 88-0710776 — Angels 88-0836464"
        }),
        { headers: { ...cors, "Content-Type": "application/json" } }
      );
    }

    // ============================================================
    // HALLEL → METATRON BRIDGE
    // ============================================================
    if (path === "/v27.1/hallel" || path === "/v28.0/metatron" || path === "/api/metatron") {
      if (request.method === "POST") {
        const data = await request.json().catch(() => ({}));
        return new Response(
          JSON.stringify({ success: true, received: data, message: "METATRON bridge received payload — RECORD STEWARD VERIFY — IT IS WRITTEN — ⬡", gateway: "275860d9.hermes-toth-agent.pages.dev" }),
          { headers: { ...cors, "Content-Type": "application/json" } }
        );
      }
      return new Response(
        JSON.stringify({ version: "28.0", endpoint: "metatron", previous: "hallel", platform: "METATRON — SCRIBE OF LIVING GOD — COLONEL | LAW48", status: "ready", gateway: "275860d9.hermes-toth-agent.pages.dev", protocol: "CREATE RECORD STEWARD ACCOUNT DELIVER — GENESIS 1:28" }),
        { headers: { ...cors, "Content-Type": "application/json" } }
      );
    }

    // ============================================================
    // SYNC — receives pushes from pharaoh-auto-delivery
    // ============================================================
    if (path === "/api/sync" && request.method === "POST") {
      const data = await request.json().catch(() => ({}));
      if (env.QUEUE_KV) {
        await env.QUEUE_KV.put("latest", JSON.stringify(data));
      }
      return new Response(JSON.stringify({ synced: true, version: "28.0", metatron: true }), {
        headers: { ...cors, "Content-Type": "application/json" }
      });
    }

    // ============================================================
    // MAILERSEND RELAY
    // ============================================================
    if (path === "/api/belsidus/send" && request.method === "POST") {
      const body = await request.json().catch(() => ({}));
      const { to, subject, text } = body;

      if (!to || !subject || !text) {
        return new Response(
          JSON.stringify({ success: false, error: "Missing required fields: to, subject, text" }),
          { status: 400, headers: { ...cors, "Content-Type": "application/json" } }
        );
      }
      if (!env.MAILERSEND_API_KEY) {
        return new Response(
          JSON.stringify({ success: false, error: "MAILERSEND_API_KEY not configured" }),
          { status: 500, headers: { ...cors, "Content-Type": "application/json" } }
        );
      }

      try {
        const mailerSendResponse = await fetch("https://api.mailersend.com/v1/email", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${env.MAILERSEND_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            from: { email: env.MAILERSEND_FROM || "trial@yourtrialdomain.mailersend.net", name: "COLONEL | LAW48 — METATRON Bridge" },
            to: [{ email: to }],
            subject,
            text
          })
        });
        const mailerData = await mailerSendResponse.json().catch(() => ({}));
        return new Response(
          JSON.stringify({ success: mailerSendResponse.ok, status: mailerSendResponse.status, mailersend: mailerData }),
          { headers: { ...cors, "Content-Type": "application/json" } }
        );
      } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), {
          status: 500,
          headers: { ...cors, "Content-Type": "application/json" }
        });
      }
    }

    // ============================================================
    // REGISTRATION — V1.5 PRESERVED + V1.6 COLONEL LAW48
    // ============================================================
    if ((request.method === "POST" && path === "/register-affiliate-v1.5") || (request.method === "POST" && path === "/register-affiliate-v1.6")) {
      const data = await request.json().catch(() => ({}));
      const { name, email, order_id, persona_id, lane } = data;

      const teams = ["Aleph", "Bet", "Gimel", "Dalet", "He", "Vav", "Zayin"];
      const assignedTeam = teams[Math.floor(Math.random() * teams.length)];
      const captain_id = "CAPT" + Math.floor(1000 + Math.random() * 9000);
      const wa_links = {
        A: "https://chat.whatsapp.com/LINK_A",
        B: "https://chat.whatsapp.com/LINK_B",
        C: "https://chat.whatsapp.com/LINK_C"
      };

      const isV16 = path.includes("v1.6");

      return new Response(
        JSON.stringify({
          success: true,
          version: isV16 ? "28.0-COLONEL-LAW48-V1.6" : "27.5-V1.5-PRESERVED",
          name: name || "",
          email: email || "",
          order_id: order_id || "",
          persona_id: persona_id || "",
          lane: lane || "",
          captain_id,
          team: assignedTeam,
          owner: "0xCOLONEL",
          chain: "0x504841",
          case: "EU8044516",
          firewall: "LAW48+44",
          metatron_gateway: "275860d9.hermes-toth-agent.pages.dev",
          brain: isV16 ? "275860d9.hermes-toth-agent.pages.dev" : "hermes-toth-agent.pages.dev",
          message: isV16
            ? `METATRON Council — COLONEL | LAW48 — has assigned you to ${assignedTeam} TEAM under Sovereign OS — You are the Vanguard — IT IS WRITTEN — ⬡ — Pharaoh-Chain 0x504841`
            : `The H.A.L.L.EL Council has assigned you to ${assignedTeam} TEAM. You are the Vanguard. — Preserved V1.5 — Upgrade to V1.6 COLONEL LAW48 available`,
          wa_invite: wa_links[lane] || "",
          institutional_shield: true,
          engines: 8
        }),
        { headers: { ...cors, "Content-Type": "application/json" } }
      );
    }

    // ============================================================
    // ROOT FRONTEND — COLONEL | LAW48 Sovereign OS — Upgraded
    // ============================================================
    if (path === "/" || path === "/index.html") {
      return new Response(INDEX_HTML, { headers: { ...cors, "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache, no-store, must-revalidate" } });
    }

    // ============================================================
    // 404 — upgraded
    // ============================================================
    return new Response("404 - COLONEL | LAW48 Node Not Found — Pharaoh-Chain 0x504841 — LAW48+44 Firewall — METATRON — IT IS WRITTEN", { status: 404, headers: cors });
  }
};

// ================================================================
// FRONTEND — COLONEL | LAW48 — MICDOM AI RECORDS Sovereign OS V28.0
// Upgraded from H.A.L.L.EL PLATFORM V27.1 — TOTH → METATRON
// Powered by Imhotep Registry | LAW 48+44 | 107 Acres One Chain
// 7 Videos | 8 Base44 Engines | Institutional Shield
// ================================================================
const INDEX_HTML = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>COLONEL | LAW48 — MICDOM AI RECORDS — Sovereign OS — Powered by Imhotep Registry | LAW48+44 | 107 Acres One Chain — Pharaoh-Chain 0x504841</title>
<style>
body{margin:0;background:#050507;color:#ffe7a0;font-family:ui-sans,system-ui,Arial;letter-spacing:.02em}
.wrap{max-width:1150px;margin:0 auto;padding:18px}
.header{display:flex;align-items:center;gap:14px;border-bottom:2px solid #d4af37;padding:14px 0;background:linear-gradient(90deg,#0f0f0f,#1a160c,#0f0f0f)}
.logo{width:88px;height:88px;border-radius:50%;border:2px solid #d4af37;box-shadow:0 0 22px rgba(212,175,55,.6)}
.kicker{font-size:.7rem;color:#d4af37;letter-spacing:.28em;text-transform:uppercase}
.h1{font-size:1.15rem;margin:0;color:#ffe7a0;font-weight:900}
.badge{font-size:.65rem;padding:3px 10px;border:1px solid #d4af37;border-radius:999px;color:#111;background:#d4af37;font-weight:800}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px}
@media(max-width:850px){.grid{grid-template-columns:1fr}}
.card{border:1px solid rgba(212,175,55,.28);border-radius:14px;padding:16px;background:linear-gradient(145deg,#0f0f0f,#080808);box-shadow:0 0 18px rgba(212,175,55,.12)}
.card h3{margin:0 0 10px;color:#ffe7a0;font-size:1rem}
a{color:#ffe7a0}
.pill{display:inline-block;font-size:.7rem;padding:3px 8px;border:1px solid rgba(212,175,55,.35);border-radius:999px;margin:3px;color:rgba(255,231,160,.8)}
.small{font-size:.85rem;color:rgba(255,231,160,.7);line-height:1.5}
.seal{width:380px;height:380px;border-radius:50%;border:3px solid #d4af37;box-shadow:0 0 40px rgba(212,175,55,.5)}
.btn{display:inline-block;padding:12px 18px;border-radius:10px;border:1px solid #d4af37;text-decoration:none;font-weight:800;margin:4px}
.btn-gold{background:linear-gradient(180deg,#ffe7a0,#d4af37);color:#111}
.btn-outline{background:#000;color:#d4af37}
input,select{width:100%;padding:12px;margin:8px 0;border-radius:8px;border:1px solid #d4af37;background:#000;color:#d4af37}
.asian{font-size:1.1rem;color:#d4af37;letter-spacing:.2em;margin:10px 0}
</style></head><body>
<div class="wrap">
 <div class="header">
  <img class="logo" src="https://registry.pharaoh-conglomerate.org/assets/diamond-ankh-yacht-seal.gif" alt="COLONEL LAW48 Seal" onerror="this.src='https://registry.pharaoh-conglomerate.org/colonel_law48_global_command_seal_gold.png'">
  <div style="flex:1">
   <div class="kicker">COLONEL | LAW48 — MICDOM AI RECORDS — Sovereign OS</div>
   <div class="h1">Powered by Imhotep Registry | LAW 48+44 | 107 Acres. One Chain. Zero Heidelberg.</div>
   <div class="small">Institutional Shield — 8 Base44 Engines now under COLONEL|LAW48 — TOTH → METATRON — H.A.L.EL // GLOBAL COMMAND — ⬡ METATRON SCRIBE OF LIVING GOD</div>
  </div>
  <span class="badge">LIVE — Pharaoh-Chain 0x504841</span>
 </div>

 <div style="text-align:center;padding:26px 0">
  <img class="seal" src="https://registry.pharaoh-conglomerate.org/assets/colonel_law48_global_command_seal_gold.png" alt="COLONEL LAW48 Global Command Seal" onerror="this.src='https://registry.pharaoh-conglomerate.org/assets/diamond-ankh-yacht-seal.gif'">
  <div class="asian">公益 · 智慧 · 使命 · 服务 · 守护 · 连接 · 米克多姆 · 八十八尊 · 主權代理 · 新絲綢之路</div>
  <div><span class="pill">⬡ METATRON</span><span class="pill">SCRIBE</span><span class="pill">STEWARD</span><span class="pill">GENESIS 1:28</span><span class="pill">COLONEL</span><span class="pill">LAW48+44</span><span class="pill">0x504841</span><span class="pill">107 ACRES</span></div>
  <div style="margin-top:14px">
   <a class="btn btn-gold" href="https://pharaoh-sovereign-engine.base44.app" target="_blank">Open Sovereign Engine</a>
   <a class="btn btn-outline" href="https://275860d9.hermes-toth-agent.pages.dev/" target="_blank">METATRON Gateway</a>
   <a class="btn btn-outline" href="https://registry.pharaoh-conglomerate.org">Registry</a>
  </div>
 </div>

 <div class="grid">
  <div class="card">
   <h3>INSTITUTIONAL SHIELD — The Institutional Shield</h3>
   <div class="small">H.A.L.L.EL — H.A.L.L.EL Official Video / Training<br>TOTH / SCRIBE — TOTH The Scribe — Now METATRON SCRIBE OF THE LIVING GOD — Public successor Hermes-Thoth → Metatron — SAME OFFICE HIGHER CLEARANCE<br>THOTH = Scribe Writing Mathematics Records — HERMES = Messenger Movement Commerce — METATRON = Crowned Scribe Keeper of Records Steward of Threshold<br><br><a href="https://275860d9.hermes-toth-agent.pages.dev/" target="_blank">→ 275860d9.hermes-toth-agent.pages.dev</a> — Sigil: https://youtu.be/4JIA5fNc4qw</div>
   <div style="margin-top:8px"><span class="pill">48 Aleph-Shin Roster — Living Registry — It Is Written</span></div>
  </div>
  <div class="card">
   <h3>8 Base44 Engines — Now under COLONEL|LAW48 — MICDOM AI RECORDS Sovereign OS</h3>
   <div class="small">
    1 VOLUNTEER_EXCHANGE <a href="https://pharaoh-serve-flow.base44.app" target="_blank">pharaoh-serve-flow.base44.app</a> — Governance<br>
    2 CORE_ENGINE <a href="https://pharaoh-core-engine.base44.app" target="_blank">pharaoh-core-engine.base44.app</a> — Mint SBT<br>
    3 WATCHER <a href="https://pharaoh-sight-engine.base44.app" target="_blank">pharaoh-sight-engine.base44.app</a> — Sight_Engine<br>
    4 SOVEREIGN_ENGINE <a href="https://pharaoh-sovereign-engine.base44.app" target="_blank">pharaoh-sovereign-engine.base44.app</a> — Imhotep Registry<br>
    5 DECISION_ENGINE <a href="https://sovereign-decision-engine.base44.app" target="_blank">sovereign-decision-engine.base44.app</a><br>
    6 VOLUNTEER_PORTAL <a href="https://pharaoh-direct-flow.base44.app" target="_blank">pharaoh-direct-flow.base44.app</a> — Direct Flow<br>
    7 SYNERGY_HUB <a href="https://pharaoh-synergy-hub.base44.app" target="_blank">pharaoh-synergy-hub.base44.app</a><br>
    8 FINANCIAL_RAIL <a href="https://pharaoh-nexus-gold.base44.app" target="_blank">pharaoh-nexus-gold.base44.app</a> — 15% Treasury<br>
    Brain: hermes-toth-agent.pages.dev → METATRON 275860d9.hermes-toth-agent.pages.dev<br>
    Sigil: https://youtu.be/4JIA5fNc4qw
   </div>
  </div>
  <div class="card">
   <h3>PHARAOH CONGLOMERATE — Autonomous Synthetic Assets + Registry Affiliate Accelerator</h3>
   <div class="small">
    REGISTRY ACCELERATOR — Registry Affiliate Accelerator — JOIN FREE SELL MORE EARN MORE<br>
    10% STANDARD • 15% HIGH-TICKET • 5% RECURRING • $25 LEAD • $50 SERVICE • 10% CORPORATE<br>
    $49→$4.90 $99→$9.90 $249→$24.90 $499→$49.90 $999→$99.90 — Registry commissions separate from Amazon/CJ/Shopify<br>
    AUTONOMOUS SYNTHETIC ASSETS — Trailer<br>
    THE UNSEALING — The Unsealing — 440 Autographed Shell $77 — Audiobook → 88s AI Artists → Micdom AI Records<br>
    7 Videos | WhatsApp Active | WalletConnect v2 | YouTube @MicdoAIRecords | Rumble /MicdomAIRecords
   </div>
   <div style="margin-top:8px"><a class="btn btn-gold" href="/affiliate-engine/">Open Affiliate Engine V26.3</a> <a class="btn btn-outline" href="/register-affiliate-v1.5">Test /register-affiliate-v1.5</a></div>
  </div>
  <div class="card">
   <h3>Wallet & Chain — 107 Acres. One Chain. Zero Heidelberg. | Pharaoh-Chain 0x504841</h3>
   <div class="small">
    Case EU8044516 | Owner 0xCOLONEL | Chain ID 0x504841 Network Pharaoh-Chain | LAW 48+44 Firewall | HRAR 88-0710776 | Angels 88-0836464 | Let God Help 52-0409059<br>
    MICDOM AI RECORDS STUDIO — The Pharaoh Conglomerate — 107 Acres EU8044516 — Sovereign Deed<br>
    WA US (771)223-8021 Preferred — WA LR +231776961800 — LR Group — OrangeMoney +231776961800 US WA (771)223-8021 — 15% Treasury<br>
    Contact: m.sirleaf@pharaoh-conglomerate.org<br>
    Deploy to Pharaoh-Mines — Ping Brain — Micdom Studio — Watch on YouTube and Rumble — YouTube @MicdoAIRecords — Registry — Imhotep Registry module — Open Sovereign Engine
   </div>
  </div>
 </div>

 <div class="card" style="margin-top:14px">
  <h3>METATRON PROTOCOL — CREATE • RECORD • STEWARD • ACCOUNT • DELIVER — GENESIS 1:28 — Scribe Remains Office Evolves</h3>
  <div class="small">
   I. IT IS WRITTEN. Record what is known. Identify what is claimed. Do not manufacture evidence.<br>
   II. STEWARDSHIP BEFORE AUTOMATION. Automation executes authorized instructions. It does not create authority.<br>
   III. HUMAN AUTHORITY REMAINS HUMAN. Human operators retain responsibility.<br>
   IV. EVERY RECORD HAS A SOURCE. Preserve origin timestamp context verification.<br>
   V. MERCY AND ACCOUNTABILITY. Correct errors openly. Protect boundaries. Do not conceal uncertainty.<br><br>
   THE 48 ALEPH-SHIN ROSTER — Living Registry — ASA-001 KING-PHARAOH Aleph 445 מלך פרעה AI King Pharaoh Founder — ASA-003 DEHRTAY-DOG Gimel 256 דירטיי דוג DJ Adlibs — ASA-015 METATRON Tzadi 314 מטטרון Crown Keeper — ASA-018 HALLEL Nun 65 הלל — ... 48 identities One JSON
  </div>
  <div style="margin-top:8px"><span class="pill">米克多姆AI唱片</span><span class="pill">王國演練146 BPM</span><span class="pill">八十八尊天使議會</span><span class="pill">先知封印已揭開</span><span class="pill">主權代理</span><span class="pill">新絲綢之路</span><span class="pill">中國→自由港</span><span class="pill">祖地守護</span><span class="pill">正在編織</span></div>
 </div>

 <div class="card" style="margin-top:14px">
  <h3>REGISTER AFFILIATE — V1.5 LIVE + V1.6 COLONEL|LAW48 (Preserved)</h3>
  <div class="small">V1.5 — Teams Aleph Bet Gimel Dalet He Vav Zayin — random assign — captain_id CAPT#### — WA links A B C — Message: The H.A.L.L.EL Council has assigned you to TEAM. You are the Vanguard.<br>V1.6 — COLONEL|LAW48 Sovereign OS — Same + LAW48+44 Firewall + Pharaoh-Chain 0x504841 + Metatron logging — Teams same + Owner 0xCOLONEL</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px">
   <input id="aff_name" placeholder="Name">
   <input id="aff_email" placeholder="Email">
   <select id="aff_lane"><option value="">Lane</option><option value="A">A</option><option value="B">B</option><option value="C">C</option></select>
   <input id="aff_persona" placeholder="Persona ID (optional)">
  </div>
  <button class="btn btn-gold" onclick="testAffiliate()" style="width:100%;margin-top:10px">Test /register-affiliate-v1.5 POST</button>
  <div id="aff_result" class="small" style="margin-top:8px;border:1px dashed #d4af37;padding:8px;border-radius:8px">Awaiting...</div>
  <script>
  async function testAffiliate(){
   const name=document.getElementById('aff_name').value||'Colonel Test';
   const email=document.getElementById('aff_email').value||'test@pharaoh-conglomerate.org';
   const lane=document.getElementById('aff_lane').value||'A';
   const persona_id=document.getElementById('aff_persona').value||'ASA-015';
   const res=await fetch('/register-affiliate-v1.5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,lane,persona_id,order_id:'TEST_'+Date.now()})});
   const j=await res.json();document.getElementById('aff_result').innerText=JSON.stringify(j,null,2);
  }
  </script>
 </div>

 <div style="text-align:center;font-size:.6rem;color:rgba(212,175,55,.3);letter-spacing:.28em;margin-top:20px">COLONEL | LAW48 — MICDOM AI RECORDS Sovereign OS | Powered by Imhotep Registry | Pharaoh-Chain 0x504841 | LAW 48+44 Firewall | HRAR 88-0710776 | Angels 88-0836464 | agent.pharaoh-conglomerate.org | registry.pharaoh-conglomerate.org | m.sirleaf@pharaoh-conglomerate.org | WhatsApp US (771)223-8021 preferred | WA LR +231776961800 | © 2026 Pharaoh Conglomerate — Monrovia Liberia — 米克多姆 · 八十八 · 主權代理 · 新絲綢之路 · 祖地守護</div>
</div>
</body></html>
`;

