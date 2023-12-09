import React, { useEffect } from 'react';
import FilterCard from '@/components/FilterCard';
import { useState } from 'react';
import JobsAndCompaniesModal from './JobsModal';
import HeaderSection from './header-section';

const JobsPage = ({ Filters, CardList, CardName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedtag, setSelectedtag] = useState('All');

  return (
    <div className={`${isModalOpen && 'overflow-y-hidden scrollbar-hide'}`}>
      <div className="fixed top-0 w-full z-[100]">
        <HeaderSection />
      </div>
      <div
        className={`max-w-[62.5rem] w-full min-h-screen h-full mx-auto  mt-[8rem] z-0 `}>
        {/* Cards section */}
        <div className="p-[0.9375rem] border border-gray-border rounded bg-white h-full">
          <div className="sm:max-w-[62.5rem]   overflow-x-auto flex  ">
            <div className="flex gap-5 flex-nowrap mx-auto sm:flex-wrap mb-2">
              {Filters.map((filter) => (
                <FilterCard
                  key={filter.id}
                  name={filter.name}
                  currentActive={selectedtag}
                  link={filter.name}
                  setSelectedtag={setSelectedtag}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[0.9375rem]  ">
            {CardList.map((card) => (
              <CardName
                key={card?.id}
                role={card?.role}
                company={card?.company}
                location={card?.location}
                remote={card?.remote}
                type={card?.type}
                logo={card?.logo}
                no_of_applicants={card?.no_of_applicants}
                no_events={card?.no_events}
                no_jobs={card?.no_jobs}
                stage={card?.stage}
                employees={card?.employees}
                setIsModalOpen={setIsModalOpen}
                wholeCard={card}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Modal */}

      <JobsAndCompaniesModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      {/* Modal End */}
    </div>
  );
};

export default JobsPage;
