import { createContactsThunk, deleteContactsThunk, getContactsThunk } from "./thunks"

const arrThunk = [createContactsThunk, deleteContactsThunk, getContactsThunk]

export const thunkFunction = (type)=>arrThunk.map(el=>el[type])

export const handlePending = (state) => {
  state.isLoading = true
}
export const handleRejected = (state, action) => {
  state.isLoading = false
  state.error = action.payload
}
export const handleFulfilled = (state) => {
  state.isLoading = false
  state.error = ''
}
   export const handleFulfilledGet = (state, action) => {
      // state.isLoading = false
      state.items = action.payload
      // state.error = ''
    }
  export const handleFulfilledCreate = (state, action) => {
      // state.isLoading = false
      state.items.push(action.payload)
      // state.error = ''
        }
  export  const handleFulfilledDelete = (state, action) => {
      // state.isLoading = false
      state.items = state.items.filter(item => item.id!==action.payload.id)
      // state.error = ''
    }
