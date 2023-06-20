import { initialState } from "./initial";
import { handleFulfilled, handleFulfilledCreate, handleFulfilledDelete, handleFulfilledGet, handlePending, handleRejected, thunkFunction } from "./service";
import { createContactsThunk, deleteContactsThunk, getContactsThunk } from "./thunks";
const { createSlice, isAnyOf } = require("@reduxjs/toolkit");


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      // .addCase(getContactsThunk.pending,handlePending)
      .addCase(getContactsThunk.fulfilled,handleFulfilledGet)
      // .addCase(getContactsThunk.rejected, handleRejected)
      // .addCase(createContactsThunk.pending, handlePending)
      .addCase(createContactsThunk.fulfilled, handleFulfilledCreate)
      // .addCase(createContactsThunk.rejected, handleRejected)
      // .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      // .addCase(deleteContactsThunk.rejected, handleRejected)
      .addMatcher(isAnyOf(
        ...thunkFunction('fulfilled')
        // getContactsThunk.fulfilled,
        // createContactsThunk.fulfilled,
        // deleteContactsThunk.fulfilled
      ), handleFulfilled
      )
      .addMatcher(isAnyOf(
        ...thunkFunction('pending')
        // getContactsThunk.pending,
        // createContactsThunk.pending,
        // deleteContactsThunk.pending
      ), handlePending
      )
      .addMatcher(isAnyOf(
        ...thunkFunction('rejected')
        // getContactsThunk.rejected,
        // createContactsThunk.rejected,
        // deleteContactsThunk.rejected
      ), handleRejected
    )
  }
});

// export const { newContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
