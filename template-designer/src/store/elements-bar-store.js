import { createSlice } from "@reduxjs/toolkit";


const elementsBarSlice = createSlice(
 {  
    name: 'elementsBar',
    initialState: {
        currentElement: null,
        allElements: [],
        lastRefreshTime: null,
    },
    reducers: {
        setCurrentElement(state, action) {
            state.currentElement = action.payload;
        },
        setAllElements(state, action) {
            state.allElements = action.payload;
        },
        setLastRefreshTime(state, action) {
            state.lastRefreshTime = action.payload;
        },
    }
}
);

export const elementsBarActions = elementsBarSlice.actions;

export default elementsBarSlice;