import React from 'react';
import '../App.css';
import '../index.css';

export default function Home({ openAppointmentPopup }) {
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
  <section className="h-192 bg-center bg-cover bg-white flex flex-col items-start justify-center text-center snap-start pt-16">
  {/* Doctors Section */}
  <div className="w-full flex flex-col space-y-8"> {/* Reduced space-y from 8 to 4 */}
        {/* Doctor 1 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg p-6" data-aos="fade-right"> {/* Reduced padding from p-6 to p-4 */}
          <img src="https://www.apollocradle.com/backend/web/doctor-images/1698306869Photo-Dr-Seema-Sharma.jpg" alt="Dr. seema sharma " className="w-48 h-48 rounded-full md:mr-6 mb-4 md:mb-0" />
          <div className="text-left">
            <h3 className="text-5xl font-semibold text-indigo-900">Dr. Seema Sharma</h3>
            <p className="mt-2"><strong>Clinic Address:</strong> Apollo Hospital Rajouri Garden New Delhi</p>
            <p className="mt-2"><strong>Qualification:</strong> MD, Obstetrics and Gynecology F.MAS,FRCOG(UK)</p>
            <p className="mt-2"><strong>Ratings:</strong> ⭐⭐⭐⭐⭐ (4.8/5)</p>
            <button
        onClick={openAppointmentPopup}
        className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
      >
        Book Appointment
      </button>
          </div>
        </div>
         {/* Divider */}
    <hr className="w-full border-gray-300" />

        {/* Doctor 2 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg p-6" data-aos="fade-left"> {/* Reduced padding from p-6 to p-1*/}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9T2cycm-LxvHkF1dyxB5kyF-3GOyxMa-1sQ&s" alt="Dr. Parul Katiyar" className="w-50 h-50 rounded-full md:mr-6 mb-4 md:mb-0 " />
          <div className="text-left">
            <h3 className="text-5xl font-semibold text-indigo-900">Dr. Parul Katiyar</h3>
            <p className="mt-2"><strong>Clinic Address:</strong> ART Fertility Clinic, E-14 Defence Colony New Delhi</p>
            <p className="mt-2"><strong>Qualification:</strong> MD,Obsecrics and Gynecology JN Medical College Aligarh</p>
            <p className="mt-2"><strong>Ratings:</strong> ⭐⭐⭐⭐ (4.5/5)</p>
            <button
        onClick={openAppointmentPopup}
        className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
      >
        Book Appointment
      </button>

          </div>
        </div>
         {/* Divider */}
    <hr className="w-full border-gray-300" />

        {/* Doctor 3 */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-6" data-aos="fade-right">
          <img src="https://www.drvaishalisharma.com/wp-content/uploads/2023/08/vaishali-img.jpg" alt="Dr. Vaishali Sharma" className="w-48 h-48 rounded-full md:mr-6 mb-4 md:mb-0" />
          <div className="text-left">
            <h3 className="text-5xl font-semibold text-indigo-900">Dr. Vaishali Sharma</h3>
            <p className="mt-2"><strong>Clinic Address:</strong> S-345,Panchsheel Park New Delhi</p>
            <p className="mt-2"><strong>Qualification:</strong> MD, Obstetrics and Gynecology Aiims Delhi</p>
            <p className="mt-2"><strong>Ratings:</strong> ⭐⭐⭐⭐⭐ (4.9/5)</p>
            <button
        onClick={openAppointmentPopup}
        className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
      >
        Book Appointment
      </button>
          </div>
        </div>
      </div>
    </section>

  {/* Section 3 */}
  <section className="h-screen bg-center bg-cover flex items-start justify-start text-center ">
  
<video
        autoPlay
        muted
        loop
        className="absolute inset-0 h-full w-full object-cover opacity-50 z-0"
      >
        <source src="your-video-url.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Section */}
      <div className="mt-22  text-gray-800 flex-col z-10">
        <h2 className="text-7xl font-bold md:text-5xl">Podcasts and Content</h2>
      </div>

      {/* Black Strip with Videos */}
      
          {/* Video Thumbnails with Hover Effects */}
         
           
      
      
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