import axios from "axios";
import {
  GET_LANDING_PAGE_DATA_ERROR,
  GET_LANDING_PAGE_DATA_REQUEST,
  GET_LANDING_PAGE_DATA_SUCCESS,
  GET_SCREEN_DATA_BY_AUDIENCES_ERROR,
  GET_SCREEN_DATA_BY_AUDIENCES_REQUEST,
  GET_SCREEN_DATA_BY_AUDIENCES_SUCCESS,
} from "../constants/screenConstants";

const url = `${process.env.REACT_APP_PROOH_SERVER}/api/v2/screens`;

export const getLandingPageData = () => async (dispatch, getState) => {
  dispatch({
    type: GET_LANDING_PAGE_DATA_REQUEST,
  });
  try {
    const { data } = await axios.get(`${url}/landingPageData`);
    dispatch({
      type: GET_LANDING_PAGE_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_LANDING_PAGE_DATA_ERROR,
      payload: {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      },
    });
  }
};

export const getScreensAudiencesData =
  ({ id, markets }) =>
  async (dispatch, getState) => {
    dispatch({
      type: GET_SCREEN_DATA_BY_AUDIENCES_REQUEST,
      payload: markets,
    });

    try {
      const { data } = await axios.post(`${url}/audienceData`, {
        id,
        markets,
      });
      dispatch({
        type: GET_SCREEN_DATA_BY_AUDIENCES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_SCREEN_DATA_BY_AUDIENCES_ERROR,
        payload: {
          message: error.message,
          status: error.response?.status,
          data: error.response?.data,
        },
      });
    }
  };
