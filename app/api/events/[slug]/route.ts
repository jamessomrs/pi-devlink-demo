export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const res = await fetch(
    `https://xp8u-bvie-kght.n7.xano.io/api:WGRo_HAC/seminartermins/${slug}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return Response.json({ data });
}
