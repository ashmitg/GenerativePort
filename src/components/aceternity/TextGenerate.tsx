import { TextGenerateEffectDemo } from "./TextGeneration"


export function TextGenerate({text, title}: {text: string, title: string}){

    return  (
        <div className="mx-6 md:mx-36 my-36">
        <h1 className="text-neutral-400 text-5xl font-bold">{title}</h1>

        <TextGenerateEffectDemo text={text} />
      </div>
    )
}