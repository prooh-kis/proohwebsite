import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  MediaOwnerPage,
  MarketersPage,
  ProductsPage,
  LandingPage,
  PlayLiveUrl,
  BrandAgencyPage,
  PageNotFound,
  DataHeroPage,
} from "../pages";

import {
  HOME,
  ADVERTISERS_PAGE,
  MEDIA_OWNER_PAGE,
  PLAY_LIVE_URL,
  BRAND_AGENCY_PAGE,
  PRODUCTS,
  DATA_HERO,
} from "./routes";
import { PublicRoute } from "./PublicRoute";
import { AppDashBoardLayout } from "../layout/AppDashBoardLayout";
import Engagement from "../pages/Engagement";

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={HOME}
          element={
            <PublicRoute>
              <LandingPage />
            </PublicRoute>
          }
        />
        <Route
          path={PRODUCTS}
          element={
            <PublicRoute>
              <ProductsPage />
            </PublicRoute>
          }
        />

        <Route
          path={MEDIA_OWNER_PAGE}
          element={
            <PublicRoute>
              <MediaOwnerPage />
            </PublicRoute>
          }
        />

        <Route
          path={ADVERTISERS_PAGE}
          element={
            <PublicRoute>
              <MarketersPage />
            </PublicRoute>
          }
        />

        <Route
          path={DATA_HERO}
          element={
            <PublicRoute>
              <DataHeroPage />
            </PublicRoute>
          }
        />

        <Route
          path={"/engagement"}
          element={
            <AppDashBoardLayout className="bg-[#D3D3D310] pt-16">
              <Engagement />
            </AppDashBoardLayout>
          }
        />
        <Route path={PLAY_LIVE_URL} element={<PlayLiveUrl />} />
        <Route path={BRAND_AGENCY_PAGE} element={<BrandAgencyPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
