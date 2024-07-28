
"use server"
import OpenAI from "openai"
import { GetProfileData } from '../../settings/getsettings/action'
import { db } from '@/firebase'
import {CreatePitch } from '../Setpitch/action'


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})


export async function GeneratePitch(uid: string, pitchdata: any) {

  
  let profileData = await GetProfileData(uid);

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: `provide the response in JSON format returning Introduction, Body and Conclusion like {Introduction: "", Body: "", Conclusion: ""} and written in first person`
      },
      {
        role: "user",
        content: `My name is ${profileData?.name} and my background is:  ${profileData?.bio} and I am generating a pitch for the role ${pitchdata?.title}. The description for the role is ${pitchdata?.description}, your job is too generate a Introduction, Body and Conclusion for the pitch vouching for me explaining why I am the perfect for the role written in first person`
      }
    ],
    temperature: 0.8,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  const messageContent = response.choices[0].message.content;
  if (messageContent !== null) {
    let pitchdataobject = JSON.parse(messageContent);
    await CreatePitch( uid, { ...pitchdata, intro: pitchdataobject?.Introduction, body: pitchdataobject?.Body, conclusion: pitchdataobject?.Conclusion });
  }
  console.log(messageContent, "messageContent")
  return messageContent;
}