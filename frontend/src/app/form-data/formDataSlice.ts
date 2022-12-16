import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Duration} from "../../../types/duration";

export interface formDataState {
    videoID: string;
    duration: Duration;
}

const initialState: formDataState = {
    videoID: '',
    duration: { start: 0, end: 0 },
}

export const formDataSlice = createSlice({
    name: 'form-data',
    initialState,
    reducers: {
        setVideoID: (state, action: PayloadAction<string>) => { state.videoID = action.payload; },
        setDuration: (state, action: PayloadAction<Duration>) => { state.duration = action.payload; },
        resetState: (state) => { state = initialState; }
    }
});

export const { setVideoID, setDuration, resetState } = formDataSlice.actions;
export const FormDataReducer = formDataSlice.reducer;
