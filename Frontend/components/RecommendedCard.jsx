import React from 'react';

const RecommendedCard = ({ text }) => {
  return (
    <div className="rounded-[5px] bg-[#E9ECEF] border border-[#d7d7d7] w-fit py-1 px-3 text-[0.875rem] text-black font-medium leading-[1.5] ">
      {text}
    </div>
  );
};

export default RecommendedCard;
