import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./ContactsSlice";
import { filterReducer } from "./FilterSlice";


// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'


export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		filter: filterReducer,
	},
});