
import React, { useEffect } from 'react';
import Confetti from './ui/confetti';
import Particles from './ui/particles';
import CC2 from '../EventsImg2/CC2.jpg';
import CC3 from '../EventsImg2/CC3.jpg';
import CC4 from '../EventsImg2/CC4.jpg';
import dev2cloud from '../EventsImg2/dev2cloud.svg';
import cloudSplorepost from '../EventsImg2/cloudSplorepost.jpg';
import DomeGallery from './DomeGallery';

export const ECloud = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
            images={[CC2, CC3, CC4]}
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
      Event-CloudSplore
    </div>
  );
};

const Image1 = () => {
  return (
    <div className="flex justify-center flex-col items-center relative">
      <img src={dev2cloud} alt="CloudSplore logo" className="sm:h-[60vh] h-[40vh]" />
    </div>
  );
};

const Image2 = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={cloudSplorepost}
        alt="CloudSplore poster"
        className="sm:h-[60vh] h-[40vh] mt-8 sm:mt-0 border-2 border-white rounded-lg shadow-lg shadow-white"
      />
    </div>
  );
};
