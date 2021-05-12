import React from 'react';
import image from '../sergey-zolkin-_UeY8aTI6d0-unsplash.jpg';

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Work on notebook"
        className="absolute object-cover w-full h-full opacity-50"
      />
      <section className="relative justify-center min-h-screen pt-12 px-8 flex flex-col items">
        <h1 className="text=6xl text-black font-bold cursive leading-none lg:leading-snug home-name">
          &#x002F;&#x002F; Hi, I'm James Marshall-Osborne
        </h1>
        <h1 className="text=6xl text-black font-bold cursive leading-none lg:leading-snug home-description">
          function myPassions&#x0028; &#x0029; &#x003D;&#x003E;
          &#x007B;
        </h1>
        <h1 className="text=6xl text-black font-bold cursive leading-none lg:leading-snug home-description px-12">
          development &#x003D;&#x003D; true &#x003B;
        </h1>
        <h1 className="text=6xl text-black font-bold cursive leading-none lg:leading-snug home-description px-12">
          golf &#x003D;&#x003D; true &#x003B;
        </h1>
        <h1 className="text=6xl text-black font-bold cursive leading-none lg:leading-snug home-description px-12">
          gaming &#x003D;&#x003D; true &#x003B;
        </h1>
        <h1 className="text=6xl text-black font-bold cursive leading-none lg:leading-snug home-description">
          &#x007D;
        </h1>
      </section>
    </main>
  );
}
