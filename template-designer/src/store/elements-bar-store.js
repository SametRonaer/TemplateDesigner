import { createSlice } from "@reduxjs/toolkit";
import { allElements, currentElement } from "../Constants/appConstants";


const elementsBarSlice = createSlice(
 {  
    name: 'elementsBar',
    initialState: {
        currentElement: null,
        allElements: [],
    },
    reducers: {
        setCurrentElement(state, action) {
            state.currentElement = action.payload;
        },
        setAllElements(state, action) {
            state.allElements = action.payload;
        },
    }
}
);

export const elementsBarActions = elementsBarSlice.actions;

export default elementsBarSlice;