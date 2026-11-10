import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IPortfolioLandingPageState} from "../types";

export const initialState: IPortfolioLandingPageState = {
    theme: localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
    currentBlock: 'about',
};

export const PortfolioLandingPageStoreSlice = createSlice({
    name: 'PortfolioLandingPageStore',
    initialState,
    reducers: {
        setTheme : (state, action: PayloadAction<'light' | 'dark'>) => {
            state.theme = action.payload
        },
        setCurrentBlock : (state, action: PayloadAction<'about' | 'skills' | 'portfolio'>) => {
            state.currentBlock = action.payload
        },
    },
});

export const {
    setTheme,
    setCurrentBlock
     } = PortfolioLandingPageStoreSlice.actions;

export default PortfolioLandingPageStoreSlice.reducer;