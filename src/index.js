export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    if (pathname === '/api/belsidus/send' && request.method === 'POST') {
      const { to, subject, html } = await request.json();
      const res = await fetch('https://api.mailersend.com/v1/email', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.MAILERSENDAPI_KEYS}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: { email: 'noreply@test-86org8ej27zgew13.mlsender.net', name: 'Nefetari β | Hermes-Toth Agent' },
          to: [{ email: to }],
          subject: subject,
          html: html
        })
      });
      return new Response(JSON.stringify({ status: res.ok ? 'EMAIL SENT' : 'FAILED', tier: '3,000/month Free' }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response('Hermes-Toth API Online', { status: 200 });
  }
}