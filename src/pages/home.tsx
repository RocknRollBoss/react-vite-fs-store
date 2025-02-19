import React from "react";
import { TopInfo, Video } from "../components";
import Slider from "../components/ui/slider";
export const Home: React.FC = () => {
  return (
    <>
      <TopInfo />
      <Slider />
      <Video />
    </>
  );
};
