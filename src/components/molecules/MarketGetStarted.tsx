import { marketImage } from "../../assets";

export const MarketGetStarted = () => {
  return (
    <div className="bg-[#129BFF] h-auto sm:h-[400px] lg:h-[460px] w-full px-4 sm:px-10 lg:px-20 py-10 mt-10 rounded-[19px]">
      <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between">
        <div className="flex flex-col max-w-full sm:max-w-md lg:max-w-lg text-center sm:text-left">
          <h1
            className="text-[#FFFFFF] text-sm sm:text-base lg:text-[16px] mt-4 sm:mt-8 font-medium 
            leading-[20px] sm:leading-[22px] lg:leading-[24px] 
            tracking-[0.15em] sm:tracking-[0.18em] lg:tracking-[0.21em]"
          >
            <i className="fi fi-sr-sparkles text-[#FFFFFF] text-[20px]"></i>{" "}
            offer for advertiser
          </h1>
          <h1
            className="text-[#FFFFFF] text-lg sm:text-2xl lg:text-[48px] mt-4 sm:mt-8 font-semibold 
            leading-[36px] sm:leading-[40px] lg:leading-[51.84px] 
            tracking-[-0.01em] sm:tracking-[-0.015em] lg:tracking-[-0.02em]"
          >
            Plan Your Campaign In Just A Few Clicks
          </h1>
          <h1
            className="text-[#FFFFFF] text-sm sm:text-base lg:text-[16px] my-4 sm:my-8 font-normal 
            leading-[20px] sm:leading-[22px] lg:leading-[24px] 
            tracking-[-0.01em] sm:tracking-[-0.015em] lg:tracking-[-0.02em]"
          >
            Our platform helps your business in managing expenses. These are
            some of the reasons why you should use our platform.
          </h1>
          <button
            className="bg-[#FFFFFF] text-[#129BFF] rounded-full text-[14px] sm:text-[20px] font-bold 
            hover:bg-black hover:text-[#FFFFFF] hover:text-[18px] w-[163px] h-[50px] mx-auto sm:mx-0"
          >
            Know More
          </button>
        </div>
        {/* Hide Image on Mobile */}
        <div className="hidden sm:block w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto sm:h-[400px]">
          <img
            src={marketImage}
            alt="Market"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};
