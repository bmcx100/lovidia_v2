import Survey from "../../(models)/Survey";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  console.log("POST RAN");
  try {
    const body = await req.json();
    console.log(body.data);
    // const surveyData = body.formData;
    // console.log(surveyData);
    await Survey.create(body.data);
    return NextResponse.json({ message: "Survey Submitted" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
