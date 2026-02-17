import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Schedule from './components/Schedule';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Programs />
        <Schedule />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
