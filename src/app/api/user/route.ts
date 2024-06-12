import { NextApiRequest } from 'next';

export function GET(req: NextApiRequest) {
  const url = new URL(req.url!);
  const id = url.searchParams.get('id');

  if (id) {
    console.log('Returning a single user');
    return Response.json([
      {
        name: (Math.random() + 1).toString(36).substring(7),
        age: Math.floor(Math.random() * 10)
      }
    ])
  }

  console.log('Returning a list of users');
  return Response.json( [
    {
      name: 'ChatGPT',
      age: 4
    },
    {
      name: 'Midjourney',
      age: 3
    },
    {
      name: 'Sora',
      age: 1
    }
  ])
}