'use client';
import { Poller_One } from 'next/font/google';
import { JSX, SVGProps } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const poller_one = Poller_One({
  weight: ['400'],
  subsets: ['latin'],
});

export default function HeroSection() {
  const router = useRouter();

  const heroAction = () => {
    router.push('/onboarding');
  };

  return (
    <div className="bg-white overflow-hidden pt-[180px] pb-[250px] flex flex-col items-center justify-center text-center px-4 relative">
      <div className="absolute top-[-10%] left-0">
        <EllipseTopLeft />
      </div>

      <div
        className="absolute  animate-zoom-in-out"
        style={{ transform: 'translate(-50%, -50%)' }}>
        <Star />
      </div>

      <h1
        className={`text-3xl font-bold mb-4 leading-snug ${poller_one.className}`}>
        FreedFi
      </h1>
      <h1 className="text-6xl font-bold mb-4 leading-snug">
        Super charge <br />
        your Future with <br />
        Talent-backed Loans
      </h1>
      <p className={`mb-12 text-xl leading-snug `}>
        Join FreedFi and put the freedom back in Freelancing. Take control of
        your <br />
        financial future like never before. Trust Credentials and Skill Capital{' '}
        <br />
        are the tools for your success. We´re here to help you wield them
        effectively.{'\n          '}
      </p>
      <Button
        className=" text-[#0e0e0e] rounded-md  z-10 bg-[#C9F270]  hover:bg-[#DAF996] hover:scale-[103%]  hover:-translate-y-0.5  hover:shadow-button px-10 ease-in-out-expo transform transition-transform duration-150 cursor-pointer"
        onClick={() => heroAction()}>
        Get Started
      </Button>
      <div className="absolute bottom-0 translate-y-[50%] right-[-10%]">
        <EllipsebottomRight />
      </div>
    </div>
  );
}

function EllipseTopLeft(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width="480"
      height="515"
      viewBox="0 0 480 515"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_33_1319)">
        <circle
          cx="337.286"
          cy="337.286"
          r="337.286"
          transform="matrix(1 0 -0.000872668 1 -302.664 -268.086)"
          fill="url(#paint0_radial_33_1319)"
          fill-opacity="0.58"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_33_1319"
          x="-411.011"
          y="-376.139"
          width="890.678"
          height="890.678"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="54.0264"
            result="effect1_foregroundBlur_33_1319"
          />
        </filter>
        <radialGradient
          id="paint0_radial_33_1319"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(337.286 337.286) rotate(90) scale(337.286)">
          <stop stop-color="#AF6DEA" />
          <stop offset="1" stop-color="#AF6DEA" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function EllipsebottomRight(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width="637"
      height="982"
      viewBox="0 0 637 982"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_33_1412)">
        <circle
          cx="382.515"
          cy="382.515"
          r="382.515"
          transform="matrix(1 0 -0.000872668 1 109.171 108.771)"
          fill="url(#paint0_radial_33_1412)"
          fill-opacity="0.58"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_33_1412"
          x="0.784378"
          y="0.718704"
          width="981.135"
          height="981.135"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="54.0264"
            result="effect1_foregroundBlur_33_1412"
          />
        </filter>
        <radialGradient
          id="paint0_radial_33_1412"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(382.515 382.515) rotate(90) scale(382.515)">
          <stop stop-color="#AF6DEA" />
          <stop offset="1" stop-color="#AF6DEA" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function Star(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1007"
      height="1061"
      viewBox="0 0 1007 1061"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M845.69 367.734C899.651 291.19 927.838 232.963 925.797 202.249C923.757 171.535 891.606 170.085 834.423 198.127L827.014 207.212C882.856 179.827 914.253 181.243 916.246 211.237C918.238 241.231 890.713 298.093 838.016 372.843L845.69 367.734Z"
        fill="url(#paint0_linear_33_1360)"
      />
      <path
        d="M156.11 572.027C96.2249 644.032 63.4917 699.83 63.0799 730.609C62.6681 761.387 94.6013 765.393 153.836 741.993L161.945 733.527C104.099 756.379 72.9146 752.467 73.3167 722.41C73.7188 692.352 105.685 637.862 164.166 567.546L156.11 572.027Z"
        fill="url(#paint1_linear_33_1360)"
      />
      <path
        d="M155.243 367.735C101.281 291.19 73.0948 232.963 75.1351 202.249C77.1754 171.535 109.326 170.085 166.509 198.128L173.919 207.212C118.076 179.827 86.679 181.243 84.6865 211.237C82.6941 241.231 110.22 298.093 162.916 372.843L155.243 367.735Z"
        fill="url(#paint2_linear_33_1360)"
      />
      <path
        d="M850.89 572.027C910.775 644.032 943.508 699.83 943.92 730.609C944.332 761.387 912.399 765.393 853.164 741.993L845.055 733.527C902.901 756.379 934.085 752.467 933.683 722.41C933.281 692.352 901.315 637.862 842.834 567.546L850.89 572.027Z"
        fill="url(#paint3_linear_33_1360)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_33_1360"
          x1="919.004"
          y1="185.002"
          x2="783.766"
          y2="315.327"
          gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_33_1360"
          x1="68.4785"
          y1="748.342"
          x2="228.775"
          y2="612.098"
          gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_33_1360"
          x1="81.9285"
          y1="185.002"
          x2="217.761"
          y2="321.446"
          gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_33_1360"
          x1="938.522"
          y1="748.342"
          x2="782.542"
          y2="631.067"
          gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
