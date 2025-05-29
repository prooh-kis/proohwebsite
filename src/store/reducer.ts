// Screen Reducers
import * as screenReducers from "../reducers/screenReducers";

// Landing Reducers
import * as landingReducers from "../reducers/landingReducers";

import * as dataHeroReducers from "../reducers/dataHeroReducers";

import * as clientAgencyReducers from "../reducers/clientAgencyReducers";


export const rootReducer = {
    // Screen related
    landingPageDataGet: screenReducers.landingPageDataGetReducer,
    screensAudiencesDataGet: screenReducers.screensAudiencesDataGetReducer,



    // Landing
    saveContactDetails: landingReducers.saveContactDetailsForQueryReducer,


    // Data Hero
    heroDataRegister: dataHeroReducers.heroDataRegisterReducer,
    heroDataDetails: dataHeroReducers.getHeroDataDetailsReducer,
    audienceDataSave: dataHeroReducers.audienceDataSaveReducer,
    audienceDataGet: dataHeroReducers.audienceDataGetReducer,

    // Client/Agency
    allClientAgencyNamesListGet: clientAgencyReducers.allClientAgencyNamesListGetReducer,
    clientAgencyDetailsGet: clientAgencyReducers.clientAgencyDetailsGetReducer,
    clientAgencyDetailsAdd: clientAgencyReducers.clientAgencyDetailsAddGetReducer,

};