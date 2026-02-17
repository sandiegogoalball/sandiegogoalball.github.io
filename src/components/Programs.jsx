const Programs = ({ hideTitle = false }) => {
  const programs = [
    {
      title: "Youth Development",
      description: "Introductory training for young athletes focused on fundamentals and teamwork.",
      icon: "👦"
    },
    {
      title: "Adult Recreational",
      description: "Weekly community practices for fun, fitness, and building lasting connections.",
      icon: "🏐"
    },
    {
      title: "Competitive Training",
      description: "Advanced sessions for tournament preparation and elite skill development.",
      icon: "🏆"
    },
    {
      title: "Clinics & Outreach",
      description: "School and community demonstrations to raise awareness and invite new players.",
      icon: "📢"
    }
  ];

  return (
    <section id="programs" className="bg-gray-50">
      <div className="section-container">
        {!hideTitle && <h2 className="text-3xl md:text-4xl mb-12 text-center">Our Programs</h2>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div key={program.title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4" aria-hidden="true">{program.icon}</div>
              <h3 className="text-xl mb-4">{program.title}</h3>
              <p className="text-nearBlack leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
