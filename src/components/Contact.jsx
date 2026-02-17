const Contact = ({ hideTitle = false }) => {
  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        {!hideTitle && <h2 className="text-3xl md:text-4xl mb-12 text-center">Get In Touch</h2>}

        <div className="max-w-4xl mx-auto bg-primary text-white p-10 md:p-16 rounded-3xl shadow-xl text-center">
          <div className="mb-8" aria-hidden="true">
            <span className="text-6xl">📬</span>
          </div>
          <h3 className="text-3xl md:text-4xl text-white mb-6">Contact Information Coming Soon!</h3>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            We are currently setting up our official communication channels to better serve the San Diego goalball community.
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-8 py-6 rounded-2xl">
            <p className="text-lg font-medium italic">
              Check back soon for our official email, phone number, and contact form.
            </p>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <span className="sr-only">Follow us on social media for updates</span>
            <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all transform hover:scale-110 focus:ring-2 focus:ring-white outline-none" aria-label="Follow us on Facebook">
              <span aria-hidden="true" className="text-xl font-bold">f</span>
            </a>
            <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all transform hover:scale-110 focus:ring-2 focus:ring-white outline-none" aria-label="Follow us on Instagram">
              <span aria-hidden="true" className="text-xl font-bold">i</span>
            </a>
            <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all transform hover:scale-110 focus:ring-2 focus:ring-white outline-none" aria-label="Follow us on Twitter">
              <span aria-hidden="true" className="text-xl font-bold">t</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
