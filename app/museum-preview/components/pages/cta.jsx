import Header from "../header";

export default function CTA() {
  return (
    <section id="cta" className="h-screen bg-black text-white sticky top-0">
      <div className="container mx-auto">
        <Header color="white" />
        <div className="border-t-2 border-white"></div>
      </div>
    </section>
  );
}
