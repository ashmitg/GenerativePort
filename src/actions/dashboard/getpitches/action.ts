"use server"
import { db } from "@/firebase";
import { redirect } from 'next/navigation'

export async function GetPitches() {
    try {

        let data = await db.collection('Pitch').get();
        return data.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    } catch (error) {
        console.error("Error fetching pitches", error);
        return [];
    }
}

export async function GetPitchById(id: string) {
    try {
        let data = await db.collection('Pitch').doc(id).get();
        return data.data();
    } catch (error) {
        console.error("Error fetching pitches", error);
        return [];
    }
}