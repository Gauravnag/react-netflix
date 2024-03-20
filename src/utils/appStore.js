import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import langReducer from "./langSlice";

const appStore = configureStore({
    reducer: {
        movie: movieReducer,
        gpt: gptReducer,
        supportLang: langReducer 
    }
})
export default appStore;