"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export function NavbarDemo({
  data,
  className,
}: {
  data: any;
  className?: string | "";
}) {
  return (
    <nav
      className={` text-white bg-stone-950 inset-x-0 w-full mx-auto z-50 ${className}`}
    >
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <a
            className="text-white no-underline hover:text-white hover:underline"
            href="#"
          >
            <span className="text-2xl left-align">{data?.name}</span>
          </a>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-gray-200 hover:text-gray-600 no-underline"
                href={data?.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={25} />
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-200 no-underline hover:text-gray-600 hover:text-underline py-2 px-4"
                href={data?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={25} />
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-200 no-underline hover:text-gray-600 hover:text-underline py-2 px-4"
                href={data?.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={25} />
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-200 no-underline hover:text-gray-600 hover:text-underline py-2 px-4"
                href={`mailto:${data?.email}`}
              >
                <FaEnvelope size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
