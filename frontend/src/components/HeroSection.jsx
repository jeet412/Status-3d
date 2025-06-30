const HeroSection = () => {
    return (
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-contain"
          autoPlay
          muted  
          playsInline
          loop
        >
          <source src="/assets/landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
  
        {/* Text Content */}
        <div className="relative z-20 h-full flex items-center px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl text-left">
            <h1 className="text-white text-4xl md:text-6xl  mb-4">
              Your Cozy Era
            </h1>
            <p className="text-gray-200 text-lg mb-6">
              Soft peak comfort style with new winter essentials.
            </p>
            <a
              href="/shop"
              className="inline-block bg-white text-black px-6 py-3 text-sm font-semibold rounded hover:bg-gray-100 transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  