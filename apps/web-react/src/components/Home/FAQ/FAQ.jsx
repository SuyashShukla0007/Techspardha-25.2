import React, { useState, useRef, useEffect } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import TechFAQ from "./TechFAQ.png";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const itemRefs = useRef({});

  const leftFaqs = [
    {
      question: "When will Techspardha'25 2.0 take place?",
      answer:
        "Techspardha'25 2.0 is scheduled to take place from March 15-17, 2025. This three-day tech festival will feature cutting-edge competitions, workshops, and networking opportunities for tech enthusiasts worldwide.",
    },
    {
      question: "What are the registration requirements?",
      answer:
        "Registration requires a valid student ID, contact information, and completion of the online registration form. Some events may have additional specific requirements.",
    },
    {
      question: "What technology domains are covered?",
      answer:
        "Techspardha covers various domains including AI/ML, Web Development, Robotics, IoT, Cybersecurity, and more. Check our events page for detailed information.",
    },
    {
      question: "Are there cash prizes for winners?",
      answer:
        "Yes! We offer exciting cash prizes for winners across various competitions. Prize details will be announced for each event.",
    },
  ];

  const rightFaqs = [
    {
      question: "Can I participate in multiple events?",
      answer:
        "Yes, you can participate in multiple events as long as the schedules don't overlap. Check the event timeline to plan your participation.",
    },
    {
      question: "What about accommodation and meals?",
      answer:
        "Accommodation arrangements can be made for outstation participants. Meals will be provided during the event. Contact us for detailed information.",
    },
    {
      question: "Are there opportunities for networking?",
      answer:
        "Absolutely! Techspardha provides numerous networking opportunities with industry professionals, speakers, and fellow participants through workshops, talks, and social events.",
    },
    {
      question: "How can I stay updated with event details?",
      answer:
        "Follow us on our social media channels, check our website regularly, and subscribe to our newsletter for the latest updates and announcements.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex && itemRefs.current[openIndex]) {
      itemRefs.current[openIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [openIndex]);

  const renderFAQ = (faq, key) => (
    <div
      key={key}
      ref={(el) => (itemRefs.current[key] = el)}
      onClick={() => toggleFAQ(key)}
      className={`cursor-pointer overflow-hidden rounded-lg relative transition-all duration-700 ease-in-out ${openIndex === key
          ? "bg-[rgba(255,92,0,0.1)] border-0"
          : "bg-transparent border-2 border-solid border-[rgba(99,92,92,1)] hover:bg-[rgba(255,92,0,0.1)]"
        }`}
      style={{
        outline: "none",
        boxShadow: "none",
      }}
    >

      <div
        className="flex items-start justify-between gap-4 px-5 py-4 hover:bg-[rgba(255,92,0,0.15)] group"
        style={{
          border:
            openIndex === key ? "2px solid #ff5c00" : "none",
          borderRadius: openIndex === key ? "8px" : "0",
          backgroundColor:
            openIndex === key ? "rgba(0,0,0,0.8)" : "transparent",
          transition:
            "box-shadow 0.4s ease, background-color 0.4s ease, transform 0.4s ease",
        }}
      >
        <span className="text-white text-[1.1rem] font-medium leading-snug flex-1">
          {faq.question}
        </span>


        <div className="flex items-center justify-center text-[#FF5C00] text-2xl rounded-full transition-all duration-300  group-hover:bg-[#FF5C00] group-hover:text-black">
          {openIndex === key ? (
            <CiCircleMinus className="transition-all duration-300 group-hover:text-black" size={30} />
          ) : (
            <CiCirclePlus className="transition-all duration-300 group-hover:text-black" size={30} />
          )}
        </div>
      </div>


      <div
        className={`transition-[max-height,opacity] duration-700 ease-in-out overflow-hidden ${openIndex === key ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-[rgba(26,10,0,0)] rounded mx-5 my-3 p-4 border-l-[3px] border-l-[#FF5C00] border-solid">
          <div className="text-[#d0d0d0] text-[0.95rem] leading-relaxed">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5 py-10 bg-cover bg-center gap-12"
      style={{ backgroundImage: `url(${TechFAQ})` }}
    >
      <div className="text-center">
        <h1
          className="text-[3.5rem] font-bold text-[#FF5C00] tracking-widest inline-block pb-2.5 border-b-4 border-b-[#FF5C00] border-solid"
          style={{ fontFamily: "Orbitron" }}
        >
          FAQ
        </h1>
      </div>

      <div className="w-full max-w-[1200px]">
        <div className="flex flex-col gap-[25px] min-h-[600px] md:flex-row md:gap-x-[30px] md:items-stretch">
          <div className="flex-1 flex flex-col gap-4">
            {leftFaqs.map((faq, index) =>
              renderFAQ(faq, `left-${index}`)
            )}
          </div>
          <div className="flex-1 flex flex-col gap-4">
            {rightFaqs.map((faq, index) =>
              renderFAQ(faq, `right-${index}`)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
