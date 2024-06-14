"use client";
import { useEffect, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";

import { PitchSection } from "./components/pitchsection";
import UpdatePitchData from "./Updatedata";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useGlobalAuth } from "@/lib/context";
import { GeneratePitch } from "@/actions/dashboard/generatepitch/action";
import { Loader2 } from "lucide-react";
import { DashboardSkeleton } from "@/components/dashboard/main/dashboard-skeleton";
import { GetPitches } from "@/actions/dashboard/getpitches/action";

interface Item {
  id: string;
  created: string;
  title: string;
  description: string;
  link: string;
  intro: string;
  body: string;
  conclusion: string;
}

export function Dashboard() {
  const [data, setData] = useState<Item[]>([]);
  const [dataloading, setDataLoading] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [updatedata, SetUpdateData] = useState<boolean>(false);



  useEffect(() => {
    const getData = async () => {
      let res = await GetPitches();

      if (res) {
        const sortedData = (res as Item[]).sort((a, b) => {
          return new Date(b.created).getTime() - new Date(a.created).getTime();
        });
        setData(sortedData);
      } else {
        setData([]);
      }
      setLoading(false);
      SetUpdateData(false);
      setDataLoading(false);

      return res;
    };

    getData();
  }, [updatedata]);

  const authContext = useGlobalAuth();
  const uid = authContext ? authContext.uid : null;
  const formSchema = z.object({
    title: z.string().min(2).max(250),
    link: z.string().url(),
    description: z.string().min(2).max(2000),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      link: "",
      description: "",
    },
  });
  const Servertrigger = async (values: z.infer<typeof formSchema>) => {
    if (uid) {
      setDataLoading(true);
      await GeneratePitch(uid, values);
      SetUpdateData(true);
    }
  };
  function onSubmit(values: z.infer<typeof formSchema>) {
    Servertrigger(values);
  }

  if (loading) {
    return <DashboardSkeleton />;
  }
  return (
    <UpdatePitchData.Provider value={{ SetUpdateData }}>
      {loading ? (
        <DashboardSkeleton />
      ) : (
        <div className="grid min-h-screen w-full">
          <div className="flex flex-col">
            <main className="flex-1 overflow-auto px-6 py-8">
              <div className="grid gap-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <div>
                      <h1 className="text-2xl font-bold">Generate New Link</h1>
                      

                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Pitch to Ycombinator - BioAI"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>This is the title</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="link"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Link</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="https://ycombinator.com/"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              link of the website your pitching too
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Pitch to Ycombinator for an internship position at a biotech company specializing in curing cancer"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Description of the position your pitching for
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    {dataloading ? (
                      <Button disabled className="w-full ">
                        <Loader2 className="mr-2 h-4 w-full animate-spin" />
                      </Button>
                    ) : (
                      <Button type="submit" className="w-full">
                        Generate Pitch
                      </Button>
                    )}
                  </form>
                </Form>
                <div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">All Links</h1>
                  </div>
                  <p className="text-gray-500 ">
                    View and manage all your generated links.
                  </p>
                  <div className="mt-6 grid gap-4">
                    {data.map((items: Item) => (
                      <div key={items.id}>
                        <PitchSection
                          uid={uid}
                          id={items.id}
                          title={items.title}
                          description={items.description}
                          link={items.link}
                          intro={items.intro}
                          body={items.body}
                          conclusion={items.conclusion}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      )}
    </UpdatePitchData.Provider>
  );
}
