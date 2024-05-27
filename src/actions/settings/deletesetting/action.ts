"use server";
import { db } from "@/firebase";

export async function DeleteSettingsDoc(
  uid: string,
  sectionname: string,
  id: string
) {
  try {
    await db
      .collection("Settings")
      .doc(uid)
      .collection(sectionname)
      .doc(id)
      .delete();
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
}
