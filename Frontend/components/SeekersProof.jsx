import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '../components/Input';
import InputField from '../components/InputField';
import { Button } from '@/components/ui/button';

export default function SeekersProof() {
  const router = useRouter();
  const [credentialWalletAddress, setCredentialWalletAddress] = useState('');
  const [isEmptyCredentialWalletAddress, setIsEmptyCredentialWalletAddress] =
    useState(false);
  const [contractAddress, setContractAddress] = useState([1, 2, 3]);
  const [currectAddress, setCurrentAddress] = useState('');

  const addContractAddress = () => {
    setContractAddress((prevAddresses) => [
      ...prevAddresses,
      {
        id: prevAddresses.length,
        address: currectAddress,
      },
    ]);
    setCurrentAddress('');
  };

  const removeContractAddress = (id) => {
    setContractAddress((prevAddresses) =>
      prevAddresses.filter((curr) => curr.id !== id)
    );
  };

  useEffect(() => {}, [contractAddress]);

  return (
    <div key="1" className="max-w-4xl mx-auto py-4 px-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        Apply for the Loan
      </h1>
      <p className="text-center mb-8">
        Complete the 2 steps to apply for the loan
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow rounded w-full">
          <InputField
            inputValue={credentialWalletAddress}
            setInputValue={setCredentialWalletAddress}
            isEmpty={isEmptyCredentialWalletAddress}
            setIsEmpty={setIsEmptyCredentialWalletAddress}
            label={'Add Skill Credential Vault address *'}
            errorMessage={'Credential Vault Address Is Empty'}
          />
        </div>
        <div className="bg-white p-6 shadow rounded">
          <Input
            label={'Add Contract address'}
            inputValue={currectAddress}
            setInputValue={setCurrentAddress}
          />
          {
            <div>
              {contractAddress.map((contract, index) => (
                <Input
                  inputValue={contract.address}
                  setInputValue={setCurrentAddress}
                  remove={true}
                  removeFunc={removeContractAddress}
                  id={index}
                />
              ))}
            </div>
          }
          <Button
            onClick={addContractAddress}
            className="w-full hover:-translate-y-1 transition-all duration-200 ease-in-out-expo hover:shadow-button"
            variant="secondary">
            +Add
          </Button>
        </div>
      </div>
    </div>
  );
}
