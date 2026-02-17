const Schedule = ({ hideTitle = false }) => {
  const events = [
    { date: "Mondays", time: "6:00 PM - 8:00 PM", activity: "Open Practice", location: "Mission Valley YMCA" },
    { date: "Wednesdays", time: "6:30 PM - 8:30 PM", activity: "Competitive Training", location: "Mission Valley YMCA" },
    { date: "Saturdays", time: "10:00 AM - 12:00 PM", activity: "Youth & Beginner Clinic", location: "Balboa Park Activity Center" },
  ];

  return (
    <section id="schedule" className="bg-white">
      <div className="section-container">
        {!hideTitle && <h2 className="text-3xl md:text-4xl mb-12 text-center">Practice Schedule</h2>}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-primary">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">Day</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">Time</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">Activity</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">Location</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {events.map((event, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-primary">{event.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-nearBlack">{event.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-nearBlack font-bold">{event.activity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-nearBlack">{event.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-center text-nearBlack italic">
          * Schedule is subject to change. Please contact us to confirm before attending your first session.
        </p>
      </div>
    </section>
  );
};

export default Schedule;
