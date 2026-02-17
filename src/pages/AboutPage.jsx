import About from '../components/About';
import PageBanner from '../components/PageBanner';

const AboutPage = () => {
  return (
    <div>
      <PageBanner
        title="About San Diego Goalball"
        description="Learn about our mission, our team, and the sport of goalball."
      />
      <About hideTitle={true} />

      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl mb-8">How Goalball is Played</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl text-primary mb-4 font-bold">The Basics</h3>
              <p className="text-lg mb-4 text-nearBlack">
                Goalball is played by two teams of three players on a court with goals at either end. The object of the game is to throw a ball past the opponents and into their net.
              </p>
              <p className="text-lg mb-4 text-nearBlack">
                All players wear blackout eyeshades to ensure total blindness, as athletes have varying degrees of visual impairment. This creates a level playing field.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-nearBlack">
                <li>Played on a court 18m long by 9m wide.</li>
                <li>The ball contains bells to help players track it by sound.</li>
                <li>The game consists of two 12-minute halves.</li>
                <li>The crowd must remain completely silent during play.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl text-primary mb-4 font-bold">Equipment</h3>
              <p className="text-lg mb-4 text-nearBlack">
                Athletes use specialized equipment to stay safe and competitive:
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-secondary">
                  <h4 className="font-bold text-nearBlack">Goalball</h4>
                  <p className="text-nearBlack">A 1.25kg ball with bells inside and eight holes to allow the sound to be heard.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-secondary">
                  <h4 className="font-bold text-nearBlack">Eyeshades</h4>
                  <p className="text-nearBlack">Opaque goggles that ensure no light can be seen by any player.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-secondary">
                  <h4 className="font-bold text-nearBlack">Protective Gear</h4>
                  <p className="text-nearBlack">Players wear hip, knee, and elbow padding to protect themselves when diving to block the ball.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
