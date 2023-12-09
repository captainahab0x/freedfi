'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function ApplyForLoanSection() {
  const router = useRouter();

  const sectionAction = () => {
    router.push('/auth');
  };

  return (
    <div className="text-black bg-white pb-16 px-8 translate-y-[-10%]">
      <h2 className="text-3xl font-bold text-center mb-12">
        Apply for a loan <br />
        in 2 simple steps
      </h2>
      <div className="flex justify-center space-x-12">
        <div className="bg-[#0e0e0e] text-white rounded-lg p-7 w-96 flex gap-4">
          <h3 className="text-[#AF6DEA] text-7xl font-bold mb-4 leading-[0.75]">
            1
          </h3>
          <div>
            <h4 className="text-xl font-semibold mb-2">
              Your Skill Credentials
            </h4>
            <p className="text-sm text-[#a6a6a6]">
              We will determine your Skill Capital based on the quantity of
              verified skill markers in your vault.
            </p>
          </div>
        </div>
        <div className="bg-[#0e0e0e] text-white rounded-lg p-7 w-96 flex gap-4">
          <h3 className="text-[#AF6DEA] text-7xl font-bold mb-4 leading-[0.75]">
            2
          </h3>
          <div>
            <h4 className="text-xl font-semibold mb-2">Your Work Contracts</h4>
            <p className="text-sm text-[#a6a6a6]">
              We will scan your open work contracts and determine your limit
              based on escrow amount.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Button
          className="text-[#0e0e0e] rounded-md  z-10 bg-[#C9F270]  hover:bg-[#DAF996] hover:scale-[103%]  hover:-translate-y-0.5  hover:shadow-button px-10 ease-in-out-expo transform transition-transform duration-150 cursor-pointer"
          onClick={() => sectionAction()}>
          Get Started
        </Button>
      </div>
    </div>
  );
}
