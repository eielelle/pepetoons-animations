import Image from "next/image";
import Link from "next/link";
import SidebarLayout from "../layouts/SidebarLayout";

import heroImg from "../../assets/homepage/hero.jpg";
import arrestImg from "../../assets/homepage/arrest.jpg";
import educationImg from "../../assets/homepage/education.jpg";
import monumentImg from "../../assets/homepage/monument.jpg";
import familyImg from "../../assets/homepage/family.jpg";
import legacyImg from "../../assets/homepage/legacy.jpg";
import romanticLifeImg from "../../assets/homepage/romantic.jpg";
import travelsImg from "../../assets/homepage/travels.jpg";
import CarouselSlide from "./CarouselSlide";
import HeaderLayout from "../layouts/HeaderLayout";

export default function Homepage() {
  return (
    <HeaderLayout>
      <main className="bg-black">
        <section
          className="relative bg-cover hero h-[800px] w-screen"
          style={{ backgroundImage: `url('${travelsImg.src}')` }}
        >
          <div
            className="absolute top-0 left-0 size-full"
            style={{
              background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))`,
            }}
          ></div>
          <div className="absolute top-0 left-0 size-full flex justify-center items-center">
            <div className="w-1/2 mx-auto text-center">
              <h1 className="text-4xl font-black">
                José Rizal: The Life, Legacy, and Literature of a National Hero
              </h1>
              <p className="my-4">
                Discover the inspiring journey of José Rizal—his works, ideals,
                and lasting impact on the Philippines and beyond.
              </p>
              <a href="" className="btn btn-lg btn-primary">
                Get Started
              </a>
            </div>
          </div>
        </section>

        <section className="-mt-24 overflow-visible z-10 relative">
          <div className="container px-4 mx-auto border-l-4 border-l-primary">
            <h1 className="text-2xl font-semibold">Biography of Jose Rizal</h1>
            <p>
              Discover José Rizal's life, works, and legacy that inspired
              Philippine independence.
            </p>
          </div>

          <div className="w-full overflow-x-scroll my-4 scrollba">
            <div className="carousel carousel-center gap-4">
              <CarouselSlide href={"/arrest"} src={arrestImg} alt={"arrest"}>
                Arrest
              </CarouselSlide>
              <CarouselSlide
                href={"/education"}
                src={educationImg}
                alt={"education"}
              >
                Education
              </CarouselSlide>
              <CarouselSlide
                href={"/exile"}
                src={monumentImg}
                alt={"monuments-and-his-exile"}
              >
                Monuments and his Exile
              </CarouselSlide>
              <CarouselSlide href={"/family"} src={familyImg} alt={"family"}>
                Family
              </CarouselSlide>
              <CarouselSlide
                href={"/works/novels"}
                src={legacyImg}
                alt={"legacy"}
              >
                Writings
              </CarouselSlide>
              <CarouselSlide
                href={"/romantic-life"}
                src={romanticLifeImg}
                alt={"romantic-life"}
              >
                Romantic Life
              </CarouselSlide>
              <CarouselSlide href={"/visit"} src={travelsImg} alt={"travels"}>
                Travels
              </CarouselSlide>
            </div>
          </div>
        </section>

        <section>
          <div className="container px-4 mx-auto border-l-4 border-l-primary">
            <h1 className="text-2xl font-semibold">Check this out!</h1>
            <p>
              Watch PepeToons and explore the various chapters of José Rizal's
              Life.
            </p>
          </div>

          <div className="w-full overflow-x-scroll mt-4">
            <div className="carousel carousel-center gap-4">
              <div className="carousel-item aspect-video w-lg bg-black">
                <video controls src="/videos/aerial-luneta.mp4" />
              </div>
              <div className="carousel-item aspect-video w-lg bg-black">
                <video controls src="/videos/aerial-luneta.mp4" />
              </div>
              <div className="carousel-item aspect-video w-lg bg-black">
                <video controls src="/videos/aerial-luneta.mp4" />
              </div>
              <div className="carousel-item aspect-video w-lg bg-black">
                <video controls src="/videos/aerial-luneta.mp4" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </HeaderLayout>
    // <SidebarLayout>
    // </SidebarLayout>
  );
}
