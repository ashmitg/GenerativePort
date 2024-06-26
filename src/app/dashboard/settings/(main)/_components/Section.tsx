"use client"
import { SectionModals } from "./SectionModals"
interface ISection {
  data: any,
  optInput: string,
  sectionname: string
}
interface SectionData {
  id: string;
  title: string;
  description: string;
  link: string;
  imageurl: string;
}

export function Section({ data, sectionname, optInput }: ISection) {

  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-900">{sectionname}</h2>
      <div className="mt-2 space-y-4">
        {data && data.map((section: SectionData) => (
          <div key={section.id}>
            <SectionModals id={section.id} title={section.title} description={section.description} link={section.link} sectionname={sectionname} optInput={optInput} imageurl={section.imageurl} />
          </div>
        ))}
      </div>
    </div>
  );
}

