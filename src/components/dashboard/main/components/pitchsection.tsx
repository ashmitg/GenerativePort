import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FC, useContext, useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { PitchForm } from './pitchform'
import { UpdatePitchData } from "@/actions/dashboard/Setpitch/action";
import { DeletePitch } from "@/actions/dashboard/Setpitch/action"
import UpdatePitchData from '../Updatedata'
import Link from 'next/link'

interface PitchSectionProps {
    uid: string | null;
    title: string;
    description: string;
    link: string;
    id: string;
    intro: string;
    body: string;
    conclusion: string;
}

export const PitchSection: FC<PitchSectionProps> = ({ uid, title, description, link, id, intro, body, conclusion }) => {
    const { SetUpdateData } = useContext(UpdatePitchData);
    const [open, setOpen] = useState(false);

    const clickDeletePitch = async () => {
        if (uid) {
            await DeletePitch(id, uid);
            SetUpdateData(true);
        }
    }
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-500 ">
                            {link}
                        </p>
                        <Link href={`/${id}`} scroll={false} target="_blank" rel="noopener noreferrer">
                            <h3>{`${window.location.origin}/${id}`}</h3>                        </Link>
                    </div>
                    <div className="flex gap-2">
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <Button size="icon" variant="ghost">
                                    <DeleteIcon className="h-4 w-4" />
                                    <span className="sr-only">Edit link</span>
                                </Button>
                            </DialogTrigger>
                            <PitchForm
                                data={{ title: title, description: description, link: link, body: body, intro: intro, conclusion: conclusion }}
                                uid={uid}
                                setOpen={setOpen}
                                id={id}
                                CallBackUpdate={UpdatePitchData}
                            />
                        </Dialog>



                        <Button onClick={clickDeletePitch} size="icon" variant="ghost">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete link</span>
                        </Button>
                    </div>
                </div>
            </CardHeader>

        </Card>)
}



function TrashIcon({ className }: { className: string }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    );
}


function DeleteIcon({ className }: { className: string }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
            <line x1="18" x2="12" y1="9" y2="15" />
            <line x1="12" x2="18" y1="9" y2="15" />
        </svg>
    );
}