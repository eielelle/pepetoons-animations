import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen relative">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        src="/videos/aerial-luneta.mp4"
      />

      {/* overlay */}
      <div className="fixed top-0 left-0 h-full w-full bg-black opacity-60"></div>

      {/* content */}
      <div className="fixed top-0 left-0 h-full w-full flex flex-col justify-center items-center">
        <div className="flex flex-col w-1/2 text-center gap-4 mt-auto">
          <h1 className="text-lg md:text-4xl">
            PREPARE TO EMBARK ON A JOURNEY THROUGH HISTORY
          </h1>
          <h1 className="text-xl md:text-5xl font-bold bg-white text-black p-4 inline-block">
            DISCOVER THE LIFE, IDEALS, AND LEGACY OF DR. JOSE RIZAL ...
          </h1>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <Link className="btn btn-white btn-outline md:btn-lg grow-0" href={"/museum-preview"}>
              Visit Museum
            </Link>
            <Link className="btn btn-primary md:btn-lg grow-0" href={"/home"}>
              Explore Site
            </Link>
          </div>
        </div>
        <span className="mt-auto p-4 text-sm text-center">
          <Link
            className="underline"
            href={"https://www.youtube.com/watch?v=l46P8R-Vt-g"}
          >
            Have Camera Will Travel
          </Link>{" "}
          - Aerial shot of Luneta.
        </span>
      </div>
    </main>
  );
}
