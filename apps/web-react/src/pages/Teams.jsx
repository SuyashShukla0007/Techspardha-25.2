import React from 'react';
import TeamCard from '../components/Teams/TeamCard';
import '../components/Teams/TeamCard.css'; 
import Shuffle from '../components/Teams/Shuffle'; 

// Sample Data for Team Members
const teamData = [
  {
    name: 'DEBATREYA DAS',
    role: 'Software Engineer',
    handle: '@debatreya',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/company/technobyte-nitkkr',
        instagram: 'https://www.instagram.com/technobyte_nitkkr',
        github: 'https://github.com/NavvneetK/Techspardha-25.2',
      },
  },
  {
    name: 'DEBATREYA DAS',
    role: 'Tech Lead',
    handle: '@debatreya',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/company/technobyte-nitkkr',
        instagram: 'https://www.instagram.com/technobyte_nitkkr',
        github: 'https://github.com/NavvneetK/Techspardha-25.2',
      },
  },
  {
    name: 'DEBATREYA DAS',
    role: 'Tech Lead',
    handle: '@debatreya',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/company/technobyte-nitkkr',
        instagram: 'https://www.instagram.com/technobyte_nitkkr',
        github: 'https://github.com/NavvneetK/Techspardha-25.2',
      },
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-start py-10 px-5">
      <div className="team-page-container relative w-full max-w-7xl text-center">
        {/* Header Section */}
        <div className="mb-20 relative">
          <h1 className="text-orange-500 font-rationale font-extrabold text-4xl sm:text-5xl lg:text-6xl font-black text-[#ff6600] uppercase tracking-[4px] mb-5 [text-shadow:0_0_20px_rgba(255,102,0,0.5)]">
            <Shuffle
              text="OUR TEAM"
              shuffleDirection="right"
              duration={0.35}
            />
          </h1>
          <div className="header-underline mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[90px] justify-items-center w-full">
          {teamData.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;