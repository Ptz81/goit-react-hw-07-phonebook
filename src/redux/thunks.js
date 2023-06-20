import { createAsyncThunk } from "@reduxjs/toolkit";
import { createContacts, deleteContacts, fetchContacts } from "./api";

export const getContactsThunk = createAsyncThunk(
  "contacts/get",() => fetchContacts()
)
export const createContactsThunk = createAsyncThunk(
  "contacts/add", (data) => createContacts(data)
)
export const deleteContactsThunk = createAsyncThunk(
  "contacts/delete",(id) => deleteContacts(id)
)

