import Navigation from "../navigation"
import HeroSection from "../hero-section"
import OpportunitiesSection from "../opportunities-section"
import ProgramsSection from "../programs-section"
import Footer from "../footer"
import WhatsAppButton from "../whatsapp-button"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OpportunitiesSection />
      <ProgramsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
