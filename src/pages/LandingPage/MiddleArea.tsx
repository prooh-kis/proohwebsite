import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Landing } from "./Landing";

export const MiddleArea: React.FC = () => {
  const dispatch = useDispatch<any>();

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Landing />
    </div>
  );
};
