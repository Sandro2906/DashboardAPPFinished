import connectToDB from "@/app/lib/utils";
import { Product } from "@/app/model/models";
import { NextResponse } from "next/server";

export async function GET(req) {
    const id = req.nextUrl.searchParams.get('id');
    await connectToDB();
    try {
        const product = await Product.findById(id);
        if (!product) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        return NextResponse.json({ product });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
