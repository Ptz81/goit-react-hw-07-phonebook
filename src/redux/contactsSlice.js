import { createContacts, deleteContacts, fetchContacts } from "./api";
import { initialState } from "./initial";
import { handleFulfilled, handleFulfilledCreate, handleFulfilledDelete, handleFulfilledGet, handlePending, handleRejected, thunkFunction } from "./service";
const { createSlice, isAnyOf } = require("@reduxjs/toolkit");

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled,handleFulfilledGet)
      .addCase(createContacts.fulfilled, handleFulfilledCreate)
      .addCase(deleteContacts.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(
        ...thunkFunction('fulfilled')
      ), handleFulfilled
      )
      .addMatcher(isAnyOf(
        ...thunkFunction('pending')
      ), handlePending
      )
      .addMatcher(isAnyOf(
        ...thunkFunction('rejected')
      ), handleRejected
    )
  }
});
export const contactsReducer = contactsSlice.reducer;
