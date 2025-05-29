import { useNavigate } from "react-router-dom";

interface PrimaryButtonProps {
  title?: string;
  rounded?: string;
  action?: any;
  width?: any;
  height?: any;
  disabled?: boolean;
  textSize?: any;
  reverse?: any;
  icon?: any;
}

export const PrimaryButton = ({
  icon,
  reverse,
  textSize,
  disabled = false,
  width,
  height,
  title,
  action,
  rounded,
}: PrimaryButtonProps) => {
  return (
    <div className="flex justify-center items-center">
      <button
        title={title || "plan_campaign"}
        type="submit"
        onClick={action}
        disabled={disabled}
        className={`
          px-4 py-2 font-custom
          ${width ? width : "w-[180px]"} flex items-center justify-center
          ${height ? height : "h-[48px]"}
          ${rounded} ${textSize ? textSize : "text-[16px]"}
          ${
            reverse
              ? "bg-[#FFFFFF] border border-[#00A0FA] text-primaryButton hover:bg-transparent hover:border-primaryButton hover:border-2 hover:text-primaryButton"
            : disabled
              ? "bg-gray-200 text-gray-500 hover:bg-gray-100 hover:border-gray-500 hover:border-2 hover:text-gray-800"
              : "bg-primaryButton font-semibold text-[#FFFFFF] hover:bg-[#D7D7D7] hover:border-primaryButton hover:border-2 hover:text-black"
          }
          transition-colors duration-300
        `}
      >
        {icon} {title}
      </button>
    </div>
  );
};
