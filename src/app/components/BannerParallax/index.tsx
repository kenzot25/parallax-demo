'use client';
import {motion, useScroll, useTransform} from 'framer-motion';
import {useRef} from 'react';

/* eslint-disable @next/next/no-img-element */
const BannerParallax = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const textScale = useTransform(scrollYProgress, [0, 1], ['100%', '200%']);
  return (
    <div
      className='relative w-full h-screen grid place-content-center overflow-hidden'
      ref={ref}>
      <motion.p
        className='relative uppercase text-5xl lg:text-9xl text-white font-bold z-10'
        style={{
          y: textY,
          scale: textScale,
        }}>
        Your limit
      </motion.p>
      <motion.div
        style={{y: backgroundY, backgroundImage: 'url(/images/full.jpg)'}}
        className='inset-0 absolute z-0 bottom-0 bg-cover bg-center'></motion.div>
      <div
        className='inset-0 absolute z-20 bottom-0 bg-cover bg-center'
        style={{backgroundImage: 'url(/images/bottom.png)'}}
      />
    </div>
  );
};

export default BannerParallax;
