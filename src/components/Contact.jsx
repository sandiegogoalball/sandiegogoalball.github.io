const Contact = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl mb-12 text-center">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-primary text-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl text-white mb-6">Contact Information</h3>
            <p className="text-white/90 mb-8 text-lg">
              Have questions about goalball or want to join a practice? Reach out to us through any of the following channels.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-2xl" aria-hidden="true">📧</span>
                <div>
                  <p className="font-bold">Email</p>
                  <a href="mailto:info@sandiegogoalball.org" className="text-accent hover:underline">info@sandiegogoalball.org</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl" aria-hidden="true">📞</span>
                <div>
                  <p className="font-bold">Phone</p>
                  <a href="tel:+16195550123" className="text-accent hover:underline">(619) 555-0123</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl" aria-hidden="true">📍</span>
                <div>
                  <p className="font-bold">Primary Location</p>
                  <p>Mission Valley YMCA<br />San Diego, CA 92110</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              {/* Social placeholders */}
              <span className="sr-only">Follow us on social media</span>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer" aria-hidden="true">f</div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer" aria-hidden="true">i</div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer" aria-hidden="true">t</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
            <h3 className="text-2xl mb-6">Send us a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-nearBlack mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-nearBlack mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-nearBlack mb-1">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none bg-white"
                >
                  <option>Joining the team</option>
                  <option>Volunteering</option>
                  <option>Donations</option>
                  <option>General inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-nearBlack mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full text-lg mt-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
