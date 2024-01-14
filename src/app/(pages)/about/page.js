import AboutSection from '../../components/AboutSection';
import FooterSection from '../../components/FooterSection';
import Navbar from '../../components/Navbar';


export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <AboutSection />
      </div>
      <FooterSection />
    </main>
  )
};
