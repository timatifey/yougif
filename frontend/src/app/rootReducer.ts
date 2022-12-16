import { combineReducers } from "@reduxjs/toolkit";
import { StageReducer } from "./stage/stageSlise";
import {FormDataReducer} from "./form-data/formDataSlice";
import {GifLinkReducer} from "./gif-link/gifLinkSlice";

export const rootReducer = combineReducers({
    stage: StageReducer,
    formData: FormDataReducer,
    gifLink: GifLinkReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
