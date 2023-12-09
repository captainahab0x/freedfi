
"use client"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useRouter } from 'next/navigation'

export default function SubmitSection() {

  const router = useRouter();

  const goDashboardAction = () => {
    console.log("Request Loan Action");
    router.push("/dashboard");
  };


  return (
    <div className="text-black bg-white py-32 px-8">

      <h1 className="text-3xl font-bold text-center mb-6">Congratulations! 🎉</h1>
      
      <div className="flex justify-center space-x-4">
        <div className="rounded-lg p-6 w-96">

          <div>
            <p className="text-lg mb-2 text-center">Your skill match score is</p>
            <div className="text-5xl font-bold text-purple-500 mb-4 text-center md:text-center">75%</div>
            <div className="relative pt-1">

            <Slider className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                <div
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                  style={{
                    width: "75%",
                  }}
                >
                  <span>Current Value: 15000</span>
                </div>
              </Slider>
              <div className="flex justify-between text-xs px-2">
                <span>0</span>
                <span>5000</span>
                <span>10000</span>
                <span>15000</span>
                <span>20000</span>
              </div>

            </div>
            <p className="text-sm italic mt-8">Your limit is determined by work, contract and escrows</p>

          </div>          

        </div>
        <div className="rounded-lg p-6 w-96 justify-center items-center">
          <div className="px-8">
            <p className="mt-8 mb-4 font-semibold text-center md:text-left">Would you like to submit?</p>
            <div className="flex justify-center md:justify-start">
              <Button 
              className="bg-[#CEFB7B] hover:bg-[#DAFB9D] text-black rounded-md font-bold py-2 px-4 mr-2"
              onClick={ () => goDashboardAction()}>
                Yes
              </Button>
              <Button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                No, I want more
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center mt-12">
        <Button className="bg-[#CEFB7B] hover:bg-[#DAFB9D] text-black rounded-md transition-colors duration-200">Get Started</Button>
      </div> */}
    </div>
  )
}

