import Image from 'next/image';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/hero-section';
import HowWorksSection from '@/components/how-works-section';
import App from 'next/app';
import ApplyForLoanSection from '@/components/apply-for-loan-section';
import DisclaimerSection from '@/components/disclaimer-section';
import FooterSection from '@/components/footer-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowWorksSection />
      <ApplyForLoanSection />
      <DisclaimerSection />
      <FooterSection />
    </>
  );
}
