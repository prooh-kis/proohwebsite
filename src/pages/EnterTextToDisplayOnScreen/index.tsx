import ButtonInput from "../../components/atoms/ButtonInput";
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

  const handleClick = async () => {
    setLoading(true);
    if (value?.length === 0) {
      message.error("Please write some thing in text");
      return;
    }
    try {
      // const { data } = await axios.post(`${url}/addText`, { text: `https://store-files-in-s3.s3.ap-south-1.amazonaws.com/abcd?text=${value}&name=${name === "" ? "Anonymous": name}` });
      const { data } = await axios.post(`${url}/addText`, { text: `https://store-files-in-s3.s3.ap-south-1.amazonaws.com/abcd?text=${value}&name=${name === "" ? "Anonymous": name}&xAxis=8&yAxis=8&textColor=f70303&imgUrl=https://store-files-in-s3.s3.ap-south-1.amazonaws.com/ns_bg.jpg` });

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
    <div className="h-screen w-screen bg-[#f70303] p-8">
      <div className="mt-16 flex flex-col justify-center  items-center text-[#ffffff]">
        <p className="text-center text-[#ffffff]  text-[20px] font-black">
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
          onChange={(e: any) => setValue(e.target.value)}
          value={value}
          placeholder="Enter Text To Display On Screen"
          autoSize={{ minRows: 4, maxRows: 1 }}
          className="text-[24px] rounded-lg "
        />
        <TextArea
          maxLength={16}
          onChange={(e: any) => setName(e.target.value)}
          value={name}
          placeholder="Enter Name"
          autoSize={{ minRows: 1, maxRows: 1 }}
          className="text-[24px] rounded-lg "
        />
        <button
          onClick={handleClick}
          className="rounded-full py-4 text-[20px] font-semibold bg-[#ffffff] text-[#f70303]"
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
