"use server"
import { db } from "@/firebase";
import firebase from "firebase/compat/app";

export async function UpdateAnalytics(id: string, uid: string, data: any) {
  try {
    const docRef = db.collection("Analytics").doc(uid).collection("PageViews").doc(id);

    const doc = await docRef.get();

    if (!doc.exists) {
      await docRef.set({ views: 0, ...data }, { merge: true });

    } else {

      const increment = firebase.firestore.FieldValue.increment(1);
      await docRef.set({
        views: increment,
      }, { merge: true });
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function GetAnalytics(uid: string) {
  try {

    let data = await db.collection("Analytics").doc(uid).collection("PageViews").get();

    return data.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function DeleteAnalytics(id: string, uid: string) {
  try {
    console.log(id, "deleting")
    await db.collection("Analytics").doc(uid).collection("PageViews").doc(id).delete();
    return true;
  } catch (error) {
    return false;
  }
}

async function MegeData(uid: string) {
  let pitchdata = await db.collection("Pitch").get();

  let data = pitchdata.docs.map(doc => ({ id: doc.id, uid: uid, title: doc.data().title }));
  data.forEach(async (element) => {
    await UpdateAnalytics(element.id, element.uid, { title: element.title })
  });
  console.log("updated")
}