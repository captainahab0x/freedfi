'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function DisclaimerSection() {
  const router = useRouter();

  const disclaimerAction = () => {
    console.log('Disclaimer Action');
    router.push('/purpose');
  };

  return (
    <div className=" pt-16 translate-y-[-10%]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold mb-8">Disclaimer</h2>
        <p className="mb-8 text-lg">
          FreedFi is not a financial institution and does not provide banking
          services. LancerCreds is a platform that connects freelancers with
          potential lenders based on trust credentials and skill capital
          assessments. Loan terms and conditions apply.
        </p>
        <div className="flex justify-center mt-12">
          <Button
            className="text-[#0e0e0e] rounded-md  z-10 bg-[#C9F270] text-primary-text hover:bg-[#DAF996] hover:scale-[103%]  hover:-translate-y-0.5  hover:shadow-button px-10 ease-in-out-expo transform transition-transform duration-150 cursor-pointer"
            onClick={() => disclaimerAction()}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
