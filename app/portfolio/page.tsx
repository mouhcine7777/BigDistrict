"use client";
import StickyMenu from "../components/StickyMenu";
import PortfolioPage from "./components/PortfolioPage";
import FooterSection from "../components/FooterSection";


export default function Home() {
  return (
    <main>
      <StickyMenu />
      <PortfolioPage /> 
      <FooterSection /> 
    </main>
  );
}