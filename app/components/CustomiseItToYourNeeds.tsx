import Image from "next/image";
import React from "react";
import Icon from "../assets/Icon.png";

const CustomiseItToYourNeeds = () => {
  return (
    <>
      <section>
        <div className="w-[1440px] h-[779.3px] top-[2878.15px] px-[32px] py-[140px] gap-[60px] flex items-center">
          <div className="w-[670px] h-[499.3px] gap-[4px] bg-[#C4DEFD]"></div>
          <div className="w-[646px] h-[407px] gap-[60px]">
            <div className="w-[646px] h-[174px] font-bold text-7xl leading-[87.14px] ">
              <h1>Customise it to your needs</h1>
            </div>
            <div className="w-[646px] h-[90px] font-normal text-[18px] leading-7 pt-6">
              <p>
                Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your
                own scripts and plugins using the Extension API.
              </p>
              <div className="w-[164px] h-[59px] rounded-[8px] px-[40px] py-[20px] gap-[10px] bg-[#4F9CF9] text-white mt-10 flex items-center space-x-2">
                <button>Let's Go</button>
                <Image className="ml-3" src={Icon} alt="Icon" width={17} height={17} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomiseItToYourNeeds;
