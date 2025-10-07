import React, { useState } from 'react';
import TechFAQ from './TechFAQ.png';
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const leftFaqs = [
    {
      question: "When will Techspardha'25 2.0 take place?",
      answer: "Techspardha'25 2.0 is scheduled to take place from March 15-17, 2025. This three-day tech festival will feature cutting-edge competitions, workshops, and networking opportunities for tech enthusiasts worldwide."
    },
    {
      question: "What are the registration requirements?",
      answer: "Registration requires a valid student ID, contact information, and completion of the online registration form. Some events may have additional specific requirements."
    },
    {
      question: "What technology domains are covered?",
      answer: "Techspardha covers various domains including AI/ML, Web Development, Robotics, IoT, Cybersecurity, and more. Check our events page for detailed information."
    },
    {
      question: "Are there cash prizes for winners?",
      answer: "Yes! We offer exciting cash prizes for winners across various competitions. Prize details will be announced for each event."
    }
  ];

  const rightFaqs = [
    {
      question: "Can I participate in multiple events?",
      answer: "Yes, you can participate in multiple events as long as the schedules don't overlap. Check the event timeline to plan your participation."
    },
    {
      question: "What about accommodation and meals?",
      answer: "Accommodation arrangements can be made for outstation participants. Meals will be provided during the event. Contact us for detailed information."
    },
    {
      question: "Are there opportunities for networking?",
      answer: "Absolutely! Techspardha provides numerous networking opportunities with industry professionals, speakers, and fellow participants through workshops, talks, and social events."
    },
    {
      question: "How can I stay updated with event details?",
      answer: "Follow us on our social media channels, check our website regularly, and subscribe to our newsletter for the latest updates and announcements."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-5 py-10 bg-cover bg-center gap-12"
        style={{ backgroundImage: `url(${TechFAQ})` }}
      >
        <div className="text-center mb-[200px];">
          <h1 className="text-[3.5rem] font-[bold] text-[#FF5C00] tracking-widest inline-block pb-2.5 border-b-4 border-b-[#FF5C00] border-solid"
          style={{ fontFamily: 'Orbitron'}}
          >FAQ</h1>
        </div>
        
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col gap-[30px] min-h-[600px] md:flex-row md:gap-x-[30px] md:items-stretch">
            <div className="flex-1 flex flex-col gap-5">
              {leftFaqs.map((faq, index) => (
                <div
                  key={`left-${index}`}
                  onClick={() => toggleFAQ(`left-${index}`)}
                  style={{
                      backgroundColor: openIndex === `left-${index}` ? "rgba(255, 92, 0, 0.1)" : "transparent"
                    }}
                  className={`bg-[rgba(0,0,0,0)] cursor-pointer transition-all duration-[0.02s] ease-[ease] relative rounded-lg  hover:bg-[rgba(255,92,0,0.1)] ${openIndex === `left-${index}` ? "border-0" : "border-2 border-solid border-[rgba(99,92,92,1)]"}`}
                >
                  <div className="flex items-start justify-between gap-4 px-6 py-5 hover:bg-[rgba(255,92,0,0.15)] group"
                    style={{
                      zIndex: 5,
                      position: "relative", // important so zIndex works
                      border: openIndex === `left-${index}` ? "3px solid #fd6d38ce" : "none",
                      borderRadius: openIndex === `left-${index}` ? "8px" : "0",
                      boxShadow:
                        openIndex === `left-${index}`
                        ? "0 0 15px rgba(255, 92, 0, 0.5)" // glowing shadow
                        : "none",
                      backgroundColor: openIndex === `left-${index}` ? "rgba(0,0,0,0.8)" : "transparent", // optional for contrast
                      transition: "all 0.3s ease"
                     }}
                  >
                  <span className="text-white text-[1.2rem] font-medium leading-normal flex-1">{faq.question}</span>
                    <div className="w-8 h-8 flex flex-col items-center justify-center text-[#FF5C00] text-2xl font-light ease-[ease] pb-[2.5px] rounded-[50%] border-2 border-solid border-[#FF5C00] transition-all duration-300 group-hover:bg-[#FF5C00] group-hover:text-black">
                      {openIndex === `left-${index}` ? '−' : '+'}
                    </div>
                  </div>
                  {openIndex === `left-${index}` && (
                    <div className="bg-[rgba(26,10,0,0)] rounded mx-6 my-5 p-5 border-l-[3px] border-l-[#FF5C00] border-solid">
                      <div className="text-[#d0d0d0] text-[0.95rem] leading-[1.7] animate-[fadeIn_0.3s_ease]" >{faq.answer}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex-1 flex flex-col gap-5">
              {rightFaqs.map((faq, index) => (
                <div
                  key={`right-${index}`}
                  onClick={() => toggleFAQ(`right-${index}`)}
                  style={{
                      backgroundColor: openIndex === `right-${index}` ? "rgba(255, 92, 0, 0.1)" : "transparent"
                    }}
                  className={`bg-[rgba(0,0,0,0)] cursor-pointer transition-all duration-[0.02s] ease-[ease] relative rounded-lg  hover:bg-[rgba(255,92,0,0.1)] ${openIndex === `right-${index}` ? "border-0" : "border-2 border-solid border-[rgba(99,92,92,1)]"}`}
                >
                  <div className="flex items-start justify-between gap-4 px-6 py-5 hover:bg-[rgba(255,92,0,0.15)] group" 
                    
                    style={{
                      zIndex: 5,
                      position: "relative", // important so zIndex works
                      border: openIndex === `right-${index}` ? "3px solid #ff6b35" : "none",
                      borderRadius: openIndex === `right-${index}` ? "8px" : "0",
                      boxShadow:
                        openIndex === `right-${index}`
                        ? "0 0 15px rgba(255, 92, 0, 0.7)" // glowing shadow
                        : "none",
                      backgroundColor: openIndex === `right-${index}` ? "rgba(0,0,0,0.8)" : "transparent", // optional for contrast
                      transition: "all 0.3s ease"
                     }}
                  >
                    <span className="text-white text-[1.2rem] font-medium leading-normal flex-1">{faq.question}</span>
                    <div className="w-8 h-8 flex flex-col items-center justify-center text-[#FF5C00] text-2xl font-light ease-[ease] pb-[2.5px] rounded-[50%] border-2 border-solid border-[#FF5C00] transition-all duration-300 group-hover:bg-[#FF5C00] group-hover:text-black">
                      {openIndex === `right-${index}` ? '−' : '+'}
                    </div>
                  </div>
                  {openIndex === `right-${index}` && (
                    <div className="bg-[rgba(26,10,0,0)] rounded mx-6 my-5 p-5 border-l-[3px] border-l-[#FF5C00] border-solid">
                      <div className="text-[#d0d0d0] text-[0.95rem] leading-[1.7] animate-[fadeIn_0.3s_ease]">{faq.answer}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ;
