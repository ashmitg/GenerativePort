import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { GetUser } from "@/actions/user/action";
import { UpdateAnalytics } from "@/actions/analytics/action";

export async function POST(req: NextRequest) {
  try {
    
    // Parse the JSON body from the request stream
    const body = await req.json();
    const { id } = body;

    const user = await GetUser();
    if (!user) {
      throw new Error("No user found");
    }
    UpdateAnalytics(id, user);

    return NextResponse.json({ res: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    // It's a good practice to return an error message and status code when catching errors
    return NextResponse.json({ error: error }, { status: 500 });
  }
}