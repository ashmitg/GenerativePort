"use server"
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { GetUser } from "@/actions/user/action";
import { UpdateAnalytics } from "@/actions/analytics/action";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    
    const {id} = params;
    console.log("id received in the backend", id)
    const user = await GetUser();
    if (!user) {
      throw new Error("No user found");
    }
    await UpdateAnalytics(id, user);

    return NextResponse.json({ res: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 }); // It's better to return error.message for clearer client-side errors
  }
}