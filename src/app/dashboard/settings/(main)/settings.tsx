"use client";
import { Profile } from "./_components/Profile";
import { AddDialog } from "./_components/AddDialog";
import { useEffect, useState } from "react";
import { Section } from "./_components/Section";
import { GetSettingsData } from "@/actions/settings/getsettings/action";
import { useGlobalAuth } from "@/lib/context/context";
import { UpdateSettingsContext } from "@/lib/context/UpdateSettingsData";
import { SettingsSkeleton } from "./settings-skeleton";
import { Button } from "@/components/ui/button";
import {Separator} from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export function Settings() {
  const { uid } = useGlobalAuth();

  const [data, setData] = useState<any>({});
  const [updatedata, SetUpdateData] = useState<boolean>(false);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      let data = await GetSettingsData(uid);

      setData(data);
      SetLoading(false);
    };
    SetUpdateData(false);
    getData();
  }, [updatedata, uid]);


  return (
    <UpdateSettingsContext.Provider value={{ updatedata, SetUpdateData }}>
      {loading ? (
        <SettingsSkeleton />
      ) : (
        <div className="flex flex-col min-h-screen px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-5">
            
            <div className="space-y-6">
              <div>
                <Section
                  data={data["College"]}
                  sectionname={"College"}
                  optInput="Link to College"
                />
                <AddDialog sectionname={"College"} optInput="Link to College" />
              </div>
              <div>
                <Section
                  data={data["Awards"]}
                  sectionname={"Awards"}
                  optInput="Link to Award"
                />
                <AddDialog sectionname={"Awards"} optInput="Link to Award" />
              </div>
              <div>
                <Section
                  data={data["Values"]}
                  sectionname={"Values"}
                  optInput="Order"
                />
                <div className="py-5">
                  {data.Values?.length < 3 ? (
                    <AddDialog sectionname={"Values"} optInput="Order" />
                  ) : (
                    <Button disabled>Can&apos;t add past 3</Button>
                  )}
                </div>
              </div>
              <Section data={data["Skills"]} sectionname={"Skills"} optInput="Icon Display Name" />
              <AddDialog sectionname={"Skills"} optInput="Icon Display Name" />
            </div>
            <div className="space-y-6 mx-auto">
              <Section
                data={data["Experiences"]}
                sectionname={"Experiences"}
                optInput="Company Link"
              />
              <AddDialog sectionname={"Experiences"} optInput="Company Link" />
              <div>
                <Section
                  data={data["Projects"]}
                  sectionname={"Projects"}
                  optInput="Source Code Link"
                />
                <AddDialog sectionname={"Projects"} optInput="Source Code Link" />
              </div>
            </div>
            <Profile />
          </div>
        </div>
      )}
    </UpdateSettingsContext.Provider>
  );
}
