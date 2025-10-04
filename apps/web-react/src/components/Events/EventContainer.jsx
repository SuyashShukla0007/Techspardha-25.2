import React from 'react'
import EventCard from '../../components/Events/EventCard';
import {EVENTCATEGORIES,EVENTS} from '../../constants/Event';
import {useState} from 'react';
function EventContainer() {
  const [category,setCategory] = useState([{ id: 0, name: "All" },...EVENTCATEGORIES]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  function onclickHandler(e){
    const cat=e.target.innerText;
    setSelectedCategory(cat);
  }
  return (
  <div className='bg-[#15130F] text-white w-full min-h-[100dvh] m-0 p-0 box-border'>
      <h1 className='text-5xl font-extrabold text-center text-[#f77039] font-gta  pt-10 pd-8'>EVENTS</h1>
      <p className='text-center p-4'>Explore our exciting lineup of events at TECHSPARDHA'25</p>
        <hr className='w-[15%] mx-auto border-t-4 border-[#f77039]' />
        {/* Mobile: custom dropdown replicating desktop hover effect */}
        <div className="sm:hidden mt-6 flex justify-center">
          <div className="relative">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen((s) => !s)}
              className="w-56 flex items-center justify-between bg-transparent border border-white/20 text-white p-4 rounded-md">
              <span className="truncate">{selectedCategory}</span>
              <svg
                className={`ml-2 h-4 w-4 text-white transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
              </svg>
            </button>

            {dropdownOpen && (
              <ul
                role="listbox"
                aria-label="Categories"
                className="absolute left-0 mt-2 w-56 bg-[#15130F] border border-white/20 rounded-md shadow-lg z-50 overflow-hidden"
              >
                {category.map((cat) => (
                  <li key={cat.id} role="option">
                    <button
                      onClick={() => { setSelectedCategory(cat.name); setDropdownOpen(false); }}
                      className="w-full text-left truncate hover:overflow-visible hover:bg-[#FF5C00] p-4 rounded-md hover:shadow-[0_0_9px_rgba(255,92,0,0.8)]"
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Desktop and larger: inline button list */}
        <div className='hidden sm:block mt-8 border-[0.8px] border-white/20 w-max mx-auto text-center rounded-md'>
          <ul className='inline-flex items-center'>
            {category.map((cat) => (
              <li key={cat.id} className="inline m-2">
                <button onClick={onclickHandler} className='truncate w-[8vw] hover:w-auto hover:overflow-visible hover:bg-[#FF5C00] p-4 rounded-md hover:shadow-[0_0_9px_rgba(255,92,0,0.8)]'>
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="inline-flex flex-wrap justify-center mt-10 mb-10 align-middle gap-8 px-4 w-full">
          {EVENTS.filter((event)=>{
            if(selectedCategory==='All'){
              return true;
            }
            return event.category === selectedCategory;
          }).map((event) => (
            <div className="width-[33%] box-border m-4">
            <EventCard key={event.id} name={event.name}
  description={event.description}
  venue={event.venue}
  date={event.date}
  category={event.category}
  image={event.image}
  registerlink={event.registerlink}
  detailedlink={event.detailedlink}/></div>
          ))}

        </div>
    </div>
  )
}

export default EventContainer;

