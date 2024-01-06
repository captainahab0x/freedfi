import React from 'react'

const FilterCard = ({ name, link, currentActive, setSelectedtag }) => {
  return (
    <div className="flex-shrink-0">
      <div
        onClick={() => setSelectedtag(name)}
        className={`px-[14.5px] flex-shrink-0 hover:bg-gray-100 transition-all duration-200 py-[6px] my-[4px] mr-2 border border-black rounded w-fit h-[35px] ${
          currentActive === link && ' bg-black'
        }`}
      >
        <p
          className={`text-[0.875rem] leading-[150%] font-semibold text-primary-text captilize cursor-pointer ${
            currentActive === link && ' text-white'
          }`}
        >
          {name}
        </p>
      </div>
    </div>
  )
}

export default FilterCard
