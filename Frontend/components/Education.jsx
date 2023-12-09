import React, { useState } from 'react';

const Education = () => {
  const [schools, setSchools] = useState([{}]);

  const [isSelfTaught, setIsSelfTaught] = useState(false);

  const addSchool = () => {
    setSchools([...schools, {}]);
    console.log(schools);
  };

  const removeSchool = (index) => {
    const updatedSchools = [...schools];
    updatedSchools.splice(index, 1);
    setSchools(updatedSchools);
  };

  return (
    <div className="w-full h-full bg-white px-3 ">
      <h1 className="text-[2rem] text-primary-text font-semibold leading-[125%] text-center mb-[1.5rem]">
        Education
      </h1>
    </div>
  );
};

export default Education;
