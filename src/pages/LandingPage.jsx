import Navbar from "../components/ui/Navbar"
import HeroSection from "../components/sections/Hero"
import SolutionsSection from "../components/sections/SolutionsSection"
import CB7Section from "../components/sections/CB7Section"
import MovingBankingStrip from "../components/ui/MovingStrip"
import N7Section from "../components/sections/N7Section"
import InsightsSection from "../components/sections/InsightsSection"
import CaseStudiesSection from "../components/sections/CaseStudySection"
import FinalCTASection from "../components/sections/FinalCTASection"
import Footer from "../components/ui/Footer"

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <SolutionsSection />
            <CB7Section />
            <MovingBankingStrip />
            <N7Section />
            <InsightsSection />
            <CaseStudiesSection />
            <FinalCTASection />
            <Footer />
        </>
    )
}

export default LandingPage