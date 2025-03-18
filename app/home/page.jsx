import Image from "next/image";
import Link from "next/link";
import SidebarLayout from "../layouts/SidebarLayout";

import arrestImg from "../../assets/homepage/arrest.jpg"
import educationImg from "../../assets/homepage/education.jpg"
import monumentImg from "../../assets/homepage/monument.jpg"
import familyImg from "../../assets/homepage/family.jpg"
import legacyImg from "../../assets/homepage/legacy.jpg"
import romanticLifeImg from "../../assets/homepage/romantic.jpg"
import travelsImg from "../../assets/homepage/travels.jpg"
import CarouselSlide from "./CarouselSlide";

export default function Homepage() {
  return (
    <SidebarLayout>
      <main className="p-4">
        <h1 className="text-2xl font-semibold">Biography of Jose Rizal</h1>
        <p>
          Discover José Rizal's life, works, and legacy that inspired Philippine
          independence.
        </p>

        <div className="w-full overflow-x-scroll my-4">
          <div className="carousel carousel-center gap-4">
            <CarouselSlide href={"/arrest"} src={arrestImg} alt={"arrest"}>Arrest</CarouselSlide>
            <CarouselSlide href={"/education"} src={educationImg} alt={"education"}>Education</CarouselSlide>
            <CarouselSlide href={"/exile"} src={monumentImg} alt={"monuments-and-his-exile"}>Monuments and his Exile</CarouselSlide>
            <CarouselSlide href={"/family"} src={familyImg} alt={"family"}>Family</CarouselSlide>
            <CarouselSlide href={"/legacy"} src={legacyImg} alt={"legacy"}>Legacy</CarouselSlide>
            <CarouselSlide href={"/romantic-life"} src={romanticLifeImg} alt={"romantic-life"}>Romantic Life</CarouselSlide>
            <CarouselSlide href={"/travels"} src={travelsImg} alt={"travels"}>Travels</CarouselSlide>
          </div>
        </div>

        <h1 className="text-2xl font-semibold">Animations</h1>
        <p>Engaging animations bring José Rizal's story to life.</p>

        <div className="w-full overflow-x-scroll my-4">
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
      </main>
    </SidebarLayout>
  );
}
