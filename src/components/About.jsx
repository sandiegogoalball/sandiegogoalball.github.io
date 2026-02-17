import aboutImage from '../assets/images/27d1258c-3b56-4193-9f7c-887045690341.jpeg';

const About = ({ hideTitle = false }) => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {!hideTitle && <h2 className="text-3xl md:text-4xl mb-6">About San Diego Goalball</h2>}
            <div className="space-y-4 text-lg text-nearBlack leading-relaxed">
              <p>
                Goalball is an exciting, fast-paced team sport designed specifically for athletes with visual impairments. Played on a gym floor, two teams of three players try to throw a ball that has bells inside it into the opponents' goal.
              </p>
              <p>
                <strong>Our Mission:</strong> To provide a supportive and competitive environment where athletes of all visual abilities can thrive, build community, and achieve their athletic potential.
              </p>
              <p>
                At San Diego Goalball, we believe in the power of inclusive sports to transform lives. Whether you're a seasoned paralympian or trying the sport for the first time, our community is here to welcome you.
              </p>
              <p>
                We prioritize accessibility in everything we do, ensuring that our training, communications, and events are fully inclusive for the blind and visually impaired community.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-xl transform rotate-3 z-0"></div>
            <img
              src={aboutImage}
              alt="Athletes on a goalball court wearing eyeshades and preparing for a play."
              className="relative z-10 rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
