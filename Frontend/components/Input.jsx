import React from 'react'

const Input = ({
  label,
  inputValue,
  setInputValue,
  placeholder,
  removeFunc,
  remove,
  id,
}) => {
  return (
    <div className="relative">
      <label className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem] relative">
        {label}
      </label>
      {remove && (
        <span
          className="absolute right-0 top-0 text-text-red cursor-pointer"
          onClick={() => removeFunc(id)}
        >
          - remove
        </span>
      )}
      <input
        type="text"
        name="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full text-[0.9375rem] transition-field ease-in-out-expo duration-[0.25s] outline-none border tracking-[-0.005em] bg-white h-11 rounded py-[0.1rem] px-[0.875rem] mb-[0.8125rem] text-primary-text border-[#d7d7d7] focus:shadow-field focus:border-black"
      />
    </div>
  )
}

export default Input
