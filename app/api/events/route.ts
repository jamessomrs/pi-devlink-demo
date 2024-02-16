export async function GET(request: Request) {
  const res = await fetch(
    "https://xp8u-bvie-kght.n7.xano.io/api:WGRo_HAC/seminartermins",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return Response.json({ data });
}
