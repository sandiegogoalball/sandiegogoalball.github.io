import heroImage from '../assets/images/2e92691d-373c-4dd1-b111-23596e420300.jpeg';

const Hero = () => {
  return (
    <section id="home" className="relative bg-primary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      </div>

      <div className="relative z-10 section-container flex flex-col justify-center min-h-[600px]">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Empowering Athletes Through Goalball
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Building confidence, community, and competitive excellence for athletes who are blind or visually impaired in San Diego.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#get-involved" className="btn btn-secondary text-lg px-8 py-4">
              Join a Practice
            </a>
            <a href="#about" className="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Wave/Sports element (Optional) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white clip-path-wave" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
    </section>
  );
};

export default Hero;
