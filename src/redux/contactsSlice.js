import { createSlice, nanoid } from "@reduxjs/toolkit"

const contactsInitialState = [
  { id: 0, name: "AAAAAA", number: '111111111111' },
  { id: 1, name: "BBBBBB", number: '222222222' },
  { id: 2, name: "CCCCCCCCCCCC", number: '33333333333' },
  { id: 3, name: "DDDDDDddDDD DD", number: '444444444' },
  { id: 4, name: "EEEE Eeeeeee", number: '55555555555' },
];

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: contactsInitialState,
	reducers: {
		addContact: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(valueObj) {
				return {
					...valueObj,
					id: nanoid(),
				}
			}
		},

		deleteContact(state, action) {
			const index = state.findIndex(contact => contact.id === action.payload);
			state.splice(index, 1);
		},
	},
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;