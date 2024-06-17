"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

import { SetSettingData } from "@/actions/settings/setsettings/action";
import { GetProfileData } from "@/actions/settings/getsettings/action";

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

const formSchema = z.object({
  name: z.string().min(2).max(250),
  email: z.string().email(),
  bio: z.string().max(250),
  resume: z.string().optional(),
  cv: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  twitter: z.string().optional(),
});

export function Profile() {
  const { uid } = useGlobalAuth();
  const [data, setData] = useState<any>({});
  const [loading, Setloading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      bio: "",
      resume: "",
      cv: "",
      linkedin: "",
      github: "",
      twitter: "",
    },
  });

  useEffect(() => {
    const getData = async () => {
      let res = await GetProfileData(uid);
      form.reset({
        name: res?.name || "",
        email: res?.email || "",
        bio: res?.bio || "",
        resume: res?.resume || "",
        cv: res?.cv || "",
        linkedin: res?.linkedin || "",
        github: res?.github || "",
        twitter: res?.twitter || "",
      });
      setData(res);

    };
    getData();
  }, [form, uid]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    Setloading(true);
      let res = await SetSettingData(
        "Settings",
        values,
        "Profile",
        uid,
        "default"
      );
      Setloading(false);
  }

  const handleButtonClick = () => {
    const baseUrl = window.location.origin; // Get the base URL dynamically
    window.open(baseUrl, "_blank"); // Open the base URL in a new tab
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm  ">
            <h2 className="text-lg font-medium text-gray-900 ">Profile</h2>
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public bio.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 ">Socials</h3>
                <div className="mt-2 space-y-2">
                  <div className="">
                    <FormField
                      control={form.control}
                      name="resume"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Resume</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://drive.google.com/"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="">
                    <FormField
                      control={form.control}
                      name="cv"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CV</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://drive.google.com/"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="">
                    <FormField
                      control={form.control}
                      name="linkedin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Linkedin</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://linkedin.com/in/username"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="">
                    <FormField
                      control={form.control}
                      name="github"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Github</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://github.com/ashmitg"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="  ">
                    <FormField
                      control={form.control}
                      name="twitter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Twitter X</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://x.com/user"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            {!loading ? (
              <Button className="w-full mr-2">Save Changes</Button>
            ) : (
              <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            )}
            <Button
              onClick={handleButtonClick}
              className="w-full"
              variant="outline"
            >
              See Public Profile
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
