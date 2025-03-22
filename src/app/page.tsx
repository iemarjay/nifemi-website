import {
  About,
  ClientSuccess,
  Contact,
  Hero,
  ResultOutcome,
  Skill,
  Testimonial,
  WhatCanIDo,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skill />
      <ClientSuccess />
      <ResultOutcome />
      <Testimonial />
      <WhatCanIDo />
      <Contact />
    </main>
  );
}
