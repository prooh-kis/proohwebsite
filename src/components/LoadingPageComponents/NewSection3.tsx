import ButtonInput from "../atoms/ButtonInput";
import { useNavigate } from "react-router-dom";
import { LandingPageTextContent } from "../../constants/textContentConstants";

export const NewSection3 = () => {
  const navigate = useNavigate();
  

  return (
    <div className="z-10 font-custom flex flex-col justify-center items-center pt-20">
      <p className="leading-[18px] tracking-[0.24em] font-medium text-center text-[12px] text-[#2D5087]">
        OUR SERVICES
      </p>
      <p className="text-[32px] text-[#2D5087] italic">
        OUR <span className="text-[#129BFF] font-bold">DOOH</span> Lineup
      </p>
      <h1 className="font-medium text-[48px] text-[#1E376E]">
        {LandingPageTextContent?.section3?.subHeading}
      </h1>
      <div className="grid grid-cols-3 gap-4 pt-8 px-36">
        {LandingPageTextContent?.section3?.products?.map((product: any) => (
          <div
            key={product.id}
            onClick={() => navigate(product.redirect)}
            className={`${product.bgColor} col-span-1 w-full rounded-[32px] shadow-sm border border-gray-100 p-8 hover:shadow-xl`}
          >
            {product.icon}
            <h1 className="text-[40px] text-[#2A3856] font-bold leading-[64px] tracking-[-.02em]">
              {product.heading}
            </h1>
            <h1 className="text-[16px] text-[#2A3856] font-normal leading-[42px] tracking-normal">
              {product.subHeading}
            </h1>
            <p className="text-[16px] text-[#2D5087] font-normal tracking-[-.02em]">
              {product.para}
            </p>
            <div className={`pt-4 `}>
              <button
                onClick={() => navigate(product.redirect)}
                className={`${product.textColor} bg-[#FFFFFF] ${product.hoverBg} ${product.hoverText} py-2 w-[50%] rounded-full flex justify-center font-semibold text-[16px]`}
              >
                <div className="flex gap-2 items-center">
                  <p>Know More</p>
                  <i className={`fi fi-br-arrow-up-right flex items-center`} />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
