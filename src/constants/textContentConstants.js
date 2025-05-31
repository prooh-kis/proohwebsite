import { Fly, Planner, Layer } from "../assets";

export const LandingPageTextContent = {
  section1: {
    heading: "END - TO - END CAMPAIGN MANAGEMENT PLATFORM",
    subHeading: "",
    para1: `Prooh: India’s 1st "Audience Guarantee" DOOH Media Company, delivering
        data-driven planning, audience measurement, performance proof,
        and 100% cost transparency.`
  },
  section2: {
    subHeading: "Our platform helps your business in managing expenses. These are some ofthe reasons why you",
    challenges: [
      {
        id: 1,
        icon: (
          <i className="fi fi-sr-screen flex items-center text-white text-[24px]" />
        ),
        color: "bg-[#FF6224]",
        heading: "Slot Transparency",
        para: "Unprecedented access to 800+ OOH &DOOH media units via multiple purchase agreements media owners & through programmatic SSP integrations.",
      },
      {
        id: 2,
        icon: (
          <i className="fi fi-sr-screen flex items-center text-white text-[24px]" />
        ),
        color: "bg-[#09AC32]",
        heading: "Applies To Both Static & PDOOH",
        para: "Unprecedented access to 800+ OOH &DOOH media units via multiple purchase agreements media owners & through programmatic SSP integrations.",
      },
      {
        id: 3,
        icon: (
          <i className="fi fi-sr-screen flex items-center text-white text-[24px]" />
        ),
        color: "bg-[#4F39DF]",
        heading: "Applies To Both Static & PDOOH",
        para: "Unprecedented access to 800+ OOH &DOOH media units via multiple purchase agreements media owners & through programmatic SSP integrations.",
      },
      {
        id: 4,
        icon: (
          <i className="fi fi-sr-screen flex items-center text-white text-[24px]" />
        ),
        color: "bg-[#D186FF]",
        heading: "Applies To Both Static & PDOOH",
        para: "Unprecedented access to 800+ OOH &DOOH media units via multiple purchase agreements media owners & through programmatic SSP integrations.",
      },
    ]
  },
  section3: {
    subHeading: "Built For Modern Advertising",
    products: [
      {
        id: 1,
        icon: <img src={Layer} alt="layer" />,
        textColor: "text-[#438061]",
        bgColor: "bg-[#F0FFEB]",
        buttonBg: "bg-[#438061]",
        hoverText: "hover:text-[#F0FFEB]",
        hoverBg: "hover:bg-[#438061]",
        heading: "Layer",
        subHeading: "DATA MANAGEMENT PLATFORM",
        para: "Unprecedented access to 800+ OOH &DOOH media units via multiple purchase agreements media owners & through programmatic SSP integrations.",
        redirect: "/products/Layer",
      },
      {
        id: 2,
        icon: <img src={Fly} alt="fly" />,
        textColor: "text-[#4E64EE]",
        bgColor: "bg-[#F2F4FF]",
        hoverText: "hover:text-[#F2F4FF]",
        hoverBg: "hover:bg-[#4E64EE]",
        heading: "Fly",
        subHeading: "CONTENT MANAGEMENT SYSTEM",
        para: "Unprecedented access to 800+ OOH &DOOH media units via multiple purchase agreements media owners & through programmatic SSP integrations.",
        redirect: "/products/Fly",
      },
      {
        id: 3,
        icon: <img src={Planner} alt="planner" />,
        textColor: "text-[#129BFF]",
        bgColor: "bg-[#EEFAFF]",
        hoverText: "hover:text-[#EEFAFF]",
        hoverBg: "hover:bg-[#129BFF]",
        heading: "Planner",
        subHeading: "DOOH PLANNING TOOL",
        para: "Unprecedented access to 800+ OOH &DOOH media units via multiple purchase agreements media owners & through programmatic SSP integrations.",
        redirect: "/products/Planner",
      },
    ]
  }
}
