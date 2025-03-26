import { familyData } from "./data";
import TimelineItem from "./TimelineItem";

export default function Family() {
  return (
    <main
      className="min-h-screen bg-orange-900 p-4 font-[qwigley]"
      style={{
        backgroundImage: "url('/old-paper-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-8xl text-center font-semibold mb-4">
          Rizal's Family
        </h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {familyData.map((value, key) => (
            <TimelineItem
              key={key}
              isEnd={key % 2 == 0}
              title={value.name}
              year={value.year}
              img={value.img}
              description={value.description}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
