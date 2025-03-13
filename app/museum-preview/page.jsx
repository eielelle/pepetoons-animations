import CTA from "./components/pages/cta";
import Gallery from "./components/pages/gallery";
import Home from "./components/pages/home";

export default function MuseumPreview() {
  return (
    <main className="bg-white h-screen">
      <Home />
      <div className="h-[500%] mt-[-100%]">
        <CTA />
      </div>
    </main>
  );
}
