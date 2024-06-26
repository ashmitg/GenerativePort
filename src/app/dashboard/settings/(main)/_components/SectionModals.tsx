"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { DialogForm } from "./DialogForm";
import { DeleteSettingsDoc } from "@/actions/settings/deletesetting/action";
import { useContext } from "react";
import { useGlobalAuth } from "@/lib/context/context";
import useUpdateSettingsContext from "../../../../../lib/context/UpdateSettingsData";
import { Dispatch, SetStateAction } from "react";

import {
  SetSettingData
} from "@/actions/settings/setsettings/action";

interface ISectionModal {
  id: string;
  title: string;
  description: string;
  link: string;
  imageurl: string;
  sectionname: string;
  optInput: string;
}

type typeUpdateFunction = Dispatch<SetStateAction<boolean>>;
type UIDType = string | null;

export function SectionModals({
  id,
  title,
  description,
  link,
  imageurl,
  sectionname,
  optInput,
}: ISectionModal) {
  const { uid } = useGlobalAuth();


  const { SetUpdateData }: { SetUpdateData: typeUpdateFunction } = useUpdateSettingsContext();
  const [open, setOpen] = useState(false);

  const deleteSettings = async () => {
    let response = await DeleteSettingsDoc(uid, sectionname, id);
    if (response) {
      SetUpdateData(true);

    }
  };

  return (
    <div key={id} className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-medium text-gray-650  ">{title}</h3>
        <p className="text-sm text-gray-500 ">{description}</p>
      </div>
      <div className="flex items-center space-x-2">
        {link?.length > 0 && isValidURL(link) && (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => window.open(link, "_blank")}
          >
            <LinkIcon className="h-4 w-4" />
            <span className="sr-only">Open Project</span>
          </Button>
        )}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" variant="ghost">
              <DeleteIcon className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
          </DialogTrigger>
          <DialogForm
            data={{ title: title, description: description, link: link, imageurl: imageurl }}
            sectionname={sectionname}
            setOpen={setOpen}
            id={id}
            CallBackUpdate={SetSettingData}
            optInput={optInput}
          />
        </Dialog>
        <Button onClick={deleteSettings} size="sm" variant="ghost">
          <TrashIcon className="h-4 w-4" />
          <span className="sr-only">Delete</span>
        </Button>
      </div>
    </div>
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

function LinkIcon({ className }: { className: string }) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
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
function isValidURL(url: string) {
  // Regular expression for a valid URL
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlPattern.test(url);
}