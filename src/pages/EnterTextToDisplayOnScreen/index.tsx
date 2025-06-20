import TextArea from "antd/es/input/TextArea";
import { ProohIcon } from "../../assets";
import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
const url = `${process.env.REACT_APP_PROOH_SERVER}/api/v2/screens`;

export function EnterTextToDisplayOnScreen() {
  const [value, setValue] = useState<string>();
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const searchParams = new URLSearchParams(window.location.search);
  const company = searchParams.get("company"); // 'ottimo'
  const code = searchParams.get("code"); // '234567'

  const bgColor =
    company === "arc"
      ? "bg-[#fb8b01]"
      : company === "ottimo"
      ? "bg-[#f05c2c]"
      : company === "pioneer"
      ? "bg-[#ec3237]"
      : "bg-[#ec3237]";

  const textColor =
    company === "arc"
      ? "text-[#fb8b01]"
      : company === "ottimo"
      ? "text-[#f05c2c]"
      : company === "pioneer"
      ? "text-[#ec3237]"
      : "text-[#ec3237]";

  // console.log("company : code : bgColor", company, code, bgColor);

  const getURL = () => {
    switch (company) {
      case "arc":
        return "https://store-files-in-s3.s3.ap-south-1.amazonaws.com/685504bd5c289b51d4c35639_qr-arc2.jpeg";
        break;
      case "ottimo":
        return "https://store-files-in-s3.s3.ap-south-1.amazonaws.com/6855054b5c289b51d4c4355d_qr-ottimo2.jpeg";
        break;
      case "pioneer":
        return "https://store-files-in-s3.s3.ap-south-1.amazonaws.com/685505a95c289b51d4c4eebd_qr-pioneer1.jpeg";
        break;
      default:
        return "https://store-files-in-s3.s3.ap-south-1.amazonaws.com/ns_bg.jpg";
        break;
    }
  };

  const handleClick = async () => {
    setLoading(true);
    if (!value || value.length === 0) {
      message.error("Please write something in the text field");
      setLoading(false);
      return;
    }

    // console.log("ddddddddddd : ", {
    //   company,
    //   text: `https://store-files-in-s3.s3.ap-south-1.amazonaws.com/abcd?text=${value}&name=${
    //     name === "" ? "Anonymous" : name
    //   }&xAxis=0&yAxis=0&textColor=${code}&imgUrl=${getURL()}`,
    // });
    try {
      const { data } = await axios.post(`${url}/addText`, {
        company,
        text: `https://store-files-in-s3.s3.ap-south-1.amazonaws.com/abcd?text=${value}&name=${
          name === "" ? "Anonymous" : name
        }&xAxis=0&yAxis=0&textColor=${code}&imgUrl=${getURL()}`,
      });

      setLoading(false);
      message.success(
        "Successfully sent, please wait for it to display on screen"
      );
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <div className={`h-screen w-screen ${bgColor} p-8`}>
      <div className="mt-16 flex flex-col justify-center items-center text-white">
        <p className="text-center text-white text-[20px] font-black">
          Welcome To
        </p>
        <img
          src={ProohIcon}
          alt="PROOH.AI"
          className="filter grayscale invert contrast-100 mt-2 h-[42px] w-[215px]"
        />
      </div>
      <div className="mt-16 flex flex-col gap-8">
        <TextArea
          maxLength={50}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Enter Text To Display On Screen"
          autoSize={{ minRows: 4, maxRows: 1 }}
          className="text-[24px] rounded-lg"
        />
        <TextArea
          maxLength={16}
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter Name"
          autoSize={{ minRows: 1, maxRows: 1 }}
          className="text-[24px] rounded-lg"
        />
        <button
          onClick={handleClick}
          disabled={loading}
          className={`rounded-full py-4 text-[20px] font-semibold bg-white transition-colors duration-300 ${textColor}`}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
      {loading && (
        <div className="flex items-center justify-center py-8">
          <i className="fi fi-sr-rotate-right text-white text-[36px] flex items-center justify-center animate-spin"></i>
        </div>
      )}
    </div>
  );
}