import React from 'react';
import Image from 'next/image';
import SaveOutlineButton from '@/components/SaveOutlineButton';
import { useDispatch } from 'react-redux';
import { postsActions } from '@/store/posts-slice';

const JobsCard = ({
  role,
  company,
  location,
  type,
  remote,
  logo,
  no_of_applicants,
  wholeCard,
  setIsModalOpen,
}) => {
  const dispatch = useDispatch();

  const handelClick = () => {
    setIsModalOpen(true);
    dispatch(postsActions.setSelectedCard(wholeCard));
  };

  return (
    <div
      onClick={() => handelClick()}
      className="w-full  bg-white p-[0.9375rem] rounded border border-gray-border hover:shadow-card text-primary-text cursor-pointer group overflow-hidden ">
      {/* Logo and applicants */}
      <div className="flex justify-between flex-col flex-grow-1 h-full">
        <div className="h-full">
          {/* Job Title */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-[1rem] mb-2 leading-[1.375rem] font-medium text-primary-text">
                {role}
              </p>
              <p className="mb-[12px] text-[0.9375rem] leading-[1.5] font-normal ">
                Research different programs and initiatives by universities
                across the world
              </p>
            </div>

            <div className="mb-3 bg-[#f7f0fd] text-[#AF6DEA] font-CabinetGrotesk-Medium text-ellipsis text-[0.9375rem] leading-[1.5] px-3 py-1 w-fit rounded-[5px]">
              250 $
            </div>
          </div>
        </div>
        <div>
          <hr className="border-gray-border   -ml-[15px] -mr-[15px] my-[15px]" />

          <div className="flex justify-between gap-3 h-fit">
            <SaveOutlineButton />

            <div className="flex gap-1 items-center px-[16px] bg-primary-button border-primary-button max-h-[3rem] h-[2.5rem] border rounded hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer">
              <button className="text-[0.875rem] leading-[130%]  text-primary-text font-semibold">
                Fund Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
