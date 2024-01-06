'use client'

import FooterSection from '@/components/footer-section'
import HeaderSection from '@/components/header-section'
import AddContractSection from '@/components/add-contract-section'

export default function Page() {
  return (
    <>
      <HeaderSection />
      <div className="min-h-viewport-minus-sections">
        <AddContractSection />
      </div>
      <FooterSection />
    </>
  )
}
