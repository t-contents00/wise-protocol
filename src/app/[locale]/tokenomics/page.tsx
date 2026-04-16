import TokenHero from "@/components/sections/tokenomics/TokenHero";
import TokenTable from "@/components/sections/tokenomics/TokenTable";
import DetailedChart from "@/components/sections/tokenomics/DetailedChart";
import DividendExplainer from "@/components/sections/tokenomics/DividendExplainer";
import Simulator from "@/components/sections/home/Simulator";
import ScenarioTable from "@/components/sections/tokenomics/ScenarioTable";
import Countdown from "@/components/sections/home/Countdown";

export default function TokenomicsPage() {
  return (
    <main>
      <TokenHero />
      <TokenTable />
      <DetailedChart />
      <DividendExplainer />
      <Simulator />
      <ScenarioTable />
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <Countdown compact />
        </div>
      </section>
    </main>
  );
}
