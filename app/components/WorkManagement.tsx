import Image from "next/image";
import React from "react";
import Icon from "../assets/Icon.png";
import WorkTogetherImage from "../assets/Work Together Image.png";

const Main = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto px-6 lg:px-[32px] py-[140px]">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="flex flex-col lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Project Management</h1>
            <p className="text-base lg:text-lg text-gray-700 mb-6">
              Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app.
              Take photos with the mobile app and save them to a note.
            </p>
            <button className="w-[201px] bg-blue-500 text-white rounded-lg px-8 py-3 hover:bg-blue-600 transition duration-200 flex items-center space-x-2">
              Get Started
              <Image className="ml-3" src={Icon} alt="Icon" width={15} height={15} />
            </button>
          </div>
          <div className="lg:w-1/2 bg-blue-200 h-80 lg:h-[448px] flex items-center justify-center"></div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start mt-16 gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src={WorkTogetherImage}
              alt="Work Together Image"
              width={400}
              height={300}
              className="w-full max-w-xs lg:max-w-md"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Work Together</h1>
            <p className="text-base lg:text-lg text-gray-700 mb-6">
              With whitespace, share your notes with colleagues and collaborate on them. You can also publish a note to the
              internet and share the URL with others.
            </p>
            <button className="bg-blue-500 text-white rounded-lg px-8 py-3 hover:bg-blue-600 transition duration-200">
              Try it now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
