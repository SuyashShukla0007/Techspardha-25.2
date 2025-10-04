import React from "react";


const Button = ({ text, redirect }) => {
  return (
    <a
      href={redirect }
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center bg-[#3a220c] text-white px-8 py-3 text-lg font-mono tracking-wide hover:bg-[#482d1a] transition-colors duration-200"
    >
      <span className="relative z-10">{text}</span>

      {/* Top Left */}
      <span className="absolute top-0 left-0 w-3 h-1 bg-orange-600"></span>
      <span className="absolute top-0 left-0 w-1 h-3 bg-orange-600"></span>

      {/* Top Right */}
      <span className="absolute top-0 right-0 w-3 h-1 bg-orange-600"></span>
      <span className="absolute top-0 right-0 w-1 h-3 bg-orange-600"></span>

      {/* Bottom Left */}
      <span className="absolute bottom-0 left-0 w-3 h-1 bg-orange-600"></span>
      <span className="absolute bottom-0 left-0 w-1 h-3 bg-orange-600"></span>

      {/* Bottom Right */}
      <span className="absolute bottom-0 right-0 w-3 h-1 bg-orange-600"></span>
      <span className="absolute bottom-0 right-0 w-1 h-3 bg-orange-600"></span>
    </a>
  );
};


function EventCard({
  name,
  description,
  venue,
  date,
  category,
  image,
  registerlink,
  detailedlink,
}) {
  const tagStyle =
    "bg-[#252525] text-gray-200 border border-gray-600/50 shadow-lg shadow-black/50";

  return (
    <div className="bg-[#181818] rounded-lg overflow-hidden transform transition duration-300 hover:scale-[1.03] border-t-2 border-transparent hover:border-orange-500 max-w-sm mx-auto group">
  {/* Image */}
  <div className="relative h-48">
    <img className="w-full h-full object-cover" src={image} alt={name} />
    {category && (
      <span
        className={`absolute top-2 right-2 text-xs font-light px-3 py-1 rounded-full cursor-pointer hover:opacity-80 transition-colors uppercase ${tagStyle}`}
      >
        {category}
      </span>
    )}
  </div>

  {/* Content */}
  <div className="p-5">
    {/* Title */}
    <h3 className="text-xl font-bold text-white group-hover:text-orange-500 mb-2 tracking-wider uppercase transition-colors duration-200">
      {name}
    </h3>

    {/* Description */}
    <p className="text-gray-400 text-sm mb-5">{description}</p>

    {/* Venue & Date */}
    <div className="space-y-2 text-sm text-gray-300 mb-6">
      {venue && (
        <div className="flex items-center">
          <svg
            className="w-4 h-4 mr-2 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          <span>{venue}</span>
        </div>
      )}
      {date && (
        <div className="flex items-center">
          <svg
            className="w-4 h-4 mr-2 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{date}</span>
        </div>
      )}
    </div>

    {/* Buttons */}
    <div className="flex justify-between space-x-3">
      <Button text="Register" redirect={registerlink} />
      <Button text="See Details" redirect={detailedlink} />
    </div>
  </div>
</div>
  );
}

export default EventCard;
