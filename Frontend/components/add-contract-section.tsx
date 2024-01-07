'use client'
import React, { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Poppins } from 'next/font/google'
import { uiActions } from '@/store/ui-slice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'
import {
  LPcontractAddress,
  convertToWei
} from '@/lib/utils'
import { useAccount, useContractWrite } from 'wagmi'
import LendingPlatform from '../../contracts/out/GetALoan.sol/LendingPlatform.json'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const SeekersProgress = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { address } = useAccount()

  const [loanAmount, setLoanAmount] = useState([0.0002])
  const [showModal, setShowModal] = useState(false)

  const handleSliderChange = (value) => {
    setLoanAmount(value) // Directly use the array value
  }

  const {
    data: borrowData,
    isLoading: borrowLoading,
    writeAsync: borrowWrite,
  } = useContractWrite({
    address: LPcontractAddress,
    abi: LendingPlatform.abi,
    functionName: 'borrowRequest',
    args: [address, convertToWei(loanAmount[0])],
  })

  const borrowRequestHandler = async () => {
    try {
      await borrowWrite()
      if (!borrowLoading) {
        router.push('/dashboard')
        dispatch(uiActions.toggleConfetti(true))
        toast.success('Fund successfully requested!')
        console.log(borrowData)
      }
    } catch (error) {
      console.log('Encountered error: ', error)
    }
  }

  return (
    <div>
      <Toaster />
      <h1 className="text-3xl font-bold text-center mb-2">
        Congratulations!🎉
      </h1>

      <p className={`text-4xl ${poppins.className} text-center mt-6`}>
        Your Skill Match Score
      </p>
      <p
        className={`text-4xl ${poppins.className} bg-[#AF6DEA] text-center  text-white w-fit mx-auto mt-5`}
      >
        100%
      </p>
      <div className="mt-16 max-w-lg mx-auto">
        <Slider
          value={loanAmount} // Pass the array as the value
          onValueChange={handleSliderChange} // Use onValueChange instead of onChange
          max={20000}
          step={0.0002}
        />
      </div>
      <div className="flex mt-8 gap-5 max-w-lg mx-auto justify-between">
        <p className="text-xl font-semibold uppercase">Your Loan Amount</p>
        <p className="px-4 py-2 border border-[#af6dea] rounded">
          $ {loanAmount[0]}
        </p>{' '}
        {/* Access the first element of the array */}
      </div>
      <div className="mt-16 mx-auto w-full flex justify-center">
        <button
          onClick={() => setShowModal(true)}
          className="text-[#0e0e0e] rounded-md  z-10 bg-[#C9F270]  hover:bg-[#DAF996] hover:scale-[103%]  hover:-translate-y-0.5  hover:shadow-button px-10 ease-in-out-expo transform transition-transform duration-150 cursor-pointer py-2"
        >
          Confirm The Request
        </button>
      </div>
      {showModal && (
        <div className="absolute top-0 left-0 max-w-screen max-h-screen w-full h-full bg-geay-200 backdrop-blur-sm flex items-center justify-center">
          <div className="w-[520px] h-[300px] bg-gray-100 border rounded-lg p-10 border-[#AF6DEA]">
            <h1 className="text-2xl text-center">
              Would you like the confirm the Loan for
            </h1>
            <h1 className="bg-[#af6dea] mt-10 w-fit mx-auto text-white text-5xl font-bold">
              $ {loanAmount}
            </h1>
            <div className="w-full flex justify-center">
              <button
                onClick={() => borrowRequestHandler()}
                className="text-[#0e0e0e] rounded-md mt-10 mx-auto z-10 bg-[#C9F270]  hover:bg-[#DAF996] hover:scale-[103%]  py-2 hover:-translate-y-0.5  hover:shadow-button px-10 ease-in-out-expo transform transition-transform duration-150 cursor-pointer"
              >
                {borrowLoading ? 'Confirming ...' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SeekersProgress
