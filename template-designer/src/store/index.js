import { configureStore } from "@reduxjs/toolkit";
import toolBarSlice from "./tool-bar-store";
import elementsBarSlice from "./elements-bar-store";
import layoutSlice from "./layout-store";


const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false,}),
    reducer: {
        toolbar: toolBarSlice.reducer,
        elementsBar: elementsBarSlice.reducer,
        layout: layoutSlice.reducer,
     },
  });
  
  export default store;
  