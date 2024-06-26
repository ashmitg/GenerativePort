"use client"
import { Button } from "@/components/ui/button"
import {useState} from 'react'
import { DialogForm } from './DialogForm'
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    SetSettingData
  } from "@/actions/settings/setsettings/action";


export function AddDialog({sectionname, optInput}: {sectionname: string, optInput: string}) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">Add {sectionname}</Button>
            </DialogTrigger>
            <DialogForm data={null} sectionname={sectionname} optInput={optInput} setOpen={setOpen} id={null} CallBackUpdate={SetSettingData}/>

        </Dialog>
    )
}
