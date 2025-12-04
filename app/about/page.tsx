"use client";
import StickyMenu from "../components/StickyMenu";
import AboutPage from "./components/AboutPage";
import FooterSection from "../components/FooterSection";


export default function Home() {
  return (
    <main>
      <StickyMenu />
      <AboutPage /> 
      <FooterSection /> 
    </main>
  );
}