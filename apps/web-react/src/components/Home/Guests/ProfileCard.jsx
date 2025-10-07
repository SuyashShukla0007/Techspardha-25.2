import React, { useState } from 'react';

function ProfileCard({
    imageUrl,
    name,
    description,
    linkedInlink = 'https://linkedin.com',
    xlink = 'https://x.com',
    instagramlink = 'https://instagram.com'
}) {
    const [hovered, sethovered] = useState(false);
    const [showFull, setShowFull] = useState(false);

    return (
        <div 
            className={`w-[90vw] md:w-[410px] h-[440px] rounded-[24px] border-[3px] border-[#2C2C2E] overflow-hidden bg-[#2C2C2E] hover:border-[#F77039] ${hovered ? 'shadow-lg' : ''} shadow-[#F77039] transition-all duration-500`}
            onMouseEnter={() => sethovered(true)}
            onMouseLeave={() => sethovered(false)}
        >
            <div
                className="h-full w-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                {/* Gradient Overlay */}
                <div
                    className={`absolute bottom-0 left-0 right-0 ${showFull ? 'h-full' : 'h-3/4'} bg-gradient-to-t from-black/80 via-black/60 to-transparent transition-all duration-500`}
                />

                {/* Content Container */}
                <div className={`absolute inset-0 z-10 p-6 flex flex-col text-white ${showFull ? 'justify-start' : 'justify-end'} transition-all duration-500`}>
                    
                    {/* Header Section */}
                    <div>
                        <span className={`text-2xl font-bold [text-shadow:0_1px_4px_rgba(0,0,0,0.5)] ${hovered ? 'text-[#F77039]' : ''} transition-colors duration-300`}>
                            {name}
                        </span>
                    </div>

                    {/* Description Section - This is the main change */}
                    <div className={`mt-2 text-sm [text-shadow:0_1px_3px_rgba(0,0,0,0.5)] transition-all duration-500 ${showFull ? 'flex-1 min-h-0' : 'h-auto'}`}>
                        {
                            !showFull ? (
                                <p>
                                    {description.slice(0, 100)}...
                                    <button className="text-blue-400 underline cursor-pointer ml-1 font-semibold" onClick={() => setShowFull(true)}>
                                        Read More
                                    </button>
                                </p>
                            ) : (
                                <>
                                    <div className={`h-5/6 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent ${hovered?'[&::-webkit-scrollbar-thumb]:bg-[#F77038]':'[&::-webkit-scrollbar-thumb]:bg-white'} [&::-webkit-scrollbar-thumb]:rounded-full`}>
                                    {description}
                                    </div>
                                    <button onClick={() => setShowFull(false)} className="text-blue-400 underline 
                                    cursor-pointer mt-2 font-semibold">
                                        Show Less
                                    </button>
                                </>
                            )
                        }
                    </div>

                    {/* Footer: Social Links */}
                    <div className={`flex flex-row gap-4 ${showFull ? 'mt-4' : 'mt-2'}`}>
                        <a href={instagramlink} target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://img.icons8.com/ios-filled/50/ffffff/instagram.png"
                                alt="Instagram"
                                className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                            />
                        </a>
                        <a href={linkedInlink} target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                                alt="LinkedIn"
                                className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                            />
                        </a>
                        <a href={xlink} target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://img.icons8.com/ios-filled/50/ffffff/twitterx.png"
                                alt="X"
                                className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;