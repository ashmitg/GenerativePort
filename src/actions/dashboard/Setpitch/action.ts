"use server";
import { db } from "@/firebase";
import {UpdateAnalytics} from "@/actions/analytics/action";
import {DeleteAnalytics} from "@/actions/analytics/action";

export async function SetPitchData(id: string | null, uid: string, data: any) {
  try {
    if (id) {
      await db.collection("Pitch").doc(id).set(data, { merge: true })
    } else {
      const docRef = await db.collection("Pitch").doc();
      await docRef.set(data);
      UpdateAnalytics(docRef.id, uid, {title: data?.title})
    }
    return true;
  } catch (error) {
    return false;
  }
}

export async function DeletePitch(id: string, uid: string) {
  try {
    await db.collection("Pitch").doc(id).delete();

    DeleteAnalytics(id, uid);
    return true;
  } catch (error) {
    return false;
  }
}
