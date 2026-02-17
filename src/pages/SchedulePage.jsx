import { Link } from 'react-router-dom';
import Schedule from '../components/Schedule';
import PageBanner from '../components/PageBanner';

const SchedulePage = () => {
  return (
    <div>
      <PageBanner
        title="Practice Schedule"
        description="Join us for our weekly practices. We play at various accessible gymnasiums throughout the San Diego area."
      />
      <Schedule hideTitle={true} />
      <section className="bg-primary text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-white">How to Attend</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-10">
            <div className="bg-white/10 p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl text-secondary mb-4 font-bold">1. Register Interest</h3>
              <p className="text-white/80 leading-relaxed">Due to gym availability and security, we share our exact practice locations with registered athletes and volunteers only. Please reach out via our contact page to get started.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl text-secondary mb-4 font-bold">2. Get Location Details</h3>
              <p className="text-white/80 leading-relaxed">Once you're on our list, you'll receive a weekly update with the specific gym address and any entry instructions or parking details.</p>
            </div>
          </div>
          <div className="mt-16 bg-white/5 p-8 rounded-2xl border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">First time attending?</h3>
            <p className="text-lg text-white/80 mb-6">We'd love to have you! New players are always welcome at any practice. We'll make sure you have the equipment and guidance you need.</p>
            <Link to="/contact" className="btn btn-secondary text-lg px-8 py-4">
              Contact Us for Location
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
