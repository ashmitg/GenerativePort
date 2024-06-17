"use client";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useGlobalAuth } from "@/lib/context";
import { useContext, useState } from "react";
import useUpdateSettingsContext from "../UpdateSettingsData";
import { Textarea } from "@/components/ui/textarea";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  title: z.string().min(2).max(5000),
  description: z.string().min(2).max(5000),
  imageurl: z.string().max(500).optional(),
  link: z.string().max(500).optional(),
});

interface ISection {
  data: any;
  optInput: string;
  sectionname: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: string | null;
  CallBackUpdate: any;
}

type typeSetUpdateData = Dispatch<SetStateAction<boolean>>;

export function DialogForm({
  data,
  optInput,
  sectionname,
  setOpen,
  id,
  CallBackUpdate,
}: ISection) {
  const [loading, SetLoading] = useState(false);
  const { SetUpdateData }: { SetUpdateData: React.Dispatch<React.SetStateAction<boolean>> } = useUpdateSettingsContext()
    
  const authContext = useGlobalAuth();
  const uid = authContext?.uid;
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: data?.title || "",
      description: data?.description || "",
      imageurl: data?.imageurl || "",
      link: data?.link || "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    SetLoading(true);

    await CallBackUpdate("Settings", data, sectionname, uid, id);

    SetUpdateData(true);
    SetLoading(false);
    setOpen(false);
  }

  return (
    <DialogContent className="sm:max-w-prose overflow-y-scroll max-h-screen">
      <DialogHeader>
        <DialogTitle>Set {sectionname}</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when finished.
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>title</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} />
                </FormControl>
                <FormDescription>
                  This is your {sectionname} title publicly.
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
                <FormLabel>description</FormLabel>
                <FormControl>
                  <Textarea placeholder="description" {...field} />
                </FormControl>
                <FormDescription>
                  This is your {sectionname} description publicly.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageurl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Url</FormLabel>
                <FormControl>
                  <Input placeholder="ImageUrl" {...field} />
                </FormControl>
                <FormDescription>
                  ImageUrl to Display on Portfolio page
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{optInput}</FormLabel>
                <FormControl>
                  <Input placeholder="Input" {...field} />
                </FormControl>
                <FormDescription>
                  Publicly displayed on Portfolio page
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {loading ? (
            <Button disabled>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit">Submit</Button>
          )}
        </form>
      </Form>
    </DialogContent>
  );
}
