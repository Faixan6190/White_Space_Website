// import Image from "next/image";
// import React from "react";
// import illustration from "../assets/Illustration.png";

// const CustomiseItToYourNeed = () => {
//   return (
//     <>
//       <section>
//         <div className="w-[1440px] h-[759px] top-[2119.15px] px-[32px] py-[140px] gap-[98px] bg-[#043873]">
//           <div className="w-[592px] h-[294px] gap-[60px]">
//             <div className="w-[592px] h-[87px] font-bold text-7xl text-white">
//               <h1>Use as Extension</h1>
//             </div>
//             <div className="w-[592px] h-[60px] font-normal text-lg text-white">
//               <p>
//                 Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
//               </p>
//             </div>
//             <div className="w-[176px] h-[63px] rounded-[8px] px-[40px] py-[20px] gap-[10px] bg-[#4F9CF9]">
//               <button>Let's Go</button>
//             </div>
//           </div>
//         </div>
//         {/* Second section */}
//         <div className="w-[686px] h-[479px] gap-3">
//           <Image src={illustration} alt="illustration" />
//         </div>
//       </section>
//     </>
//   );
// };

// export default CustomiseItToYourNeed;

import Image from "next/image";
import React from "react";
import illustration from "../assets/Illustration.png";

const CustomiseItToYourNeed = () => {
  return (
    <section className="bg-[#043873] py-12 lg:py-28 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left text-white space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold">Use as Extension</h1>
          <p className="text-base lg:text-lg">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
            Let's Go
          </button>
        </div>
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Image src={illustration} alt="Illustration" width={686} height={479} className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default CustomiseItToYourNeed;
