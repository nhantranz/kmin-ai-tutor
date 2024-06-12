
export function GET() {
  return Response.json({}, {status: 410, statusText: 'This should fail'});
}