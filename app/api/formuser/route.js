import connectToDB from "@/app/lib/utils";
import { User } from "@/app/model/models";
import { NextResponse } from "next/server";

export async function POST(req) {
      try {
        const { formData } = await req.json();
        await connectToDB();
        
        const newUser = await User.create(formData);
        console.log('New user created:', newUser); 
    
        return NextResponse.json({ user: newUser });
      } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.error("Error creating user", 500);
      }
    }
    

export async function GET(req) {
      await connectToDB();
      const userss = await User.find()
      return NextResponse.json({userss})
  }

  export async function DELETE(req){
  
      const id = req.nextUrl.searchParams.get('id');
      await connectToDB();
      await User.findByIdAndDelete(id);
      return NextResponse.json({status: 200});
    }


