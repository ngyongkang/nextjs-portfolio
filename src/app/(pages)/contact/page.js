import ContactSection from '@/app/components/ContactSection';
import FooterSection from '../../components/FooterSection';
import Navbar from '../../components/Navbar';


export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ContactSection />
      </div>
      <FooterSection />
    </main>
  )
};
