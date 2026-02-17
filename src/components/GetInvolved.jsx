const GetInvolved = ({ hideTitle = false }) => {
  return (
    <section id="get-involved" className="bg-primary text-white">
      <div className="section-container text-center">
        {!hideTitle && <h2 className="text-3xl md:text-4xl mb-6 text-white">Join the Community</h2>}
        <p className="text-xl max-w-3xl mx-auto mb-10 text-white/90">
          Whether you want to play, volunteer, or support us through donations, there are many ways to get involved with San Diego Goalball.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 flex flex-col justify-between">
            <h3 className="text-xl text-secondary mb-4">Become an athlete</h3>
            <p className="mb-6 text-sm">No experience necessary — we teach you everything from the basics to advanced play.</p>
            <a href="#contact" className="btn btn-secondary py-2 text-sm">Register Interest</a>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 flex flex-col justify-between">
            <h3 className="text-xl text-secondary mb-4">Volunteer</h3>
            <p className="mb-6 text-sm">Support our athletes at practices or events through officiating, scoring, or guiding.</p>
            <a href="#contact" className="btn btn-secondary py-2 text-sm">Sign Up</a>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 flex flex-col justify-between">
            <h3 className="text-xl text-secondary mb-4">Partner as a sponsor</h3>
            <p className="mb-6 text-sm">Help us grow the sport by providing equipment, venue access, or financial support.</p>
            <a href="#contact" className="btn btn-secondary py-2 text-sm">Learn More</a>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 flex flex-col justify-between">
            <h3 className="text-xl text-secondary mb-4">Spread Awareness</h3>
            <p className="mb-6 text-sm">Help us reach more potential athletes and supporters in the San Diego community.</p>
            <a href="#contact" className="btn btn-secondary py-2 text-sm">Get Involved</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
