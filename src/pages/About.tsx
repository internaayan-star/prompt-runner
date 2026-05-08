import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RCIIFAboutIntro from '@/components/about/RCIIFAboutIntro';
import MeetOurTeam from "@/components/about/MeetOurTeam";
import { RCIIFWhyUs } from "@/components/ui/rciif-why-us";
import { RCIIFStoryTimeline } from "@/components/ui/rciif-story-timeline";
import { RCIIFAssociates } from "@/components/ui/rciif-associates";
import { RCIIFBoard } from "@/components/ui/rciif-board";
import AboutHeroAnimated from '@/components/about/AboutHeroAnimated';
import IncubateesOrbit from '@/components/IncubateesOrbit';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutHeroAnimated />
      <div id="about-intro">
        <RCIIFAboutIntro />
      </div>
      <RCIIFWhyUs />
      <MeetOurTeam />
      <div id="story-timeline">
        <RCIIFStoryTimeline />
      </div>

      <div className="py-12">
        <IncubateesOrbit />
      </div>

      <RCIIFAssociates />
      <RCIIFBoard />
      <Footer />
    </div>
  );
}
