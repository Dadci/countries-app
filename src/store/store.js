import { configureStore } from '@reduxjs/toolkit';
import SearchReducer from './searchSlice';
import ThemeReducer from './themeSlice'
import FilterReducer from './filterSlice';




const store = configureStore({
    reducer: {
        // Add your reducers here
        search: SearchReducer,
        theme: ThemeReducer,
        filter: FilterReducer
    },
});

export default store;
