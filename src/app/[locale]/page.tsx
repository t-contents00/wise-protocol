import Hero from "@/components/sections/home/Hero";
import Stats from "@/components/sections/home/Stats";
import RankTable from "@/components/sections/home/RankTable";
import Simulator from "@/components/sections/home/Simulator";
import Features from "@/components/sections/home/Features";
import Tokenomics from "@/components/sections/home/Tokenomics";
import Roadmap from "@/components/sections/home/Roadmap";
import Bitcastle from "@/components/sections/home/Bitcastle";
import Webwise from "@/components/sections/home/Webwise";
import FAQPreview from "@/components/sections/home/FAQPreview";
import Contact from "@/components/sections/home/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <RankTable />
      <Simulator />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Bitcastle />
      <Webwise />
      <FAQPreview />
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
