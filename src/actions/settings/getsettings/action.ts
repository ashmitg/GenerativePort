"use server";

import { db } from "@/firebase";

export async function GetSettingsData(uid: string) {
  try {
    let collections = [
      "College",
      "Awards",
      "Skills",
      "Experiences",
      "Projects",
      "Values",
    ];
    let promises = collections.map((collection) =>
      db.collection("Settings").doc(uid).collection(collection).get()
    );
    let results = await Promise.all(promises);
    let data = results.reduce((dict: {[key: string]: any}, result, index) => {
      dict[collections[index]] = result.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return dict;
    }, {});
    return data;
  } catch (error) {
    return {};
  }
}

export async function GetProfileData(uid: string) {
  try {
    let data = await db
      .collection("Settings")
      .doc(uid)
      .collection("Profile")
      .doc("default")
      .get();
    return data.data();
  } catch (error) {
    return null;
  }
}
