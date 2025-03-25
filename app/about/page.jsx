"use client";

import Script from "next/script";
import aboutImg from "../../assets/about.png";
import Image from "next/image";

import DashboardImg from "../../assets/about/Dashboard-amico.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function About() {

  return (
    <main className="">
      <Script src="/scripts/finisher-header.es5.min.js" defer={true} />
      <Script src="/scripts/header.js" defer={true} />
      <section className="hero relative">
        <div
          className="header finisher-header"
          style={{ width: "100vw", height: "100vh" }}
        ></div>
        <div className="absolute top-0 left-0 size-full">
          <div className="container mx-auto size-full flex justify-evenly items-center gap-6">
            <div className="w-2/4">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p>
                Welcome to dedicated to the Life and Legacy of Dr. Jose Rizal!
              </p>
              <br />
              <p>
                Our website is a comprehensive and interactive platform created
                to honor and celebrate the remarkable life of Dr. José Rizal,
                the national hero of the Philippines. Here, we aim to provide an
                in-depth exploration of his life, his work, and his influence on
                Filipino culture and the history of the Philippines.
              </p>
              <br />
              <Link
                href={"/home"}
                className="btn btn-lg rounded-full btn-primary"
              >
                Get Started
              </Link>
            </div>
            <div>
              <Image width={400} src={DashboardImg} alt="dashboard" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="container mx-auto">
          <div className="flex justify-evenly items-center h-[600px]">
            <div>
              <Image width={400} src={DashboardImg} alt="dashboard" />
            </div>
            <div className="w-1/4">
              <h1 className="text-4xl font-bold mb-4">Explore Rizal's Life</h1>
              <p>
                Learn about the life journey of José Rizal, from his early years
                in Calamba to his execution in Bagumbayan. Our website covers
                his education, travels, literary works, and contributions to the
                fight for Filipino rights and freedom.
              </p>
            </div>
          </div>

          <div className="flex justify-evenly items-center h-[600px]">
            <div className="w-1/4">
              <h1 className="text-4xl font-bold mb-4">His Works</h1>
              <p>
                Dive deep into Rizal's major works like Noli Me Tangere and El
                Filibusterismo, and explore their relevance in today's world. We
                provide analyses, insights, and context behind these iconic
                works that continue to inspire enerations.
              </p>
            </div>
            <div>
              <Image width={400} src={DashboardImg} alt="dashboard" />
            </div>
          </div>

          <div className="w-1/2 mx-auto pb-28">
            <h1 className="text-center text-4xl font-bold mb-6">FAQ</h1>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title font-semibold">
                Who was Dr. Jose Rizal?
              </div>
              <div className="collapse-content text-sm">
                Dr. José Rizal was a Filipino nationalist, writer, and the
                country's national hero, known for his novels Noli Me Tangere
                and El Filibustegviype, which exposed the injustices of Spanish
                colonial rule.
              </div>
            </div>
            <br />
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                What were Rizal's Major Contributions?
              </div>
              <div className="collapse-content text-sm">
                Rizal contributed to Philippine independence through his
                writings, advocacy for reforms, and peaceful resistance. His
                works inspired Filipinos to fight for justice and freedom.
              </div>
            </div>
            <br />
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                Why is Rizal Considered a National Hero?
              </div>
              <div className="collapse-content text-sm">
                Rizal is a national hero because of his intellectual
                contributions to the fight for freedom and his martyrdom, which
                inspired the Philippine Revolution against Spanish rule.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
