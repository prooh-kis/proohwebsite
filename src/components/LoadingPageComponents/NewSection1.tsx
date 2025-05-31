import { useNavigate } from "react-router-dom";
import ButtonInput from "../../components/atoms/ButtonInput";
import { LandingPageTextContent } from "../../constants/textContentConstants";

export const NewSection1 = () => {
  const navigate = useNavigate();
  return (
    <div className="z-10 flex flex-col justify-center items-center">
      <h1 className="text-[12px] font-custom text-[#668195] text-center  tracking-[.24rem]">
        {LandingPageTextContent?.section1?.heading}
      </h1>
      <h1
        className="pb-8 word inline-block z-10 font-custom font-semibold text-[24px] sm:text-[40px] md:text-[60px] lg:text-[90px] text-[#1E376E] 
      leading-[32px] sm:leading-[44px] md:leading-[72px] lg:leading-[90px] tracking-[-0.3rem] align-center text-center"
      >
        experience the {<br />} most{" "}
        <span className="font-cursive font-normal tracking-[-0.3rem] text-[#129BFF]">
          advanced
        </span>{" "}
        dooh <br /> advertising{" "}
        <span className="text-[#3B82F6] animate-pulse">...</span>
      </h1>
      <p
        className="w-[70%] text-[20px] text-center sm:text-[14px] md:text-[16px] lg:text-[20px] text-[#4C6590] my-4 
        leading-[22px] sm:leading-[26px] md:leading-[28px] lg:leading-[29px] tracking-normal"
      >
        {LandingPageTextContent?.section1?.para1}
      </p>
      <div className="z-10 mt-8 md:mt-8 w-1/4 flex items-center justify-center gap-2">
        <ButtonInput
          size="large"
          // icon={<i className="fi fi-sr-megaphone flex items-center" />}
          rounded="medium"
          fullWidth={true}
          onClick={() => navigate("/sign-up")}
        >
          Get Started
        </ButtonInput>
        <ButtonInput
          size="large"
          variant="outline"
          // icon={<i className="fi fi-sr-megaphone flex items-center" />}
          rounded="medium"
          onClick={() => {}}
        >
          Sales
        </ButtonInput>
      </div>
    </div>
  );
};
