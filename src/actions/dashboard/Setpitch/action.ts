"use server";
import { db } from "@/firebase";

export async function SetPitchData(id: string | null, data: any) {
  try {
    if (id) {
      await db.collection("Pitch").doc(id).set(data, { merge: true });
    } else {
      await db.collection("Pitch").doc().set(data);
    }
    return true;
  } catch (error) {
    return false;
  }
}

export async function DeletePitch(id: string) {
  try {
    await db.collection("Pitch").doc(id).delete();
    return true;
  } catch (error) {
    return false;
  }
}
