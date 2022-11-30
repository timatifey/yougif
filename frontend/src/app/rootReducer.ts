import { combineReducers } from "@reduxjs/toolkit";
import { StageReducer } from "./stage/stageSlise";

export const rootReducer = combineReducers({
    stage: StageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
