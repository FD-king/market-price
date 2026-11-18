import { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import MainProductSection from "./components/MainProductSection";

const HomePage = () => {
  return (
    <main>
      <Suspense fallback={"loading..."}>
        <HeroSection />
        <MainProductSection />
      </Suspense>
    </main>
  );
};

export default HomePage;
