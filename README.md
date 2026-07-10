# Angelic Hosts API | SOR-03

**Codename:** `Nefetari β`  
**Mission:** Cloudflare Worker API for Mailersend Email Relay. 3,000/month Free Tier.

### **Deploy**
1. `wrangler login`
2. `wrangler secret put MAILERSENDAPI_KEYS` 
3. `wrangler deploy`

### **Endpoint**
`POST /api/belsidus/send`  
`{ "to": "email", "subject": "title", "html": "<body>" }`

**House:** Angelic Hosts | **Ops:** SOR-03