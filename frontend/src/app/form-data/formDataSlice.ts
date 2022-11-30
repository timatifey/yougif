import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Duration} from "../../../types/duration";

export interface formDataState {
    link: string;
    duration: Duration;
}

const initialState: formDataState = {
    link: '',
    duration: { start: 0, end: 0 },
}

export const formDataSlice = createSlice({
    name: 'form-data',
    initialState,
    reducers: {
        setLink: (state, action: PayloadAction<string>) => { state.link = action.payload; },
        setDuration: (state, action: PayloadAction<Duration>) => { state.duration = action.payload; },
        resetState: (state) => { state = initialState; }
    }
});

export const { setLink, setDuration, resetState } = formDataSlice.actions;
export const FormDataReducer = formDataSlice.reducer;
