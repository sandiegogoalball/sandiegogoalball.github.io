const GetInvolved = () => {
  return (
    <section id="get-involved" className="bg-primary text-white">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl mb-6 text-white">Join the Community</h2>
        <p className="text-xl max-w-3xl mx-auto mb-10 text-white/90">
          Whether you want to play, volunteer, or support us through donations, there are many ways to get involved with San Diego Goalball.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
            <h3 className="text-xl text-secondary mb-4">Athletes</h3>
            <p className="mb-6">No experience is necessary! We welcome all visually impaired individuals regardless of skill level.</p>
            <a href="#contact" className="btn btn-secondary w-full">Start Playing</a>
          </div>

          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
            <h3 className="text-xl text-secondary mb-4">Volunteers</h3>
            <p className="mb-6">We need sighted volunteers to help with officiating, coaching assistance, and event logistics.</p>
            <a href="#contact" className="btn btn-secondary w-full">Sign Up to Help</a>
          </div>

          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
            <h3 className="text-xl text-secondary mb-4">Support</h3>
            <p className="mb-6">Help us keep the sport accessible by donating funds for equipment and venue rentals.</p>
            <button className="btn btn-secondary w-full">Make a Donation</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
