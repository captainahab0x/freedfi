'use client';

import React from 'react';
import CanalLogo from '@/assets/CanalLogo.png';
import DegreedLogo from '@/assets/degreedLogo.png';
import DiscordLogo from '@/assets/DiscordLogo.jpeg';
import ListLogo from '@/assets/ListLogo.svg';
import ClockLogo from '@/assets/ClockLogo.svg';
import BookmarkLogo from '@/assets/BookmarkLogo.svg';
import BlackTick from '@/assets/BlackTick.svg';
import JobsCard from '@/components/JobsCard';
import JobsPage from '@/components/JobsPage';
import FooterSection from '@/components/footer-section';

const JobsFilter = [
  {
    id: 0,
    name: 'All',
  },
  {
    id: 1,
    name: 'Web Dev',
  },
  {
    id: 2,
    name: 'App Dev',
  },
  {
    id: 3,
    name: 'Web3',
  },
  {
    id: 4,
    name: 'NFT',
  },
  {
    id: 5,
    name: 'Ai/Ml',
  },
];

const JobsList = [
  {
    id: 1,
    role: 'Senior Software Engineer - Front End - Bengaluru',
    company: 'Degreed',
    location: 'Bengaluru, Ka',
    type: 'Full Time',
    remote: true,
    logo: DegreedLogo,
    no_of_applicants: 12,
    posted_on: '2023-04-20T04:05:25.008Z',
  },
  {
    id: 2,
    role: 'Product Engineering Intern - Design Systems',
    company: 'Discord',
    location: 'San Framcosco, CA',
    type: 'Internship',
    remote: true,
    logo: DiscordLogo,
    no_of_applicants: 100,
    posted_on: '2023-05-20T04:05:25.008Z',
  },
  {
    id: 3,
    role: 'Senior Frontend Software Engineer',
    company: 'Canal',
    location: 'San Framcosco, CA',
    type: 'Full Time',
    remote: true,
    logo: CanalLogo,
    no_of_applicants: 50,
    posted_on: '2023-06-20T04:05:25.008Z',
  },
  {
    id: 4,
    role: 'Senior Software Engineer - Front End - Bengaluru',
    company: 'Degreed',
    location: 'Bengaluru, Ka',
    type: 'Full Time',
    remote: true,
    logo: DegreedLogo,
    no_of_applicants: 12,
    posted_on: '2023-01-20T04:05:25.008Z',
  },
  {
    id: 5,
    role: 'Product Engineering Intern - Design Systems',
    company: 'Discord',
    location: 'San Framcosco, CA',
    type: 'Internship',
    remote: true,
    logo: DiscordLogo,
    no_of_applicants: 10,
    posted_on: '2023-02-20T04:05:25.008Z',
  },
  {
    id: 6,
    role: 'Senior Frontend Software Engineer',
    company: 'Canal',
    location: 'San Framcosco, CA',
    type: 'Full Time',
    remote: true,
    logo: CanalLogo,
    no_of_applicants: 3,
    posted_on: '2023-03-20T04:05:25.008Z',
  },
  {
    id: 1,
    role: 'Senior Software Engineer - Front End - Bengaluru',
    company: 'Degreed',
    location: 'Bengaluru, Ka',
    type: 'Full Time',
    remote: true,
    logo: DegreedLogo,
    no_of_applicants: 12,
    posted_on: '2023-04-20T04:05:25.008Z',
  },
  {
    id: 2,
    role: 'Product Engineering Intern - Design Systems',
    company: 'Discord',
    location: 'San Framcosco, CA',
    type: 'Internship',
    remote: true,
    logo: DiscordLogo,
    no_of_applicants: 100,
    posted_on: '2023-05-20T04:05:25.008Z',
  },
  {
    id: 3,
    role: 'Senior Frontend Software Engineer',
    company: 'Canal',
    location: 'San Framcosco, CA',
    type: 'Full Time',
    remote: true,
    logo: CanalLogo,
    no_of_applicants: 50,
    posted_on: '2023-06-20T04:05:25.008Z',
  },
];

const Jobs = () => {
  return (
    <div>
      <JobsPage
        Filters={JobsFilter}
        CardList={JobsList}
        CardName={JobsCard}
        Heading="YOUR TOP JOB MATCHES ON UNTAPPED"
        isDropDown={true}
      />
      <FooterSection />
    </div>
  );
};

export default Jobs;
