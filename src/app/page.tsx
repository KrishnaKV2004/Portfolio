import { Hero } from "@/components/Hero";
import { StoryTimeline } from "@/components/StoryTimeline";
import { Expertise } from "@/components/Expertise";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black overflow-x-hidden">
      <Hero />
      <StoryTimeline />
      <Expertise />
      <Projects />
      <Certifications />
      <Stats />
      <Contact />
    </main>
  );
}
