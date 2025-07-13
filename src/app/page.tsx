import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Package from "@/components/Package";
import AddOns from "@/components/AddOns";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Package />
      <AddOns />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
