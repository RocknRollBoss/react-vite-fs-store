import React from "react";
import { Title, Container } from ".";

export const Video: React.FC = () => {
  return (
    <section className="pb-[150px] pt-[150px]">
      <Container className="max-w-[1220px] my-0 mx-auto px-10px">
        <Title
          size="lg"
          className="mb-5 uppercase text-center font-bold text-5xl"
          text="Welcome to F&S Shope"
        />
        <p className="text-2xl font-bold mb-[50px] text-center">
          Open yourself up to the F&S Shope
        </p>
        <iframe
          className="my-0 mx-auto lg:w-full md:h-[400px] sm:h-[200px]"
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/uXUKjSAU2fo?si=fAp-1YP9Zh0IQ9xD&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Container>
    </section>
  );
};
