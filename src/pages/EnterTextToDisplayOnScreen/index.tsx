import ButtonInput from "../../components/atoms/ButtonInput";
import TextArea from "antd/es/input/TextArea";
import { ProohIcon } from "../../assets";
import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
const url = `${process.env.REACT_APP_PROOH_SERVER}/api/v2/screens`;

export function EnterTextToDisplayOnScreen() {
  const [value, setValue] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setLoading(true);
    if (value?.length === 0) {
      message.error("Please write some thing in text");
      return;
    }
    try {
      const { data } = await axios.post(`${url}/addText`, { text: `https://store-files-in-s3.s3.ap-south-1.amazonaws.com/${value}` });
      setLoading(false);
      message.success(
        "Successfully send, please wait it will display on screen"
      );
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong!");
      console.log(error);
    }
  };
  return (
    <div className="h-screen w-screen bg-[#FFD300] p-8">
      <div className="mt-16 flex flex-col justify-center  items-center text-[#000000]">
        <p className="text-center text-[#1A1A1A]  text-[20px] font-black">
          Welcome To
        </p>
        <img
          src={ProohIcon}
          alt="PROOH.AI"
          className="mt-2 h-[42px] w-[215px]"
        />
      </div>
      <div className="mt-16 flex flex-col gap-8">
        <TextArea
          maxLength={50}
          onChange={(e: any) => setValue(e.target.value)}
          value={value}
          placeholder="Enter Text To Display On Screen"
          autoSize={{ minRows: 4, maxRows: 1 }}
          className="text-[24px] rounded-lg "
        />
        <button
          onClick={handleClick}
          className="rounded-full py-4 text-[20px] font-semibold bg-[#000000] text-[#ffffff]"
        >
          Send
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
