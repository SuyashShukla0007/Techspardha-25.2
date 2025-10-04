import React, { useState } from 'react'

function ProfileCard({
    imageUrl,
    name,
    description,
    linkedInlink='https://linkedin.com',
    xlink='https://x.com',
    instagramlink='https://instagram.com'
}) {
    const[hovered,sethovered]=useState(false);
    return(
        
    <div className={`w-[90vw] md:w-[410px] h-[440px] rounded-[24px] border-[11px] border-[#2C2C2E] overflow-hidden bg-[#2C2C2E] hover:border-[#F77039] ${hovered?'shadow-2xl':''} shadow-[#F77039] shadow-rounded transition-transform transform duration-500 z-10`} onMouseEnter={()=>sethovered(true)} onMouseLeave={()=>sethovered(false)}>
      <div
        className="h-full w-full bg-cover relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className={`
          absolute bottom-0 left-0 right-0 h-3/4
          backdrop-blur-md bg-black/10
          [mask-image:linear-gradient(to_top,black_40%,transparent_100%)]
        `}>
        </div>
        <div className={"absolute inset-0 z-10 p-6 flex flex-col justify-end text-white"}>
          <div>
            <span className={`text-2xl font-bold [text-shadow:0_1px_4px_rgba(0,0,0,0.5)] ${hovered?'text-[#F77039]':''}`}>
              {name}
            </span>
            <p className="mt-2 text-sm [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                {description.slice(0,100)}...
              <button className="text-blue-400 underline cursor-pointer ml-1">Read More</button>
            </p>
          </div>
          <div className='flex flex-row gap-4 mt-4'>
            <a href={instagramlink} target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram.png"
                alt="Instagram"
                className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity hover:invert"
              />
            </a>
            <a href={linkedInlink} target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                alt="LinkedIn"
                className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity hover:invert"
              />
            </a>
            <a href={xlink} target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/twitterx.png"
                alt="X"
                className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity hover:invert"
              />
            </a>
            
          </div>

        </div>
      </div>
    </div>
  );
    
  
}

export default ProfileCard
