export async function GET(request: Request) {
  const resp = await fetch(request.url.replace("/assets", ""));
  const blob = await resp.blob();
  return new Response(blob, {
    headers: {
      "content-type": "image/webp",
      "cache-control":
        "max-age=604800, s-maxage=604800, stale-while-revalidate=86400",
    },
    status: resp.status,
  });
}
