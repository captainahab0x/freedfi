import React from 'react';
import Image from 'next/image';
import CrossLogoWhite from '@/assets/crossLogoWhite.svg';
import CanalLogo from '@/assets/CanalLogo.png';
import DegreedLogo from '@/assets/degreedLogo.png';
import DiscordLogo from '@/assets/DiscordLogo.jpeg';
import ReactTimeago from 'react-timeago';
import SaveOutlineButton from '@/components/SaveOutlineButton';
import RightArrow from '@/assets/RightArrow.svg';
import RecommendedCard from './RecommendedCard';
import UpcomingSlide from './UpcomingSlide';
import { useDispatch, useSelector } from 'react-redux';
import { postsActions } from '@/store/posts-slice';
import { useEffect } from 'react';

const datadummy = {
  id: 1,
  role: 'Senior Software Engineer - Front End - Bengaluru',
  company: 'Degreed',
  location: 'Bengaluru, Ka',
  type: 'Full Time',
  remote: true,
  logo: DegreedLogo,
  no_of_applicants: 12,
  posted_on: '2023-04-20T04:05:25.008Z',
};

const upcomingEvents = [
  {
    isImage: false,
    title: 'Sentry Info Session | Code. Learn. Grow',
    subtitle: 'Sentry • Webinar',
    month: 'May',
    date: '20',
  },
  {
    isImage: false,
    title: 'Sentry Info Session | Code. Learn. Grow',
    subtitle: 'Sentry • Webinar',
    month: 'May',
    date: '20',
  },
];

const upcomingWebinars = [
  {
    isImage: true,
    title: 'Sentry Info Session | Code. Learn. Grow',
    subtitle: 'Sentry • Webinar',
    imageUrl:
      'https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/29-waf2mTZaYRYuEy5hdFQ.png',
  },
  {
    isImage: true,
    title: 'Sentry Info Session | Code. Learn. Grow',
    subtitle: 'Sentry • Webinar',
    imageUrl:
      'https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/29-waf2mTZaYRYuEy5hdFQ.png',
  },
];

const JobsAndCompaniesModal = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.posts?.selectedCard);

  const { role, company, location, type, remote, logo, posted_on, domain } =
    data || datadummy;

  useEffect(() => {}, [data]);

  const handelClose = () => {
    setIsModalOpen(false);
    dispatch(postsActions.setSelectedCard(null));
  };

  return (
    <div
      className={`min-w-screen min-h-screen w-full h-full fixed top-0 left-0 bg-black/50  z-[200] flex items-center justify-center transform  sm:px-[6rem] ${
        isModalOpen ? ' scale-[100%] opacity-[100]' : ' scale-0 opacity-0'
      }`}>
      <div
        className={`block sm:rounded-lg min-h-screen sm:min-h-fit bg-white sm:max-w-[64rem] w-full transform duration-[300ms]   ${
          isModalOpen ? ' scale-[100%] opacity-[100]' : ' scale-0 opacity-0'
        } overflow-x-hidden`}>
        <div className="block sm:rounded-lg  bg-[#fefefe] sm:max-w-[64rem] w-full  max-h-screen overflow-y-auto relative">
          <div className="h-full w-full bg-white sticky top-0 border border-light-gray p-[0.9375rem] mb-[0.9375rem] rounded-md z-[10]">
            {/* CloseLogo */}
            <div
              onClick={() => handelClose()}
              className="p-[9px] bg-black/[15%] rounded-full absolute  top-[14px]  right-[10px] cursor-pointer group hover:scale-[125%] hover:bg-black/10 transition-all duration-300">
              <Image
                src={CrossLogoWhite}
                alt="Cross Logo"
                className={` w-[14px] h-[14px]`}
              />
            </div>
            {/* header */}
            <div className="flex min-h-[6.25rem] w-full gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={logo}
                  className="w-[100px] h-[100px] object-cover rounded-md"
                  alt="logo"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[1rem] mb-[5px] leading-[1.375rem] font-medium text-primary-text">
                  {role || 'Senior Software Engineer - Front End - Bengaluru'}
                </p>
                <p className="mb-[0.6rem] text-[0.875rem] leading-[1.5] font-normal ">
                  {company} ,<span>{domain || 'webdev'}</span>
                </p>
                <div className="mb-3 text-ellipsis text-[0.75rem] leading-[1.5] text-primary-text">
                  <span className="captilize">{type || 'Full time'}</span>
                  <span className="mx-[3px]">•</span>
                  <span className="captilize">
                    {location}, {`${remote && 'Remote'}`}
                  </span>
                </div>
                <div className="flex gap-1 mb-2">
                  <span className="text-[0.75rem] text-secondary-text font-normal">
                    Posted
                  </span>
                  <ReactTimeago
                    date={posted_on || '2023-04-20T04:05:25.008Z'}
                    className="text-[0.75rem] text-secondary-text font-normal"
                  />
                </div>
              </div>
            </div>
            <hr className="h-[1px] bg-light-gray my-[0.9375rem] -mx-[0.9375rem]" />
            {/* Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <SaveOutlineButton />
                <SaveOutlineButton isShare={true} />
              </div>
              <div className="">
                <button className="max-w-[13.25rem]   mx-auto  bg-primary-button px-4 rounded font-semibold text-[0.875rem] h-[2.5rem] flex items-center gap-2 hover:bg-secondary-button hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer ">
                  <span>Fund</span>
                  <Image
                    src={RightArrow}
                    alt="back"
                    className="h-[0.875rem] w-fit"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="h-full w-full md:px-[0.9375rem] overflow-hidden">
            <div className="max-w-[1000px] md:px-3 mt-[20px] h-full flex flex-col md:flex-row ">
              <div className="h-full flex-grow flex-shrink basis-[68%] min-w-[21.875rem] md:mr-[10px] ">
                {/* Recommended */}
                <div className="flex flex-col h-full p-[15px] mb-[15px] bg-white border border-light-gray rounded-lg">
                  <div>
                    <p className="uppercase mb-[15px] text-ellipsis leading-[1.125rem] font-medium text-secondary-text text-[0.8125rem]">
                      Skill Captivation Assignement
                    </p>
                    <div className="flex flex-col space-y-3">
                      <p className="leading-[1.5] break-words text-[0.875rem] text-primary-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <p className="leading-[1.5] break-words text-[0.875rem] text-primary-text">
                        Neque consequatur omnis dolore accusamus reiciendis iste
                      </p>
                      <p className="leading-[1.5] break-words text-[0.875rem] text-primary-text">
                        Neque consequatur omnis dolore accusamus reiciendis iste
                        deleniti adipisci rem officiis debitis.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Job description */}

                {/* About company */}
                <div className=" p-[15px] mb-[15px] bg-white border border-light-gray rounded-lg">
                  <p className="uppercase mb-[15px] text-ellipsis leading-[1.125rem] font-medium text-secondary-text text-[0.8125rem] ">
                    About {company}
                  </p>
                  <div className="mt-3 pb-3 border-b border-gray-hover">
                    <p className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                      Industry: Enterprise Software, EdTech
                    </p>
                  </div>
                  <div className="mt-3 pb-3 border-b border-gray-hover">
                    <p className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                      Company size: 201-500 employees
                    </p>
                  </div>
                  <div className=" mt-3">
                    <h3 className="text-[1.125rem] font-medium leading-[150%] my-2">
                      <strong>Our Mission</strong>
                    </h3>
                    <p className="leading-[1.25rem] break-words text-[0.875rem] text-primary-text ">
                      Degreed started with a mission to challenge the college
                      degree & other traditional credentials as the only way to
                      set yourself up for success. Our upskilling platform is
                      built on peoples inherent desire to learn, grow, & advance
                      in their careers, giving them the data, tools, & skills to
                      make progress — degree by degree.
                    </p>
                  </div>
                  <div className="  ">
                    <h3 className="text-[1.125rem] font-medium leading-[150%] my-2">
                      <strong>Our Belief</strong>
                    </h3>
                    <p className="leading-[1.25rem] break-words text-[0.875rem] text-primary-text ">
                      We believe everyone is driven by an innate desire to learn
                      and grow. By equipping people with the skills the world
                      needs, we help them redefine their careers, their
                      companies, & their fields. We believe that together we can
                      push the limits of whats possible.
                    </p>
                  </div>
                  <div className=" ">
                    <h3 className="text-[1.125rem] font-medium leading-[150%] my-2">
                      <strong>Our Purpose</strong>
                    </h3>
                    <p className="leading-[1.25rem] break-words text-[0.875rem] text-primary-text ">
                      We propel people and their companies toward their
                      aspirations & goals. By providing the guidance, learning,
                      & insights they need, we help them to not only understand
                      where their strengths lie, but to amplify and multiply
                      them.
                    </p>
                  </div>
                </div>
                {/* Apply */}
                <div className="p-[2rem] bg-dark-green mb-[15px] overflow-hidden rounded-md border border-gray-hover text-white">
                  <h3 className="text-[1.125rem] font-semibold leading-[125%] mb-[15px]">
                    Not sure if you should apply?
                  </h3>
                  <p className="leading-[150%] break-words text-[1rem]  mb-6">
                    Many people, especially those from underserved groups,
                    don&apos;t apply because they&apos;re not 100% qualified. If
                    you match at least 50% of the requirements, we encourage you
                    to apply.
                  </p>
                  <button className=" w-full justify-center text-primary-text  mx-auto  bg-primary-button px-4 rounded font-semibold text-[0.875rem] h-[2.5rem] flex items-center gap-2 hover:bg-secondary-button hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer">
                    <span>Fund</span>
                    <Image
                      src={RightArrow}
                      alt="back"
                      className="h-[0.875rem] w-fit"
                    />
                  </button>
                </div>
              </div>
              {/* Right */}
              <div className=" flex-shrink h-full basis-[32%] min-w-[15rem] md:ml-[10px]">
                <UpcomingSlide
                  title={'Trusted Credentials'}
                  cardList={upcomingEvents}
                />
                <UpcomingSlide
                  title={'Funded By'}
                  cardList={upcomingWebinars}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsAndCompaniesModal;
