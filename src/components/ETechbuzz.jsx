

import React, { useEffect } from 'react';
import Confetti from './ui/confetti';
import Particles from './ui/particles';
import Techbuzz_1 from '../EventsImg2/Techbuzz_1.jpg';
import Techbuzz_2 from '../EventsImg2/Techbuzz_2.jpg';
import Techbuzz_3 from '../EventsImg2/Techbuzz_3.jpg';
import techposter from '../EventsImg2/techposter.jpg';
import techl from '../EventsImg2/techl.svg';
import DomeGallery from './DomeGallery';

export const Techbuzz = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []); // ← [] = only on mount, not every render

  return (
    <>
      <Particles />
      <div className="absolute top-0 left-0 w-full flex justify-center items-center">
        <Confetti particleCount={400} spread={500}></Confetti>
      </div>
      <div className="max-w-[80vw] text-center flex justify-center items-center flex-col m-auto h-auto">
        <Head />
        <div className="block md:flex justify-evenly mt-16 gap-52">
          <Image1 />
          <Image2 />
        </div>
        <div style={{ width: '100vw', height: '100vh', marginTop: '3rem' }}>
          <DomeGallery
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            images={[Techbuzz_1, Techbuzz_2, Techbuzz_3]}
            grayscale={false}
            overlayBlurColor="transparent"
          />
        </div>
      </div>
    </>
  );
};

const Head = () => {
  return (
    <div className="text-white text-4xl font-bold underline mt-6">
      Event-Techbuzz
    </div>
  );
};

const Image1 = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={techl} alt="techposter" className="sm:h-[60vh] h-[40vh]" />
    </div>
  );
};

const Image2 = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={techposter}
        alt=""
        className="sm:h-[60vh] h-[40vh] mt-8 w-[20vw] sm:mt-0 border-2 border-white rounded-lg shadow-lg shadow-white"
      />
    </div>
  );
};

