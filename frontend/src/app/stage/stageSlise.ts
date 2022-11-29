import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface StageState {
    stage: number;
}

const initialState: StageState = {
    stage: 1,
}

export const stageSlice = createSlice({
    name: 'stage',
    initialState,
    reducers: {
        incrementStage: (state) => { state.stage++; },
        decrementStage: (state) => { state.stage--; },
        setStage: (state, action: PayloadAction<number>) => { state.stage = action.payload; }
    }
});

export const { incrementStage, decrementStage, setStage } = stageSlice.actions;
export const StageReducer = stageSlice.reducer;

