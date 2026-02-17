const Schedule = ({ hideTitle = false }) => {
  const events = [
    { date: "Tuesdays", time: "6:00 PM - 8:00 PM", activity: "Community Practice", location: "San Diego Gym" },
    { date: "Saturdays", time: "10:00 AM - 12:30 PM", activity: "Main Practice & Clinics", location: "San Diego Gym" },
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
        <p className="mt-8 text-center text-nearBlack font-medium">
          <strong>Location:</strong> San Diego area gyms (exact location shared upon registration)
        </p>
        <p className="mt-2 text-center text-nearBlack italic">
          * Times may vary during holidays or special events. Please check our Instagram for the latest updates.
        </p>
      </div>
    </section>
  );
};

export default Schedule;
