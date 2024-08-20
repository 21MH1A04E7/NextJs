import { comments, Comment } from "../data";
import { redirect } from "next/navigation";

export async function GET(
  _request: Request,//not uses
  {
    params,
  }: {
    params: { id: string };
  }
): Promise<Response> {
  const id: string = params.id;
  if(parseInt(id)>comments.length){
    redirect('/comments')
  }
  const comment: Comment | undefined = comments.find(
    (items) => items.id === parseInt(id)
  );

  // if (!comment) {
  //   return new Response(
  //     JSON.stringify({ message: "this id is not available" }),
  //     {
  //       status: 404,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  // }
  return Response.json(comment);
}

export async function  PATCH(request:Request,{params}:{
  params:{id:string}
}):Promise<Response> {
  const body:Comment=await request.json();
  const index:number=comments.findIndex((items)=>items.id===parseInt(params.id))
  comments[index].text=body.text;
  return new Response(JSON.stringify(comments[index]),{
    status:200,
    headers:{
      "Content-Type":"application/json"
    }
  })
}
export async function  DELETE(request:Request,{params}:{
  params:{id:string}
}) :Promise<Response>{
  const index=comments.findIndex((items)=>items.id===parseInt(params.id));
  const deletedComment=comments.splice(index,1);
  return Response.json(deletedComment)
}