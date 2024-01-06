'use client'
import FooterSection from '@/components/footer-section'
import HeaderSection from '@/components/header-section'
import PurposeSection from '@/components/purpose-section'

export default function Page() {
  return (
    <>
      <div className="fixed top-0 w-full">
        <HeaderSection />
      </div>
      <div className="min-h-viewport-minus-sections">
        <PurposeSection />
      </div>
      <FooterSection />
    </>
  )
}
