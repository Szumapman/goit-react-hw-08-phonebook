import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Contact } from '../../types/Contact';
import BASE_URL from '../../constants/BaseURL';

axios.defaults.baseURL = BASE_URL;

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

export const editContact = createAsyncThunk('contacts/editContact', async ({ name, number, id }: { name: string, number: string, id: string }, thunkAPI) => {
    try {
        const response = await axios.patch(`/contacts/${id}`, { name, number });
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