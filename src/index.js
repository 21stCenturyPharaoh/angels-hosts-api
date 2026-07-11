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
        `https://newsapi.org/v2/top-headlines?country=${country}&q=${encodeURIComponent(query)}`,
        { headers: { 'X-Api-Key': env.NEWSAPI_KEYS } }
      );

      if (!newsRes.ok) {
        await notify(`⚠️ News fetch failed for query: ${query}`);
        return new Response('NewsAPI Fetch Fail', { status: 500, headers: corsHeaders });
      }

      const data = await newsRes.json();
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
          from: { email: "noreply@trial.mailersend.com" },
          to: [{ email: to }],
          subject,
          text
        })
      });

      if (res.ok) {
        await notify(`✅ Email sent to ${to}: "${subject}"`);
        return Response.json({ ok: true }, { headers: corsHeaders });
      } else {
        await notify(`❌ Email FAILED to ${to}: "${subject}"`);
        return new Response('Mailersend Fail', { status: 500, headers: corsHeaders });
      }
    }

    return new Response('Not Found', { status: 404, headers: corsHeaders });
  }
}const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://hermes-toth-agent.pages.dev',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    // Health check
    if (request.method === 'GET' && url.pathname === '/') {
      return new Response('Angels Hosts API Online', {
        status: 200,
        headers: corsHeaders
      });
    }

    // GET /news?q=topic&country=us
    if (request.method === 'GET' && url.pathname === '/news') {
      const query = url.searchParams.get('q') || 'top';
      const country = url.searchParams.get('country') || 'us';

      const newsRes = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&q=${encodeURIComponent(query)}`,
        {
          headers: { 'X-Api-Key': env.NEWSAPI_KEYS }
        }
      );

      if (!newsRes.ok) {
        return new Response('NewsAPI Fetch Fail', { status: 500, headers: corsHeaders });
      }

      const data = await newsRes.json();
      return Response.json(data, { headers: corsHeaders });
    }

    // POST / -> send email
    if (request.method === 'POST' && url.pathname === '/') {
      const { to, subject, text } = await request.json();

      const res = await fetch('https://api.mailersend.com/v1/email', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.MAILERSENDAPI_KEYS}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: { email: "noreply@trial.mailersend.com" },
          to: [{ email: to }],
          subject,
          text
        })
      });

      return res.ok
        ? Response.json({ ok: true }, { headers: corsHeaders })
        : new Response('Mailersend Fail', { status: 500, headers: corsHeaders });
    }

    return new Response('Not Found', { status: 404, headers: corsHeaders });
  }
}