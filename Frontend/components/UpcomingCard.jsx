import Image from 'next/image'
import React from 'react'

const UpcomingCard = ({ isImage, imageUrl, title }) => {
  return (
    <div className="flex items-center mb-[15px]">
      {isImage && (
        <div className="w-[2.5rem] justify-center items-center h-[2.5rem] mr-[0.625rem] flex flex-col flex-shrink-0">
          <Image
            src={imageUrl && imageUrl}
            priority={true}
            width={40}
            height={40}
            className="w-full h-full rounded-lg flex-shrink-0"
            alt="logo"
          />
        </div>
      )}

      <div>
        <p className="text-[0.875rem] leading-[0.875rem] text-secondary-text font-medium">
          {title}
        </p>
      </div>
    </div>
  )
}

export default UpcomingCard
