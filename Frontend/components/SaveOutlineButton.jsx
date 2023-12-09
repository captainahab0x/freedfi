import React from 'react';
import BookmarkLogo from '@/assets/BookmarkLogo.svg';
import ShareLogo from '@/assets/shareLogo.svg';
import Image from 'next/image';

const SaveOutlineButton = ({ isShare }) => {
  return (
    <div className="flex gap-1 items-center pl-[14px] pr-[16px] max-h-[3rem] h-[2.5rem] border border-black rounded hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer">
      <Image
        src={isShare ? ShareLogo : BookmarkLogo}
        alt="Bookmarklogo"
        width={16}
        height={16}
        className="w-4 h-[14px]"
      />
      <p className="text-[0.875rem] leading-[130%]  text-primary-text font-semibold">
        {isShare ? 'Share' : 'Save'}
      </p>
    </div>
  );
};

export default SaveOutlineButton;
