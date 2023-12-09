import FooterSectionWhite from "@/components/footer-section-white"
import HeaderSection from "@/components/header-section"
import SubmitSection from "@/components/submit-section";

export default function Page() {
    return (
        <>
            <HeaderSection />
            <div className="min-h-viewport-minus-sections">
                <SubmitSection />
            </div>
            <FooterSectionWhite />
        </>
    )
  }