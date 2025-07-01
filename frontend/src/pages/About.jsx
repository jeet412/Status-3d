import React from 'react';

const About = () => {
  return (
    <div className="text-gray-800 font-sans text-base">
      {/* Hero Section with Video Background */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/landing.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4 bg-black bg-opacity-40">
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
            We believe<br />
            we can all<br />
            make a difference.
          </h1>
        </div>
      </div>

      {/* Intro Text */}
      <div className="max-w-2xl mx-auto text-center px-6 py-8 leading-7 text-[16px] md:text-lg">
        <p>
          At CozyCloth, we want the right choice to be as easy as putting on a great T-shirt.
          That’s why we partner with the best, ethical factories around the world. Source only
          the finest materials. And share those stories with you—down to the true cost of every
          product we make. It’s a new way of doing things. We call it Radical Transparency.
        </p>
      </div>

      {/* Section 1 - Image + Text */}
      <div className="grid md:grid-cols-2">
        <img src="/assets/featured/img.jpg" alt="Ethical Factory" className="w-full h-full object-cover" />
        <div className="bg-[#C2B280] px-6 py-10 md:py-12 flex flex-col justify-center">
          <h3 className="text-[10px] uppercase tracking-wider font-semibold text-gray-600">Our Factories</h3>
          <h2 className="text-xl font-medium mt-2 mb-4">Our ethical approach.</h2>
          <p className="text-sm leading-6">
            We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.
          </p>
        </div>
      </div>

      {/* Full-Width Image 1 */}
      <div className="w-full h-[250px] md:h-[360px]">
  <img
    src="/assets/favourites/shirt.webp"
    alt="Banner 1"
    className="w-full h-full object-cover"
  />
</div>


      {/* Section 2 - Text + Image */}
      <div className="grid md:grid-cols-2">
        <div className="bg-[#e6e0dc] px-6 py-10 md:py-12 flex flex-col justify-center order-2 md:order-1">
          <h3 className="text-[10px] uppercase tracking-wider font-semibold text-gray-600">Our Quality</h3>
          <h2 className="text-xl font-medium mt-2 mb-4">Designed to last.</h2>
          <p className="text-sm leading-6">
            At CozyCloth, we're not big on trends. We want you to wear our pieces for years, even decades, to come. That’s why we source the finest materials and factories for our timeless products—like our GOTS-certified organic sweatsuits, Italian shoes, and Peruvian Pima tees.
          </p>
        </div>
        <img src="/assets/featured/img.jpg" alt="Designed to Last" className="w-full h-full object-cover order-1 md:order-2" />
      </div>

      {/* Full-Width Image 2 */}
      <div className="w-full">
        <img
          src="/assets/favourites/shirt.webp"
          alt="Banner 2"
          className="w-full h-[250px] md:h-[360px] object-cover"
        />
      </div>

      {/* Final Grid Section (Bar Comparison) */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-sm uppercase tracking-wider font-semibold text-gray-600 mb-2">Our Prices</h3>
          <h2 className="text-2xl font-semibold mb-8">Radically Transparent.</h2>
          <p className="text-sm leading-6 mb-10">
            We believe our customers have a right to know how much their clothes cost to make.
            We reveal the true costs behind all of our products—from materials to labor to transportation—then offer them to you, minus the traditional retail markup.
          </p>

          <div className="flex justify-center gap-16 items-end">
            {/* CozyCloth Tee - Shorter bar */}
            <div className="text-sm text-center">
              <div className="h-28 w-10 bg-[#a67c52] mx-auto"></div>
              <p className="mt-4">CozyCloth Tee</p>
            </div>

            {/* Traditional Retail - Taller bar */}
            <div className="text-sm text-center">
              <div className="h-40 w-10 bg-[#888] mx-auto"></div>
              <p className="mt-4">Traditional Retail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
