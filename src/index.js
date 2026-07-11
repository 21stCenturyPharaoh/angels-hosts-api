export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Angels Hosts API Online', {status: 200});
    }
    const {to, subject, text} = await request.json();
    const res = await fetch('https://api.mailersend.com/v1/email', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.MAILERSENDAPI_KEYS}`, 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from:{email:"noreply@trial.mailersend.com"}, 
        to:[{email:to}], 
        subject, 
        text
      })
    });
    return res.ok ? Response.json({ok:true}) : new Response('Mailersend Fail', {status:500});
  }
}