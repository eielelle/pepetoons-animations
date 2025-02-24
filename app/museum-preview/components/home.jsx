import Description from "./description";
import FeatureCarousel from "./feature-carousel";
import Header from "./header";

export default function Home() {
    return <section id="home" className="h-screen sticky top-0">
        <Header />
        <FeatureCarousel />
        <Description />
    </section>
}