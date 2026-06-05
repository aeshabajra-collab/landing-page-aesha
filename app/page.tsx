import Benefits from "@/components/Benefits";
import CTAForm from "@/components/CTAForm";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Urgency from "@/components/Urgency";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Benefits />
      <FAQ />
      <Urgency />
      <CTAForm />
    </main>
  );
}
