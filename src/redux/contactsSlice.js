const { createSlice, nanoid } = require("@reduxjs/toolkit");
const initialState = {
  items: [],
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    newContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ name, number }) => {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { newContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
