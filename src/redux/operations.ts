import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://67c9a591102d684575c2efd1.mockapi.io/api/v1/";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (e: any) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact: any, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', contact);
        return response.data;
    } catch (e: any) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id: string, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data;
    } catch (e: any) {
        return thunkAPI.rejectWithValue(e.message);
    }
});