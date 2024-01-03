import connectToDB from "@/app/lib/utils";
import { Product } from "@/app/model/models";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
      const { formData } = await req.json();
      await connectToDB();
      
      const newProduct = await Product.create(formData);
      console.log('New user created:', newProduct); 
  
      return NextResponse.json({ product: newProduct });
    } catch (error) {
      console.error('Error creating user:', error);
      return NextResponse.error("Error creating user", 500);
    }
  }
  
  export async function GET(req) {
    await connectToDB();
    const productss = await Product.find()
    return NextResponse.json({productss})
}

export async function DELETE(req){
  
  const id = req.nextUrl.searchParams.get('id');
  await connectToDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({status: 200});
}

