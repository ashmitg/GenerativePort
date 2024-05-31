"use server";
import { db } from "@/firebase";

export async function CreateUser(uid: string) {
  try {
    await db.collection("User").doc("default").set({ uid: uid });
    return true;
  } catch (error) {
    return false;
  }
}

export async function GetUser() {
  try {
    const userDoc = await db.collection("User").doc("default").get();
    if (!userDoc.exists) {
      console.log("No such user!");
      return null;
    } else {
      return userDoc.data()?.uid;
    }
  } catch (error) {
    console.log("Error getting user:", error);
    return null;
  }
}
