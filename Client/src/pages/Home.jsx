import React from 'react';
import '../App.css';
import '../index.css';

export default function Home() {
  return (
    <div className="itshome">
      {/* Section 1 - Sundarta yhi pe shuru yhi pe khatam */}
      <section className="relative h-screen opacity-90">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="../public/assets/home.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h1
              className="text-4xl md:text-9xl font-bold italic text-indigo-900 animate-fadeInH1"
              style={{ fontFamily: "'Playfair Display', italic" }}
            >
              UnTaboo.
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-black animate-fadeInP">
              Your tagline or description goes here.
            </p>
          </div>
        </div>
      </section>

  {/* Section 2 */}
  <section className="h-screen bg-center bg-cover bg-gray-400 flex items-center justify-center text-center snap-start">
    <div className="text-gray-800">
      <h2 className="text-3xl font-bold md:text-5xl">OUR DOCTORS</h2>
      <p className="mt-4 text-lg md:text-xl">
        
      </p>
      <a href="#consultation" className="mt-8 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition duration-300">
        Book a Consultation
      </a>
    </div>
  </section>

  {/* Section 3 */}
  <section className="h-screen bg-center bg-cover bg-gray-500 flex items-center justify-center text-center snap-start">
    <div className="text-gray-800">
      <h2 className="text-3xl font-bold md:text-5xl">Educational Resources</h2>
      <p className="mt-4 text-lg md:text-xl">
        Explore blogs, podcasts, and articles on topics like PCOS, pregnancy, STIs, and more.
      </p>
      <a href="#resources" className="mt-8 inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-500 transition duration-300">
        Learn More
      </a>
    </div>
  </section>

  {/* Section 4 */}
  <section className="h-screen bg-center bg-cover bg-gray-600 flex items-center justify-center text-center snap-start">
    <div className="text-gray-800">
      <h2 className="text-3xl font-bold md:text-5xl">Join the Community</h2>
      <p className="mt-4 text-lg md:text-xl">
        Connect with others, share your story, and break the silence around women's health.
      </p>
      <a href="#community" className="mt-8 inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-500 transition duration-300">
        Join Us
      </a>
    </div>
  </section>
</div>

);
}