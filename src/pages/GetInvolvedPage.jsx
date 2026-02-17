import GetInvolved from '../components/GetInvolved';

const GetInvolvedPage = () => {
  const faqs = [
    {
      question: "Do I need to be totally blind to play?",
      answer: "No. Goalball is open to anyone with a visual impairment. In competition, all players wear blackout eyeshades to ensure equality."
    },
    {
      question: "Is there an age limit?",
      answer: "We have programs for all ages! Our youth clinic is specifically for children and teens, while our recreational league is popular with adults of all ages."
    },
    {
      question: "How can I support the team if I don't play?",
      answer: "We are always looking for sighted volunteers to help with officiating, scoring, and transportation. You can also make a tax-deductible donation."
    }
  ];

  return (
    <div className="py-12">
      <GetInvolved />
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-nearBlack">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-3">{faq.question}</h3>
                <p className="text-nearBlack leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;
