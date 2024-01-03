import connectToDB from "@/app/lib/utils";
import { User } from "@/app/model/models";
import { NextResponse } from "next/server";

export async function GET(req) {
    const id = req.nextUrl.searchParams.get('id');
    await connectToDB();
    try {
        const user = await User.findById(id);
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


