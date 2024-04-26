import RecipeSubmission from "../../(models)/RecipeSubmissions";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  console.log("POST RAN");
  try {
    const body = await req.json();
    console.log(body.data);
    await RecipeSubmission.create(body.data);
    return NextResponse.json({ message: "Recipe Submitted" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Recipe Submission Error", error }, { status: 500 });
  }
}
