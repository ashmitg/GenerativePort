"use server";
import { db } from "@/firebase";
import { UpdateAnalyticsData, CreateAnalytics } from "@/actions/analytics/action";
import { DeleteAnalytics } from "@/actions/analytics/action";
import firebase from "firebase/compat/app";


export async function SetPitchData(id: string, uid: string, data: any) {
  try {

    console.log(data?.title, "data")

    await db.collection("Pitch").doc(id).set( data, { merge: true })
    await UpdateAnalyticsData(id, uid, { title: data?.title })

    return true;
  } catch (error) {
    return false;
  }
}

export async function CreatePitch(uid: string, data: any) {
  try {
    const docRef = await db.collection("Pitch").doc();
    await docRef.set({ ...data, created: new Date().toISOString() });
    await CreateAnalytics(docRef.id, uid, { title: data?.title, created: new Date().toISOString() })
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
