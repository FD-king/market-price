import {
  HeroSkeleton,
  MainBodySkeleton,
} from "./components/skeletons/LoadingSkeletons";

const Loading = () => {
  return (
    <>
      <HeroSkeleton />
      <MainBodySkeleton />
    </>
  );
};

export default Loading;
