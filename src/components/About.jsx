import aboutImage from '../assets/images/27d1258c-3b56-4193-9f7c-887045690341.jpeg';

const About = ({ hideTitle = false }) => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {!hideTitle && <h2 className="text-3xl md:text-4xl mb-6">About San Diego Goalball</h2>}
            <div className="space-y-4 text-lg text-nearBlack leading-relaxed">
              <p>
                San Diego Goalball is a community-driven adaptive sports program dedicated to providing opportunities
                for individuals who are blind or visually impaired to participate in the exciting Paralympic sport of goalball.
                Our program welcomes athletes of all skill levels, from beginners learning the fundamentals to experienced
                competitors training for regional and national events.
              </p>
              <p>
                Through structured practices, competitive play, and a supportive environment, we aim to promote independence,
                teamwork, physical fitness, and confidence both on and off the court.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-xl transform rotate-3 z-0"></div>
            <img
              src={aboutImage}
              alt="Athletes on a goalball court wearing eyeshades and preparing for a play."
              className="relative z-10 rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl mb-6 text-center">What is Goalball?</h2>
          <p className="text-lg text-nearBlack leading-relaxed text-center max-w-3xl mx-auto mb-12">
            Goalball is a fast-paced Paralympic team sport designed specifically for athletes who are blind or visually impaired.
            Players compete in teams of three, using their bodies to block a ball embedded with bells from entering their goal.
            Because the sport relies heavily on hearing, all athletes wear eyeshades to ensure an equal playing field.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-primary">Inclusive</h3>
              <p className="text-nearBlack">Open to athletes with visual impairments of all levels.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-primary">Team-Based</h3>
              <p className="text-nearBlack">Build communication, trust, and teamwork skills.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-primary">Paralympic Sport</h3>
              <p className="text-nearBlack">Recognized internationally and played at elite levels.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-primary">Beginner Friendly</h3>
              <p className="text-nearBlack">No experience required — we teach you everything.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
