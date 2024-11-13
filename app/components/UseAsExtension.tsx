import Image from "next/image";
import React from "react";
import illustration from "../assets/Illustration.png";

const UseAsExtension = () => {
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

export default UseAsExtension;
