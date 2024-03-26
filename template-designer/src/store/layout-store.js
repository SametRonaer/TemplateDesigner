import { createSlice } from "@reduxjs/toolkit";
import { elementsList } from "../Constants/appConstants";


const layoutSlice = createSlice(
 {  
    name: 'layout',
    initialState: {
        currentElementsBarMode: elementsList
    },
    reducers: {
        setCurrentElementsBarMode(state, action) {
            state.currentElementsBarMode = action.payload;
        },
    }
}
);

export const layoutActions = layoutSlice.actions;

export default layoutSlice;