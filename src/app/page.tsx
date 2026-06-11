import { Hero } from "@/components/Hero";
import { StoryTimeline } from "@/components/StoryTimeline";
import { Expertise } from "@/components/Expertise";
import { Projects } from "@/components/Projects";
import { Stats } from "@/components/Stats";
import { FutureVision } from "@/components/FutureVision";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <StoryTimeline />
      <Expertise />
      <Projects />
      <Stats />
      <FutureVision />
      <Contact />
    </main>
  );
}
