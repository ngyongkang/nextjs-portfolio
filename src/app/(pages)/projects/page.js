import ProjectSection from '@/app/components/ProjectSection';
import FooterSection from '../../components/FooterSection';
import Navbar from '../../components/Navbar';


export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ProjectSection />
      </div>
      <FooterSection />
    </main>
  )
};
