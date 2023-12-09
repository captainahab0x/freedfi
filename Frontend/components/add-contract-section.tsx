"use client"

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function AddContractSection() {

  const router = useRouter();

  const sectionAction = () => {
    console.log("Add Contract Action");
    router.push("/submit");
  };

  return (
    <div key="1" className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-4">Apply for the Loan</h1>
      <p className="text-center mb-8">Complete the 2 steps to apply for the loan</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow rounded w-full">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="credential-vault-address">
              Add Credential vault address *
            </label>
            <input
              className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md border-2 h-10"
              placeholder="Pepe.SuperLancers.ID"
              type="text"
            />
          </div>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="contract-address">
              Add Contract address
            </label>
            <input
              className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md border-2 h-12"
              placeholder="Paste credential vault address"
              type="text"
            />
          </div>
          <Button className="w-full" variant="secondary">
            +Add
          </Button>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <Button 
        className="bg-[#CEFB7B] hover:bg-[#DAFB9D] text-black rounded-md transition-colors duration-200"
        onClick={ () => sectionAction()}>
          Apply Now
        </Button>
      </div>
    </div>
  )
}

