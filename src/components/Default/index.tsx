import { Hero } from "@/components/aceternity/Hero";
import { NavbarDemo } from "../aceternity/navbar-menu";
import { CanvasRevealEffectDemo } from "../aceternity/canvas-reveal-effect";
import { ProjectCarousel } from "../aceternity/ProjectCarousel";
import { CardHoverEffectDemo } from "../aceternity/CardHover";
import { TextGenerateSwap } from "../aceternity/TextGenerateSwap";
import { TextGenerate } from "../aceternity/TextGenerate";
import { useEffect, useState } from "react";
import { GetSettingsData } from "@/actions/settings/getsettings/action";
import { GetUser } from "@/actions/user/action";
import { GetPitches } from "@/actions/dashboard/getpitches/action";
import { GetProfileData } from "@/actions/settings/getsettings/action";
import Loading from "./loading";
import { Experience } from "../experience";

export function HomePage({ id }: { id: string | null }) {
  const [loading, setLoading] = useState(true);
  const [settingsData, setSettingsData] = useState<any>(null);
  const [profileData, setProfileData] = useState<any>(null);
  const [paragraphs, setParagraphs] = useState<any>(null);

  useEffect(() => {
    const getSetData = async () => {
      let user = await GetUser();

      if (id) {
        const [settingdata, profiledata, paragraphsdata] = await Promise.all([
          GetSettingsData(user),
          GetProfileData(user),
          GetPitches(id),
        ]);
        setSettingsData(settingdata);
        setProfileData(profiledata);
        setParagraphs(paragraphsdata);
      } else {
        const [settingdata, profiledata] = await Promise.all([
          GetSettingsData(user),
          GetProfileData(user),
        ]);
        setSettingsData(settingdata);
        setProfileData(profiledata);
      }
      setLoading(false);
    };
    getSetData();
  }, [id]);

  return (
    <main className=" overflow-hidden">
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavbarDemo className="top-0 fixed" data={profileData} />
          <div className="w-full bg-black flex-col md:flex-row pb-20 justify-center items-center">
            <Hero />
            {id && paragraphs && (
              <h1 className="text-neutral-400 text-5xl text-center font-bold">
                {paragraphs?.title}
              </h1>
            )}

            {id && paragraphs && <TextGenerateSwap text={paragraphs?.intro} />}

            <ProjectCarousel data={settingsData["Projects"]} />
            <CanvasRevealEffectDemo data={settingsData["Values"]} />
            {id && paragraphs && (
              <TextGenerate
                title={"Alignment with requirements"}
                text={paragraphs?.body}
              />
            )}

            <CardHoverEffectDemo data={settingsData["Skills"]} />
            {id && paragraphs && (
              <TextGenerate
                title={"My closing statement (powered by gpt)"}
                text={paragraphs?.conclusion}
              />
            )}
            <Experience data={settingsData["Experiences"]} />
          </div>

          <NavbarDemo data={profileData} className="bottom-0" />
        </>
      )}
    </main>
  );
}
