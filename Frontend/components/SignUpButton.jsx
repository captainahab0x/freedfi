import React from 'react';

const SignUpButton = ({ isAllValid, label, handelSubmit }) => {
  return (
    <button
      onClick={handelSubmit}
      disabled={isAllValid}
      type="button"
      className={`mt-5 py-[9px] text-[0.875rem] rounded font-semibold  ${
        isAllValid
          ? 'bg-[#C9F270] text-[#0e0e0e] hover:bg-[#DAF996] hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer'
          : 'bg-[#fafafa] text-[#dadada] cursor-default'
      }`}>
      {label}
    </button>
  );
};

export default SignUpButton;
