import { configureStore } from "@reduxjs/toolkit";
import toolBarSlice from "./tool-bar-store";
import elementsBarSlice from "./elements-bar-store";


const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false,}),
    reducer: {
        toolbar: toolBarSlice.reducer,
        elementsBar: elementsBarSlice.reducer,
     },
  });
  
  export default store;
  