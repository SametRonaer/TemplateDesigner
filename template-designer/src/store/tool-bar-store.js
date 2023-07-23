import { createSlice } from "@reduxjs/toolkit";
import { currentTool, currentToolTime } from "../Constants/appConstants";

const toolBarSlice = createSlice(
 {  
    name: 'toolBar',
    initialState: {
        currentTool: null,
        currentToolTime: null,
    },
    reducers: {
        setCurrentTool(state, action) {
            state.currentTool = action.payload[currentTool]
            state.currentToolTime = action.payload[currentToolTime]
        },
    }
}
);

export const toolBarActions = toolBarSlice.actions;

export default toolBarSlice;