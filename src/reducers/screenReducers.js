import { saveDataOnLocalStorage } from "../utils/localStorageUtils";
import {
  GET_LANDING_PAGE_DATA_ERROR,
  GET_LANDING_PAGE_DATA_REQUEST,
  GET_LANDING_PAGE_DATA_SUCCESS,
  GET_SCREEN_DATA_BY_AUDIENCES_ERROR,
  GET_SCREEN_DATA_BY_AUDIENCES_REQUEST,
  GET_SCREEN_DATA_BY_AUDIENCES_SUCCESS,
} from "../constants/screenConstants";
import {
  AUDIENCE_DATA,
  LANDING_PAGE_DATA,
} from "../constants/localStorageConstants";

export function landingPageDataGetReducer(state = {}, action) {
  switch (action.type) {
    case GET_LANDING_PAGE_DATA_REQUEST:
      return { loading: true };
    case GET_LANDING_PAGE_DATA_SUCCESS:
      saveDataOnLocalStorage(LANDING_PAGE_DATA, action.payload);
      return {
        loading: false,
        data: action.payload,
      };
    case GET_LANDING_PAGE_DATA_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export function screensAudiencesDataGetReducer(state = [], action) {
  switch (action.type) {
    case GET_SCREEN_DATA_BY_AUDIENCES_REQUEST:
      return { loading: true };
    case GET_SCREEN_DATA_BY_AUDIENCES_SUCCESS:
      const campaign = action.payload;
      const saveData = {};
      saveData[campaign.id] = campaign;
      saveDataOnLocalStorage(AUDIENCE_DATA, saveData);
      return {
        loading: false,
        data: action.payload,
      };
    case GET_SCREEN_DATA_BY_AUDIENCES_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
