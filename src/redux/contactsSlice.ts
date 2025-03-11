import { createSlice } from "@reduxjs/toolkit";
import { Contact } from "../types/Contact";
import { fetchContacts, addContact, deleteContact } from "./operations";


const isPendingAction = (action: any) => {
    return action.type.endsWith("/pending");
}

const isRejectAction = (action: any) => {
    return action.type.endsWith("/rejected")
}

const handlePending = (state: { isLoading: boolean; }) => {
  state.isLoading = true;
};

const handleRejected = (state: { isLoading: boolean; error: string | null; }, action: any) => {
  state.isLoading = false;
  state.error = action.payload;
};

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
            .addMatcher(isPendingAction, handlePending)
            .addMatcher(isRejectAction, handleRejected)
            .addDefaultCase((state, action) => {
                console.log(action.type);
                if (action.type.startsWith("contacts/")) {
                    state.isLoading = false;
                    state.error = "Unknown action: " + action.type;
                }
            });
    },
});


export default contactsSlice.reducer;