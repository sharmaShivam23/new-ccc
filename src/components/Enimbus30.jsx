

import React, { useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Confetti from './ui/confetti';
import Particles from './ui/particles';
import nimbusp from '../EventsImg/nimbusp.jpg';
import Nimbus_1 from '../EventsImg2/Nimbus_1.jpg';
import Nimbus_2 from '../EventsImg2/Nimbus_2.jpg';
import Nimbus_3 from '../EventsImg2/Nimbus_3.jpg';
import nmbusl from "../EventsImg2/nmbusl.svg"
import DomeGallery from './DomeGallery';

export const Enimbus30 = () => {
   useEffect(() => {
      window.scrollTo({
        top : 0,
        behavior : "smooth"
      })
    })
  
  return (
    <>
    <Particles/>
    <div className = "absolute top-0 left-0 w-full flex justify-center items-center">
     <Confetti   particleCount= {400} spread= {500}></Confetti>
     </div>
    <div className='max-w-[80vw] text-center flex justify-center items-center flex-col m-auto h-auto '>
      <Head/>
      <div className=' block md:flex justify-evenly mt-16 gap-52'>
      <Image1/>
      <Image2/>
      </div>
      <div style={{ width: '100vw', height: '100vh', marginTop: '3rem' }}>
        <DomeGallery
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          images={[Nimbus_1, Nimbus_2, Nimbus_3]}
          grayscale={false}
          overlayBlurColor="transparent"
        />
      </div>
    </div>
    </>
  )
}

const Head = () => {
  return(
    <div className='text-white text-4xl font-bold underline   mt-6'>
      Event-Nimbus
    </div>
  )
}

const Image1 = () => {
  return(
    <div className='flex justify-center items-center'>
       <img src={nmbusl} alt=""  className='sm:h-[60vh] h-[40vh] ' />
    </div>
  )
}

const Image2 = () => {
  return(
    <div className='flex justify-center items-center'>
       <img src={nimbusp} alt=""  className='sm:h-[60vh] h-[40vh] mt-8 sm:mt-0 border-2 border-white rounded-lg shadow-lg shadow-white' />
    </div>
  )
}



