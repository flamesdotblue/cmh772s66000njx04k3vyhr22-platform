import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/70 pointer-events-none" />
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-14">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl leading-tight font-semibold tracking-tight">
            Bold architecture and interiors with precision and clarity
          </h1>
          <p className="mt-4 text-neutral-300 max-w-2xl">
            We craft residential and commercial spaces defined by strong geometry, refined materials, and timeless proportion.
          </p>
        </div>
      </div>
    </section>
  );
}
