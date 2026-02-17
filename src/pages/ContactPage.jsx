import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="py-12">
      <Contact />
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-2 text-nearBlack">Email Us</h3>
              <p className="text-primary font-medium">info@sandiegogoalball.org</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-nearBlack">Call Us</h3>
              <p className="text-primary font-medium">(619) 555-0123</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-nearBlack">Follow Us</h3>
              <p className="text-primary font-medium">@SDGoalball</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
