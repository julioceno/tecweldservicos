import { content } from "@/data/content";
import HighlightCard from "./HighlightCard";

export default function Highlights() {
  return (
    <section className="w-full py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.highlights.map((highlight, index) => (
          <HighlightCard
            key={index}
            icon={highlight.icon}
            title={highlight.title}
            description={highlight.description}
          />
        ))}
      </div>
    </section>
  );
}
