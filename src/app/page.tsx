import { Suspense } from "react";
import HeroSection from "./components/HeroSection";

const HomePage = () => {
  return (
    <div>
      <Suspense fallback={"loading..."}>
        <HeroSection />
      </Suspense>
    </div>
  );
};

export default HomePage;
