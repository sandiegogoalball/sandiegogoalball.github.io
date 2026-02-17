const Contact = ({ hideTitle = false }) => {
  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        {!hideTitle && <h2 className="text-3xl md:text-4xl mb-12 text-center">Get In Touch</h2>}

        <div className="max-w-4xl mx-auto bg-primary text-white p-10 md:p-16 rounded-3xl shadow-xl text-center">
          <div className="mb-8" aria-hidden="true">
            <span className="text-6xl">📬</span>
          </div>
          <h3 className="text-3xl md:text-4xl text-white mb-6">Reach Out to Us</h3>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Have questions or want to join? Reach out and we’ll help you get started.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
              <h4 className="text-secondary font-bold mb-2 uppercase tracking-wide text-sm">Email Us</h4>
              <a href="mailto:info@sdgoalball.org" className="text-xl md:text-2xl hover:text-secondary transition-colors">info@sdgoalball.org</a>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
              <h4 className="text-secondary font-bold mb-2 uppercase tracking-wide text-sm">Follow Us</h4>
              <a href="https://www.instagram.com/sdgoalball?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl hover:text-secondary transition-colors">@sdgoalball</a>
            </div>
          </div>

          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-8 py-6 rounded-2xl">
            <p className="text-lg font-medium italic">
              Located in San Diego, California
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
