import React, { useEffect, useRef } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { removeAllKeyFromLocalStorage } from "../../utils/localStorageUtils";
import { CreateCampaignOption } from "../../components";
import { PageFooter } from "../../components/PageFooter";
import {
  HowItsWork,
  OurAdvertisingJourney,
  NewSection1,
  FeedBack,
  ProohCreator,
  ContactForm,
  FindUsOnGoogle,
  NewSection2,
  NewSection3,
  NewSection4,
} from "../../components/LoadingPageComponents";
import landingPageGrid from "../../assets/images/landingPageGrid.png";
import { getAllClientAgencyNames } from "../../actions/clientAgencyAction";
import { getLandingPageData } from "../../actions/screenAction";

export const Landing: React.FC = () => {
  const isMobile = window.innerWidth <= 768;
  const width = window.innerWidth;

  const dispatch = useDispatch<any>();
  const landingPageDataGet = useSelector(
    (state: any) => state.landingPageDataGet
  );
  const { data: landingPageData } = landingPageDataGet;

  const {
    loading: loadingClientAgencyData,
    error: errorClientAgencyData,
    data: clientAgencyData,
  } = useSelector((state: any) => state.allClientAgencyNamesListGet);

  useEffect(() => {
    dispatch(getLandingPageData());
    dispatch(getAllClientAgencyNames());
    removeAllKeyFromLocalStorage();
  }, [dispatch]);

  return (
    <div className="w-screen h-full bg-white overflow-y-auto overflow-x-hidden">
      <div className="relative w-full border-t">
        <img
          className="absolute h-full w-full px-20 mt-28"
          style={{ opacity: "75%" }}
          src={landingPageGrid}
          alt={"grid"}
        />
        <div className="px-8 pt-32 ">
          <NewSection1 />
        </div>
      </div>

      <div className="p-8">
        <NewSection2 />
        <NewSection3 />

        <NewSection4 />
      </div>

      <div className="px-8 ">
        <HowItsWork />
      </div>

      <div className="px-8 ">
        <OurAdvertisingJourney
          data={landingPageData}
          clientAgencyData={clientAgencyData}
        />
      </div>

      <div className="px-8 ">
        <ProohCreator />
      </div>

      <div className="px-8 ">
        <FeedBack />
      </div>

      <div className="px-8 ">
        <ContactForm />
      </div>

      <div className="px-8 ">
        <FindUsOnGoogle />
      </div>

      <div className="">
        <CreateCampaignOption />
      </div>

      <div className="">
        <PageFooter />
      </div>
    </div>
  );
};
