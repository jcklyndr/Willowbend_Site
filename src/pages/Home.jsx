import React from "react";
import Hero from "../components/home/Hero";
import WillowbendInfo from "../components/home/WillowbendInfo";
import Gallery from "../components/home/Gallery";
import { communityImages } from "../data/communityImages";

function Home() {
  return (
    <>
      <main className="pt-10">
        <Hero />
        <WillowbendInfo />
        <Gallery images={communityImages} />
      </main>
    </>
  );
}

export default Home;
