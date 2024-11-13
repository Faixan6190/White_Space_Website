// import Image from "next/image";
// import React from "react";
// import Icon from "../assets/Icon.png";

// const CustomiseItToYourNeeds = () => {
//   return (
//     <>
//       <section>
//         <div className="w-[1440px] h-[779.3px] top-[2878.15px] px-[32px] py-[140px] gap-[60px] flex items-center">
//           <div className="w-[670px] h-[499.3px] gap-[4px] bg-[#C4DEFD]"></div>
//           <div className="w-[646px] h-[407px] gap-[60px]">
//             <div className="w-[646px] h-[174px] font-bold text-7xl leading-[87.14px] ">
//               <h1>Customise it to your needs</h1>
//             </div>
//             <div className="w-[646px] h-[90px] font-normal text-[18px] leading-7 pt-6">
//               <p>
//                 Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your
//                 own scripts and plugins using the Extension API.
//               </p>
//               <div className="w-[164px] h-[59px] rounded-[8px] px-[40px] py-[20px] gap-[10px] bg-[#4F9CF9] text-white mt-10 flex items-center space-x-2">
//                 <button>Let's Go</button>
//                 <Image className="ml-3" src={Icon} alt="Icon" width={17} height={17} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CustomiseItToYourNeeds;

import Image from "next/image";
import React from "react";
import Icon from "../assets/Icon.png";

const CustomiseItToYourNeeds = () => {
  return (
    <section className="bg-white py-12 lg:py-24 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="bg-blue-200 w-[670px] h-[499.3px]"></div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">Customise it to your needs</h1>
          <p className="text-base lg:text-lg text-gray-700 leading-7">
            Customise the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own
            scripts and plugins using the Extension API.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg flex items-center space-x-2 transition duration-200">
            <span>Let's Go</span>
            <Image src={Icon} alt="Icon" width={17} height={17} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomiseItToYourNeeds;
