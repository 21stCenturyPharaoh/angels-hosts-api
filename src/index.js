if (request.method === 'GET' && url.pathname === '/news') {
  const query = url.searchParams.get('q') || 'top';
  const country = url.searchParams.get('country') || 'us';

  const newsRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&q=${encodeURIComponent(query)}`,
    { headers: { 'X-Api-Key': env.NEWSAPI_KEYS } }
  );

  const data = await newsRes.json();

  if (!newsRes.ok) {
    await notify(`⚠️ News fetch failed: ${data.message || 'unknown error'}`);
    return Response.json({ error: data }, { status: 500, headers: corsHeaders });
  }

  await notify(`📰 News fetched: "${query}" (${country})`);
  return Response.json(data, { headers: corsHeaders });
}