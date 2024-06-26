import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6658dc30de346625136ab775.mockapi.io/'


export const getContactsList = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const addContact = createAsyncThunk(
    'contacts/addContacts',
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', newContact);

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const deleteContact = createAsyncThunk(
    'contacts/deleteContacts',
    async (contactId, thunkAPI) => {
        try {
            await axios.delete(`/contacts/${contactId}`);

            return contactId;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
