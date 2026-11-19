import { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import MainProductSection from "./components/MainProductSection";
import Loading from "./loading";

const HomePage = () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <MainProductSection />
      </Suspense>
    </main>
  );
};

export default HomePage;
