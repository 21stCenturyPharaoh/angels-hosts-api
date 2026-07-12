const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://hermes-toth-agent.pages.dev',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

const NOTIFY_TOPIC = 'https://ntfy.sh/angels-hosts-alerts-x7k9p2';

async function notify(message) {
  try {
    await fetch(NOTIFY_TOPIC, { method: 'POST', body: message });
  } catch (e) {
    // notification failure shouldn't break the main request
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method === 'GET' && url.pathname === '/') {
      return new Response('Angels Hosts API Online', { status: 200, headers: corsHeaders });
    }

    if (request.method === 'GET' && url.pathname === '/news') {
      const query = url.searchParams.get('q') || 'top';
      const country = url.searchParams.get('country') || 'us';

      const newsRes = await fetch(
        `https://gnews.io/api/v4/top-headlines?country=${country}&q=${encodeURIComponent(query)}&apikey=${env.GNEWS_API_KEYS}`
      );

      const data = await newsRes.json();

      if (!newsRes.ok) {
        await notify(`⚠️ News fetch failed: ${data.errors?.[0] || 'unknown error'}`);
        return Response.json({ error: data }, { status: 500, headers: corsHeaders });
      }

      await notify(`📰 News fetched: "${query}" (${country})`);
      return Response.json(data, { headers: corsHeaders });
    }

    if (request.method === 'POST' && url.pathname === '/') {
      const { to, subject, text } = await request.json();

      const res = await fetch('https://api.mailersend.com/v1/email', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.MAILERSENDAPI_KEYS}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: { email: "noreply@test-86org8ej27zgew13.mlsender.net" },
          to: [{ email: to }],
          subject,
          text
        })
      });

      const resultText = await res.text();

      if (res.ok) {
        await notify(`✅ Email sent to ${to}: "${subject}"`);
        return Response.json({ ok: true }, { headers: corsHeaders });
      } else {
        await notify(`❌ Email FAILED to ${to}: "${subject}"`);
        return Response.json({ error: resultText }, { status: 500, headers: corsHeaders });
      }
    }

    return new Response('Not Found', { status: 404, headers: corsHeaders });
  }
}