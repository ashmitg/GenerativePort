"use client";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from 'react';
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea"
import useUpdateDashboardContext from "../UpdateDashboardData";
import { SetPitchData } from "@/actions/dashboard/Setpitch/action";


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
    title: z.string().min(2).max(50000),
    description: z.string().min(2).max(50000),
    link: z.string().max(250),
    intro: z.string().max(5000),
    body: z.string().max(50000),
    conclusion: z.string().max(50000),
});

interface ISection {
    data: any;
    uid: string;
    setOpen: Dispatch<SetStateAction<boolean>>;
    id: string;
}


export function PitchForm({ data, uid, setOpen, id }: ISection) {
    console.log("pitch form render")
    const [loading, SetLoading] = useState(false);
    const { SetUpdateData }: { SetUpdateData: React.Dispatch<React.SetStateAction<boolean>> } = useUpdateDashboardContext()


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: data?.title || "",
            description: data?.description || "",
            link: data?.link || "",
            intro: data?.intro || "",
            body: data?.body || "",
            conclusion: data?.conclusion || "",
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        SetLoading(true);
        await SetPitchData(id, uid, data);

        SetUpdateData(true);
        SetLoading(false);
        setOpen(false);
    }

    return (
        <DialogContent className="sm:max-w-[850px] overflow-y-scroll max-h-screen">
            <DialogHeader>
                <DialogTitle>Set Pitch</DialogTitle>
                <DialogDescription>
                    Make changes to the pitch
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
                                    This is your  title publicly.
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
                                    This is your description publicly.
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
                                <FormLabel>link</FormLabel>
                                <FormControl>
                                    <Input placeholder="link" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your link to company
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="intro"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Intro</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="intro" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your Intro
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Body</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="body" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your body
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="conclusion"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Conclusion</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="conclusion" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your Conclusion
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
