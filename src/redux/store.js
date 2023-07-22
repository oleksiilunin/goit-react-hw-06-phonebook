import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice.js";
import { filterReducer } from "./filterSlice.js";


// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'


export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		filter: filterReducer,
	},
});