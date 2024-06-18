"use client"

import { Hero } from "@/components/aceternity/Hero";
import { NavbarDemo } from "../aceternity/navbar-menu";
import { CanvasRevealEffectDemo } from "../aceternity/canvas-reveal-effect";
import { ProjectCarousel } from "../aceternity/ProjectCarousel";
import { CardHoverEffectDemo } from "../aceternity/CardHover";
import { TextGenerateSwap } from "../aceternity/TextGenerateSwap";
import { TextGenerate } from "../aceternity/TextGenerate";
import { useEffect, useState } from "react";
import { GetPitchById } from "@/actions/dashboard/getpitches/action";
import Loading from "./loading";
import { Experience } from "../experience";



export function HomePage({ id }: { id: string | null }) {
  const [loading, setLoading] = useState(true);
  const [settingsData, setSettingsData] = useState<any>(null);
  const [profileData, setProfileData] = useState<any>(null);
  const [paragraphs, setParagraphs] = useState<any>(null);

  useEffect(() => {
    const getSetData = async () => {
      try {
        const response = await fetch('/api/getuserdata', { next: { revalidate: 260000  } }); // 3 days

        const data = await response.json();
        if (response.status === 200 && data?.settingdata && data?.profiledata) {
          const { settingdata, profiledata } = data;
          setSettingsData(settingdata);
          setProfileData(profiledata);
        }

        if (id && id.length > 0) {
          const paragraphsdata = await GetPitchById(id);
          fetch(`/api/setupdateanalytics/${id}`, { cache: 'no-store' });

          setParagraphs(paragraphsdata);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getSetData();
  }, [id]);

  return (
    <main className=" overflow-hidden">
      {loading ? (
        <Loading />
      ) : (
        <>
          {profileData && <NavbarDemo className="top-0 fixed" data={profileData} />}
          <div className="w-full bg-black flex-col md:flex-row pb-20 justify-center items-center">
            <Hero />

            <div className="">
              {id && paragraphs && (
                <h1 className="text-neutral-400 text-5xl text-center font-bold">
                  {paragraphs?.title}
                </h1>
              )}

              {id && paragraphs && <TextGenerateSwap text={paragraphs?.intro} />}

              {settingsData && settingsData["Projects"] && (
                <ProjectCarousel data={settingsData["Projects"]} />
              )}

              {settingsData && settingsData["Values"] && (
                <CanvasRevealEffectDemo data={settingsData["Values"]} />
              )}
            </div>

            {id && paragraphs && (
              <TextGenerate
                title={"Alignment with requirements"}
                text={paragraphs?.body}
              />
            )}

            {settingsData && settingsData["Skills"] && (
              <CardHoverEffectDemo data={settingsData["Skills"]} />
            )}

            {id && paragraphs && (
              <TextGenerate
                title={"My closing statement (powered by gpt)"}
                text={paragraphs?.conclusion}
              />
            )}

            {settingsData && settingsData["Experiences"] && (
              <Experience data={settingsData["Experiences"]} />
            )}
          </div>

          {profileData && <NavbarDemo data={profileData} className="bottom-0" />}
        </>
      )}
    </main>
  );
}
