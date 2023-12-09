import FooterSectionWhite from "@/components/footer-section-white"
import HeaderSection from "@/components/header-section"
import AddContractSection from "@/components/add-contract-section";

export default function Page() {
    return (
        <>
            <HeaderSection />
            <div className="min-h-viewport-minus-sections">
                <AddContractSection />
            </div>
            <FooterSectionWhite />
        </>
    )
  }