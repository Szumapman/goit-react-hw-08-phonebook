import { createSlice } from "@reduxjs/toolkit";
import { Contact } from "../../types/Contact";
import { fetchContacts, addContact, deleteContact, editContact } from "./operations";
import { isPendingAction, isRejectAction, handlePending, handleRejected } from "../../utils/actionUtils";
import { logOut } from "../auth/operations";


const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: <Contact[]>[],
        isLoading: false,
        error: <null | string>null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                const index = state.items.findIndex(contact => contact.id === action.payload.id);
                state.items.splice(index, 1);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.items = [];
                state.isLoading = false;
                state.error = null;
            })
            .addCase(editContact.fulfilled, (state, action) => {
                const index = state.items.findIndex(contact => contact.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = { ...state.items[index], ...action.payload };
                }
                state.isLoading = false;
                state.error = null;
            })
            .addMatcher(isPendingAction, handlePending)
            .addMatcher(isRejectAction, handleRejected)
            .addDefaultCase((state, action) => {
                if (action.type.startsWith("contacts/")) {
                    state.isLoading = false;
                    state.error = "Unknown action: " + action.type;
                }
            });
    },
});


export default contactsSlice.reducer;