import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface gifLinkState {
    link: string,
}

const initialState: gifLinkState = {
    link: '',
}

export const gifLinkSlice = createSlice({
    name: 'gif-link',
    initialState,
    reducers: {
        setGifLink: (state, action: PayloadAction<string>) => { state.link = action.payload; }
    }
});

export const { setGifLink } = gifLinkSlice.actions;
export const GifLinkReducer = gifLinkSlice.reducer;
