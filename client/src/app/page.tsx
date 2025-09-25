import { HeroSection } from "@/components/blocks/hero-section-dark";
import { Nav } from "@/components/Nav";
import { TradingBentoGrid } from "@/components/TradingBentoGrid";
export default function Home() {
  return (
    <div>
      <Nav/>
      <HeroSection
        title="Welcome to Our Trading Platform"
        subtitle={{
          regular: "Empower your trades with ",
          gradient: "real-time insights and smart tools",
        }}
        description="Maximize your trading potential with our advanced analytics, real-time market data, and secure trading environment."
        ctaText="Start Trading"
        ctaHref="/signup"
        bottomImage={{
          light: "https://www.launchuicomponents.com/app-light.png",
          dark: "https://www.launchuicomponents.com/app-dark.png",
        }}
        gridOptions={{
          angle: 65,
          opacity: 0.4,
          cellSize: 50,
          lightLineColor: "#4a4a4a",
          darkLineColor: "#2a2a2a",
        }}
      />

      <TradingBentoGrid />
    </div>
  );
}
