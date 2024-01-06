import { JSX, SVGProps } from 'react'

export default function FooterSection() {
  return (
    <footer className="py-24 pt-[8rem] overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-xl text-gray-700">
          © 2023 LancerCreds. All rights reserved
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-gray-700">Contact</p>
          <p className="text-xl text-gray-700">+1-123-456-7890.</p>
          <p className="text-xl text-gray-700">support@FreedFi.com</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <EllipseBottomLeft />
      </div>
      <div className="absolute bottom-[-45%] right-0">
        <EllipsebottomRight />
      </div>
    </footer>
  )
}

function EllipseBottomLeft(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width="599"
      height="413"
      viewBox="0 0 599 413"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_33_1399)">
        <circle
          cx="581.723"
          cy="581.723"
          r="581.723"
          transform="matrix(1 0 -0.000872668 1 -671.984 109)"
          fill="url(#paint0_radial_33_1399)"
          fill-opacity="0.58"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_33_1399"
          x="-780.545"
          y="0.94722"
          width="1379.55"
          height="1379.55"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="54.0264"
            result="effect1_foregroundBlur_33_1399"
          />
        </filter>
        <radialGradient
          id="paint0_radial_33_1399"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(581.723 581.723) rotate(90) scale(581.723)"
        >
          <stop stop-color="#AF6DEA" />
          <stop offset="1" stop-color="#AF6DEA" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

function EllipsebottomRight(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width="674"
      height="587"
      viewBox="0 0 674 587"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_33_1398)">
        <circle
          cx="668.723"
          cy="668.723"
          r="668.723"
          transform="matrix(1 0 -0.000872668 1 109.167 109)"
          fill="url(#paint0_radial_33_1398)"
          fill-opacity="0.58"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_33_1398"
          x="0.53035"
          y="0.94722"
          width="1553.55"
          height="1553.55"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="54.0264"
            result="effect1_foregroundBlur_33_1398"
          />
        </filter>
        <radialGradient
          id="paint0_radial_33_1398"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(668.723 668.723) rotate(90) scale(668.723)"
        >
          <stop stop-color="#AF6DEA" />
          <stop offset="1" stop-color="#AF6DEA" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
