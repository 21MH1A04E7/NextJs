import { comments, Comment } from "./data";
export async function GET(): Promise<Response> {
  return new Response(JSON.stringify(comments), {
    headers: { "Content-type": "application/json" },
  });
}
// export async function GET():Promise<Response>{
//     return Response.json(comments)
// }

//post request
export async function POST(request: Request): Promise<Response> {
  const commentData = await request.json();
  const newComment: Comment = {
    id: comments.length + 1,
    text: commentData.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-type": "application/json" },
    status: 201,
  });
}
