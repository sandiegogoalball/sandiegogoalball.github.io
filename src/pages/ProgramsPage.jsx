import { Link } from 'react-router-dom';
import Programs from '../components/Programs';
import PageBanner from '../components/PageBanner';

const ProgramsPage = () => {
  return (
    <div>
      <PageBanner
        title="Our Programs"
        description="Discover the different ways you can get involved with goalball, from recreational play to competitive training."
      />
      <Programs hideTitle={true} />
      <section className="bg-white py-16">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Equipment Provided</h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-10 text-nearBlack">
            San Diego Goalball provides all necessary equipment for our recreational and youth programs. You just need to bring athletic wear and a water bottle!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-full text-primary text-2xl" aria-hidden="true">✔</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-nearBlack">Team Uniforms</h3>
                <p className="text-nearBlack">Loaner jerseys are available for all practices and local scrimmages.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-full text-primary text-2xl" aria-hidden="true">✔</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-nearBlack">Eyeshades</h3>
                <p className="text-nearBlack">We provide sanctioned goalball eyeshades to ensure fairness and safety.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-full text-primary text-2xl" aria-hidden="true">✔</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-nearBlack">Padding</h3>
                <p className="text-nearBlack">Elbow and knee pads are provided for new players to try out the sport comfortably.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-full text-primary text-2xl" aria-hidden="true">✔</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-nearBlack">The Ball</h3>
                <p className="text-nearBlack">We use official IBSA-approved goalballs for all our programs.</p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to find the right program for you?</h3>
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
              Get Notified of Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
