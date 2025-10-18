import React,{useState} from "react";

const Button = ({ text, redirect }) => {
  return (
    <a
      href={redirect}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center bg-[#3a220c] text-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-mono tracking-wide hover:bg-[#482d1a] transition-colors duration-300 ease-in-out rounded-md w-full sm:w-auto"
    >
      <span className="relative z-10">{text}</span>

      {/* Decorative Corners */}
      <span className="absolute top-0 left-0 w-3 h-[0.8px] bg-orange-600"></span>
      <span className="absolute top-0 left-0 w-[0.8px] h-3 bg-orange-600"></span>

      <span className="absolute top-0 right-0 w-3 h-[0.8px] bg-orange-600"></span>
      <span className="absolute top-0 right-0 w-[0.8px] h-3 bg-orange-600"></span>

      <span className="absolute bottom-0 left-0 w-3 h-[0.8px] bg-orange-600"></span>
      <span className="absolute bottom-0 left-0 w-[0.8px] h-3 bg-orange-600"></span>

      <span className="absolute bottom-0 right-0 w-3 h-[0.8px] bg-orange-600"></span>
      <span className="absolute bottom-0 right-0 w-[0.8px] h-3 bg-orange-600"></span>
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
    const [expanded, setExpanded] = useState(false);
  const tagStyle =
    "bg-[#252525] text-gray-200 border border-gray-600/50 shadow-lg shadow-black/50";

  return (
<div className="bg-[#181818] rounded-lg transform transition duration-300 hover:scale-[1.03] border-t-2 border-transparent hover:border-orange-500 w-[14rem] sm:w-full sm:max-w-sm mx-auto group lg:min-w-[200px]">
      {/* Image */}
      <div className="relative h-40 sm:h-48 md:h-56">
        <img className="w-full h-full object-contain bg-black" src={image} alt={name} />
        {category && (
          <span
            className={`absolute top-2 right-2 text-[0.65rem] sm:text-xs font-light px-2 sm:px-3 py-1 rounded-full cursor-pointer hover:opacity-80 transition-colors uppercase ${tagStyle}`}
          >
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-500 mb-2 tracking-wide uppercase transition-colors duration-300">
          {name}
        </h3>

        {/* Description */}
        <div
  className={`text-gray-400 text-sm sm:text-base mb-3 leading-relaxed transition-all duration-300 ${
    expanded
      ? "max-h-32 overflow-y-auto overflow-x-hidden pr-1"
      : "line-clamp-5 overflow-hidden"
  }`}
>
  {description}
</div>

<div className="w-full">
  <button
    onClick={() => setExpanded(!expanded)}
    className="text-orange-500 text-sm font-medium hover:underline mb-4"
  >
    {expanded ? "Read less" : "Read more"}
  </button>
</div>

        {/* Description */}
{/* <div
  className=" relative overflow-clip
    transition-all duration-500 ease-in-out
     group-hover:max-h-[600px]
  "
>
  <p
    className="
      text-gray-400 text-sm sm:text-base mb-3 leading-relaxed
      line-clamp-5 group-hover:line-clamp-none
      transition-all duration-500 ease-in-out
    "
  >
    {description}
  </p>
</div> */}



        {/* Venue & Date */}
        <div className="space-y-2 text-xs sm:text-sm text-gray-300 mb-6 line-clamp-5">
          {venue && (
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-orange-500 shrink-0"
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
                className="w-4 h-4 mr-2 text-orange-500 shrink-0"
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
        <div className="flex flex-col sm:flex-row gap-3 justify-center" >
          {/* <Button text="Register" redirect={registerlink} /> */}
          <Button text="See Details" redirect={detailedlink} />
        </div>
      </div>
    </div>
  );
}

export default EventCard;
