import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    isLoadingAdd: false,
    isLoadingDelete: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [addContact.pending](state) {
      state.isLoadingAdd = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoadingAdd = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoadingAdd = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.isLoadingDelete = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoadingDelete = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoadingDelete = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
