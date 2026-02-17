import Schedule from '../components/Schedule';

const SchedulePage = () => {
  return (
    <div className="py-12">
      <Schedule />
      <section className="bg-primary text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-white">Location Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-10">
            <div className="bg-white/10 p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl text-secondary mb-4 font-bold">Mission Valley YMCA</h3>
              <p className="mb-2">5505 Friars Rd, San Diego, CA 92110</p>
              <p className="text-white/80">Practices are held in the main gymnasium. Sighted guides are available at the front desk to escort you to the court if needed.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl text-secondary mb-4 font-bold">Balboa Park Activity Center</h3>
              <p className="mb-2">2145 Park Blvd, San Diego, CA 92101</p>
              <p className="text-white/80">Located near the tennis courts. Accessible transit stops are located within one block of the entrance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
