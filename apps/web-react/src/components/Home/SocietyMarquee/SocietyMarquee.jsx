import React from 'react';
import Marquee from 'react-fast-marquee';
import img from '../../../assets/societyLogos/seven.png';
import './SocietyMarquee.css'; // Import the CSS file for the blur effect

const SocietyMarquee = () => {
  return (
    <div className="pt-10">
  <p className="text-5xl text-center text-primary font-gta mb-10">Team Techspardha</p>

    <div className="marquee-container">


      {/* Marquee Content */}
      <Marquee className="marquee-content" direction="left" speed={75} gradient={true} gradientColor={[0,0,0,0]}>
        <div className="mx-24">
          <img src={img}  alt="Society Logo" />
        </div>
        <div className="mx-24">
          <img src={img}  alt="Society Logo" />
        </div>
        <div className="mx-24">
          <img src={img}  alt="Society Logo" />
        </div>
        <div className="mx-24">
          <img src={img}  alt="Society Logo" />
        </div>
        <div className="mx-24">
          <img src={img}  alt="Society Logo" />
        </div>
        <div className="mx-24">
          <img src={img}  alt="Society Logo" />
        </div>
        <div className="mx-24">
          <img src={img}  alt="Society Logo" />
        </div>
      </Marquee>

      
    </div>
    </div>
  );
};

export default SocietyMarquee;







// Image constants
// const societyLogos = [
//   '../../../assets/societyLogos/one.png',
//   '../../../assets/societyLogos/two.png',
//   '../../../assets/societyLogos/three.png',
//   '../../../assets/societyLogos/four.png',
//   '../../../assets/societyLogos/five.png',
//   '../../../assets/societyLogos/six.png',
//   '../../../assets/societyLogos/seven.png',
// ];



// const SocietyMarquee = () => {
//   return (
//     <div className="pt-10">
//       <p className="text-5xl text-center text-primary font-gta mb-10">Team Techspardha</p>

//       <div className="marquee-container">
//         {/* Marquee Content */}
//         <Marquee className="marquee-content" direction="left" speed={75} gradient={false}>
//           {societyLogos.map((logo, index) => (
//             <div key={index} className="mx-24">
//               <img src={logo} alt={`Society Logo ${index + 1}`} />
//             </div>
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// };

// export default SocietyMarquee;