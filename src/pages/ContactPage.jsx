import Contact from '../components/Contact';
import PageBanner from '../components/PageBanner';

const ContactPage = () => {
  return (
    <div>
      <PageBanner
        title="Contact Us"
        description="Have questions or want to join a practice? We'd love to hear from you."
      />
      <Contact hideTitle={true} />

      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-nearBlack mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-nearBlack mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Your Email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-nearBlack mb-2">Subject</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                  <option>Interested in joining</option>
                  <option>Volunteer inquiry</option>
                  <option>Sponsorship opportunity</option>
                  <option>General question</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-nearBlack mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full btn btn-primary py-4 text-lg">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
