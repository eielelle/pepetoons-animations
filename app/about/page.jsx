"use client";

import Script from "next/script";
import aboutImg from "../../assets/about.png";
import Image from "next/image";

import DashboardImg from "../../assets/about/Dashboard-amico.png";
import AnimPreviewImg from "../../assets/about/anim-video-preview.png";
import LitImg from "../../assets/about/lit.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeaderLayout from "../layouts/HeaderLayout";
import Head from "next/head";

export default function About() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window.FinisherHeader !== "undefined") {
        new window.FinisherHeader({
          count: 5,
          size: {
            min: 280,
            max: 780,
            pulse: 0,
          },
          speed: {
            x: {
              min: 0.6,
              max: 3,
            },
            y: {
              min: 0.6,
              max: 3,
            },
          },
          colors: {
            background: "#020202",
            particles: ["#9f4416", "#87ddfe", "#231efe", "#ff0a53"],
          },
          blending: "overlay",
          opacity: {
            center: 0.6,
            edge: 0,
          },
          skew: 0,
          shapes: ["c"],
        });

        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeaderLayout>
      <main className="">
        <Script
          src="https://finisher.co/lab/header/assets/finisher-header.es5.min.js"
          strategy="afterInteractive"
        />
        {/* <Script src="/scripts/finisher-header.es5.min.js" strategy="afterInteractive" onLoad={() => {console.log("loaded")}} /> */}
        {/* <Script src="/scripts/header.js" /> */}
        <section className="hero relative">
          <div
            className="header finisher-header"
            style={{ width: "100vw", height: "100vh" }}
          ></div>
          <div className="absolute top-0 left-0 size-full">
            <div className="container mx-auto size-full flex flex-wrap-reverse justify-evenly items-center gap-6 text-center lg:text-left">
              <div className="w-2/4">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p>
                  Welcome to dedicated to the Life and Legacy of Dr. José Rizal!
                </p>
                <br />
                <p>
                  Our website is a comprehensive and interactive platform
                  created to honor and celebrate the remarkable life of Dr. José
                  Rizal, the national hero of the Philippines. Here, we aim to
                  provide an in-depth exploration of his life, his work, and his
                  influence on Filipino culture and the history of the
                  Philippines.
                </p>
                <br />
                <Link href={"/home"} className="btn btn-lg btn-primary">
                  Get Started
                </Link>
              </div>
              <div>
                <Image width={400} src={DashboardImg} alt="dashboard" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black p-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap text-center lg:text-left justify-evenly items-center h-[600px]">
              <div>
                <div className="mockup-window bg-base-100 border border-base-300 max-w-[500px]">
                  <div className="grid place-content-center h-full w-full p-1">
                    <Image
                      className="h-full w-full object-cover rounded"
                      src={AnimPreviewImg}
                      alt="dashboard"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/4">
                <h1 className="text-4xl font-bold mb-4">
                  Explore Rizal's Life
                </h1>
                <p>
                  Learn about the life journey of José Rizal, from his early
                  years in Calamba to his execution in Bagumbayan. Our website
                  covers his education, travels, literary works, and
                  contributions to the fight for Filipino rights and freedom.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap-reverse text-center lg:text-left justify-evenly items-center h-[600px]">
              <div className="w-full lg:w-1/4">
                <h1 className="text-4xl font-bold mb-4">His Works</h1>
                <p>
                  Dive deep into Rizal's major works like Noli Me Tangere and El
                  Filibusterismo, and explore their relevance in today's world.
                  We provide analyses, insights, and context behind these iconic
                  works that continue to inspire enerations.
                </p>
              </div>
              <div>
                <div className="mockup-window bg-base-100 border border-base-300 max-w-[500px]">
                  <div className="grid place-content-center h-full w-full p-1">
                    <Image
                      className="h-full w-full object-cover rounded"
                      src={LitImg}
                      alt="dashboard"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2 mx-auto relative mb-14">
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-pen-tool"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                  <circle cx="11" cy="11" r="2" />
                </svg>
              </span>
              <h1 className="text-center text-4xl font-bold mb-2">
                Why <i>Pepetoons</i>?
              </h1>
              <p className="text-center mb-6">
                The name Pepetoons is a playful blend of “Pepe” and “cartoons.”
                “Pepe” was José Rizal's nickname, and since we tell his story
                through animated videos (or cartoons), the name captures both
                his identity and our creative approach. It's our fun way of
                making history feel more alive and relatable—especially for
                younger audiences!
              </p>
            </div>

            <div className="w-full lg:w-2/3 mx-auto">
              <h1 className="text-center text-4xl font-bold mb-2">FAQ</h1>
              <p className="text-center mb-6">Frequently Asked Questions</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
                <div>
                  <br />
                  <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">
                      Did José Rizal retract his criticisms of the Catholic
                      Church before his execution?
                    </div>
                    <div className="collapse-content text-sm">
                      The claim that José Rizal retracted his criticisms of the
                      Catholic Church before his execution is highly debated.
                      The Church says he signed a retraction, but many scholars
                      doubt its authenticity due to inconsistencies, lack of
                      original copies, Rizal's character, and the circumstances
                      of his death. There are arguments on both sides, and no
                      definitive conclusion has been reached.
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
                      writings, advocacy for reforms, and peaceful resistance.
                      His works inspired Filipinos to fight for justice and
                      freedom.
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
                      contributions to the fight for freedom and his martyrdom,
                      which inspired the Philippine Revolution against Spanish
                      rule.
                    </div>
                  </div>
                  <br />
                  <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">
                      What is the goal of this website?
                    </div>
                    <div className="collapse-content text-sm">
                      Our goal is to make Rizal's life and contributions more
                      accessible and engaging through storytelling and
                      animation—perfect for students, educators, and anyone
                      curious about Philippine history.
                    </div>
                  </div>
                </div>

                <div>
                  <br />
                  <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">
                      Who is the intended audience for this website?
                    </div>
                    <div className="collapse-content text-sm">
                      Our content is designed for learners of all ages—students,
                      teachers, researchers, and history enthusiasts who want to
                      learn about Rizal in a visual and simplified way.
                    </div>
                  </div>
                  <br />
                  <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">
                      What makes this website different?
                    </div>
                    <div className="collapse-content text-sm">
                      We use concise, animated videos to tell Rizal's story in a
                      visually engaging way. Our content is bite-sized, modern,
                      and easy to digest—perfect for quick learning or classroom
                      integration.
                    </div>
                  </div>
                  <br />
                  <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">
                      Is the website free to use?
                    </div>
                    <div className="collapse-content text-sm">
                      Yes! All our content is freely accessible for educational
                      and non-commercial use. We believe that learning about
                      history should be open to everyone.
                    </div>
                  </div>
                  <br />
                  <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">
                      What key topics do the videos explore?
                    </div>
                    <div className="collapse-content text-sm">
                      We cover Rizal's childhood, education, travels, major
                      literary works (Noli Me Tangere, El Filibusterismo),
                      social reforms, key relationships, and his role in the
                      Philippine revolution.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 mx-auto pb-28 my-12">
              <div className="p-[2px] flex justify-center items center bg-gradient-to-r from-sky-400 via-blue-500 via-violet-600 to-red-500 rounded-lg">
                <div className="text-center bg-black rounded-lg p-12">
                  <h1 className="text-6xl mb-6 font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                    Our Mission
                  </h1>
                  <p>
                    At PepeToons, our mission is to make Dr. José Rizal's life
                    and legacy accessible and engaging for people of all ages
                    and backgrounds. We strive to educate, inspire, and provide
                    a platform where visitors can deepen their understanding of
                    Rizal's pivotal role in Philippine history. Whether you're a
                    student, a history enthusiast, or simply curious about
                    Rizal's impact, this website is a resource to help you learn
                    more about one of the most important figures in Philippine
                    history. Join us in remembering and celebrating Dr. José
                    Rizal's contributions to the Filipino people and the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </HeaderLayout>
  );
}
