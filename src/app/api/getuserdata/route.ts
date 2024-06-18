"use server";

import { GetSettingsData } from "@/actions/settings/getsettings/action";
import { GetProfileData } from "@/actions/settings/getsettings/action";
import { GetUser } from "@/actions/user/action";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {

    let user = await GetUser();
    if (!user) {
      throw new Error("No user found");
    }
      const [settingdata, profiledata] = await Promise.all([
        GetSettingsData(user),
        GetProfileData(user),
      ]);

      return NextResponse.json({ settingdata, profiledata }, { status: 200 });
    
  } catch (error) {
    console.log(error)
  }

}