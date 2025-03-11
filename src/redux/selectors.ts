import { createSelector } from "@reduxjs/toolkit";
import { Contact } from "../types/Contact";

export const selectContacts = (state: any) => state.contacts.items;
export const selectIsLoading = (state: any) => state.contacts.isLoading;
export const selectError = (state: any) => state.contacts.error;
export const selectFilter = (state: any) => state.filter.filteredName;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => contacts.filter((contact: Contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
)