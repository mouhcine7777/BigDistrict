"use client";
import StickyMenu from "./components/StickyMenu";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import NewsletterSection from "./components/NewsletterSection";
import FooterSection from "./components/FooterSection";


export default function Home() {
  return (
    <main>
      <StickyMenu />
      <HeroSection /> 
      <AboutSection /> 
      <PortfolioSection /> 
      <FooterSection /> 
    </main>
  );
}