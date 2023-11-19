"use client";
import {
  About,
  Contact,
  Introduction,
  Learn,
  Projects,
  QuickIntro,
} from "@/components/index";

export default function Home() {
  return (
    <main className="main overflow-y-scroll snap-y snap-mandatory">
      <Introduction />
      <QuickIntro />
      <Projects />
      <Learn />
      <About />
      <Contact />
    </main>
  );
}
