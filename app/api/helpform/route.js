// Make sure your imports are correctly referenced
// Correct any typos or incorrect imports

import { NextResponse } from "next/server";
import { Help } from "@/app/model/models";
import connectToDB from "@/app/lib/utils";

export async function POST(req) {
  try {
    const { formData } = await req.json();
    await connectToDB();
    const newData = await Help.create(formData);
    return NextResponse.json({ newData });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
