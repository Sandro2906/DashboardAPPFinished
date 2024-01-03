import connectToDB from "@/app/lib/utils";
import { Product } from "@/app/model/models";
import { NextResponse } from "next/server";


export async function PUT(req, res) {
    await connectToDB(); 
    const id = req.nextUrl.searchParams.get('id');
    const { single } = await req.json();
    await Product.updateOne({ _id: id }, {
      $set: single
    });
  
  }