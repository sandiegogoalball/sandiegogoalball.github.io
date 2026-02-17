import Contact from '../components/Contact';
import PageBanner from '../components/PageBanner';

const ContactPage = () => {
  return (
    <div>
      <PageBanner
        title="Contact Us"
        description="We're currently preparing our official contact channels. Stay tuned for updates!"
      />
      <Contact hideTitle={true} />
    </div>
  );
};

export default ContactPage;
