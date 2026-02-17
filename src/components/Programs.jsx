const Programs = () => {
  const programs = [
    {
      title: "Recreational League",
      description: "Perfect for beginners and those looking for a fun way to stay active. No experience necessary.",
      icon: "🏐"
    },
    {
      title: "Competitive Team",
      description: "For athletes who want to push their limits and compete in regional and national tournaments.",
      icon: "🏆"
    },
    {
      title: "Youth Goalball",
      description: "Introducing the sport to the next generation of athletes in a supportive, age-appropriate setting.",
      icon: "👦"
    }
  ];

  return (
    <section id="programs" className="bg-gray-50">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl mb-12 text-center">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
