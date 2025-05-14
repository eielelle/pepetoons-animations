"use client";

import { use } from "react";
import { data } from "./data";
import HeaderLayout from "../../../app/layouts/HeaderLayout";
import Link from "next/link";
import dynamic from 'next/dynamic'

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function Page({ params }) {
  const { slug } = use(params);
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

  function constraintIndex(num) {
    return num < data.length;
  }

  return (
    <HeaderLayout>
      <main className="mt-20 p-4 container mx-auto min-h-screen grid grid-cols-1 xl:grid-cols-3 gap-6">
        <section className="col-span-2">
          <div className="w-full aspect-video rounded-2xl border overflow-hidden">
            <ReactPlayer width="100%" height="100%" url={data[slug].link} />
          </div>
          <h1 className="my-4 text-4xl font-bold">{data[slug].title}</h1>
          <h2 className="font-semibold">Description</h2>
          <p>{data[slug].description}</p>
        </section>
        <section className="h-screen flex flex-col mb-6">
          {constraintIndex(Number(slug) + 1) && (
            <ul className="list bg-base-100 rounded-box shadow-md">
              <li className="p-4 pb-2 tracking-wide">
                <h2 className="text-2xl font-bold">Up Next:</h2>
              </li>

              <li className="list-row">
                <div>
                  <img
                    className="size-10 rounded-box"
                    src={`/thumbs/episode-${Number(slug) + 2}.png`}
                  />
                </div>
                <div>
                  <div>{data[Number(slug) + 1].title}</div>
                  <div className="text-xs uppercase font-semibold opacity-60">
                    {data[Number(slug) + 1].description.slice(0, 15) + "..."}
                  </div>
                </div>
                <Link
                  href={`/video/${Number(slug) + 1}`}
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    className="size-[1.2em]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M6 3L20 12 6 21 6 3z"></path>
                    </g>
                  </svg>
                </Link>
              </li>
            </ul>
          )}

          <div className="divider"></div>

          <ul className="list rounded-box flex-1 overflow-scroll">
            {data.slice(Number(slug) + 2).map((val, index) => (
              <li key={index} className="list-row">
                <div>
                  <img
                    className="w-[200px] object-cover aspect-video rounded-box"
                    src={`/thumbs/episode-${Number(slug) + index + 3}.png`}
                  />
                </div>
                <div>
                  <div>{val.title}</div>
                  <div className="text-xs uppercase font-semibold opacity-60">
                    {val.description.slice(0, 30) + "..."}
                  </div>
                </div>
                <Link
                  href={`/video/${Number(slug) + index + 2}`}
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    className="size-[1.2em]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M6 3L20 12 6 21 6 3z"></path>
                    </g>
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </HeaderLayout>
  );
}
