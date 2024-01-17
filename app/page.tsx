// "use client";
import {
  About,
  Contact,
  Learn,
  Projects,
  QuickIntro,
  Skills,
} from "@/components/index";

export default function Home() {
  return (
    <main className="main overflow-y-scroll snap-y snap-mandatory">
      <Skills />
      <QuickIntro />
      <Projects />
      <Learn />
      <About />
      <Contact />
    </main>
  );
}
