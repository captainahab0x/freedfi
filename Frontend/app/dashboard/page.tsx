'use client';
import DashboardSection from '@/components/dashboard-section';
import FooterSectionWhite from '@/components/footer-section-white';
import HeaderSection from '@/components/header-section';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useWindowSize from 'react-use/lib/useWindowSize';

import Confetti from 'react-confetti';

export default function Page() {
  const { isConfetti } = useSelector((state) => state.ui);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (isConfetti) {
      setShowConfetti(true);

      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isConfetti]);

  return (
    <div className="">
      <HeaderSection />
      <div className="min-h-viewport-minus-sections">
        {showConfetti && <Confetti width={width - 50} height={height} />}
        <DashboardSection />
      </div>
      <FooterSectionWhite />
    </div>
  );
}
