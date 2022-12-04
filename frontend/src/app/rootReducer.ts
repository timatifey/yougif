import { combineReducers } from "@reduxjs/toolkit";
import { StageReducer } from "./stage/stageSlise";
import {FormDataReducer} from "./form-data/formDataSlice";

export const rootReducer = combineReducers({
    stage: StageReducer,
    formData: FormDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
