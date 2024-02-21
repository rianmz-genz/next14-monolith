export async function GET(request) {
  const product = { p: '12asas' };

  return new Response(JSON.stringify(product), {
    status: 200,
  });
}
