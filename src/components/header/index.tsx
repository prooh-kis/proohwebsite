import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { removeAllKeyFromLocalStorage } from "../../utils/localStorageUtils";
import {
  ADVERTISERS_PAGE,
  MEDIA_OWNER_PAGE,
  DATA_HERO,
} from "../../routes/routes";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<any>();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

  const BASE_URL = `${window.location.origin}`;

  const navLink = [
    { title: "Home", path: "/" },
    { title: "Products", path: `/products/Fly` },
    { title: "Advertisers", path: `${ADVERTISERS_PAGE}` },
    { title: "Media Owner", path: `${MEDIA_OWNER_PAGE}` },
    { title: "Data Hero", path: `${DATA_HERO}` },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 w-full h-16 flex items-center border-b border-gray-50 justify-between px-4 sm:px-10 bg-[#FFFFFF] z-50 font-custom">
      {/* Logo Section */}
      <div className="flex items-center">
        <div
          className="cursor-pointer p-2"
          onClick={() => {
            removeAllKeyFromLocalStorage();
            navigate("/");
          }}
        >
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            PROOH.AI
          </h1>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        {navLink.map((item) => (
          <div
            key={item.title}
            onClick={() => {
              if (item.title === "Research") {
                window.open(`${item.path}`);
              } else {
                navigate(`${item.path}`);
              }
            }}
            className={`cursor-pointer text-sm lg:text-base flex items-center hover:font-bold ${
              location.pathname === item.path
                ? "font-semibold text-[#0094FF] border-b-4 border-[#129BFF] py-5"
                : "py-1"
            }`}
          >
            {item.title}
          </div>
        ))}
      </div>
    </header>
  );
};
