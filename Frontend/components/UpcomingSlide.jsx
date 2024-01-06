import React from 'react'
import UpcomingCard from './UpcomingCard'

const UpcomingSlide = ({ title, cardList }) => {
  return (
    <div className="p-[15px]  bg-white border border-[#d7d7d7] rounded-lg mb-[15px]">
      <p className="uppercase mb-[15px] text-ellipsis leading-[1.125rem] font-medium text-secondary-text text-[0.8125rem] ">
        {title}
      </p>
      <div className=" px-[15px] -mx-[15px]">
        {cardList.map((card, index) => (
          <UpcomingCard
            key={index}
            isImage={card?.isImage}
            title={card?.title}
            subtitle={card?.subtitle}
            imageUrl={card?.imageUrl}
            month={card?.month}
            date={card?.date}
          />
        ))}
      </div>
      <hr className="h-[1px] bg-light-gray my-[0.9375rem] -mx-[0.9375rem]" />
      <p className="text-[0.875rem] leading-[100%] text-secondary-text text-center cursor-pointer">
        See all
      </p>
    </div>
  )
}

export default UpcomingSlide
