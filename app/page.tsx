import Navigation from "../navigation"
import HeroSection from "../hero-section"
import OpportunitiesSection from "../opportunities-section"
import Footer from "../footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OpportunitiesSection />
      <Footer />
    </div>
  )
}
