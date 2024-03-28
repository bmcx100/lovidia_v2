import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Helpers from "@/components/Helpers";
import Hero from "@/components/Hero";
import HeroSymptoms from "@/components/HeroSymptoms";
import You from "@/components/You";

export default function Home() {
  return (
    <section>
      <Hero />
      <Divider />
      <HeroSymptoms />
      <Helpers />
      <You />
    </section>
  );
}
