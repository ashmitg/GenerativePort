"use server";
import { db } from "@/firebase";



export async function SetSettingData(collection: string, data: any, sectionname: string, uid: string, id: string | null) {
  try {
    if (id) {
      await db.collection(collection).doc(uid).collection(sectionname).doc(id).set(data, { merge: true });
    } else {
      await db.collection(collection).doc(uid).collection(sectionname).doc().set(data);
    }
    return true;
  } catch (error) {
    console.error("Error writing document: ", error);
    return false;
  }
}
