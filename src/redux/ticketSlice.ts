import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface TicketState {
  tickets: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TicketState = {
  tickets: [],
  status: 'idle',
  error: null,
};

export const createTicket = createAsyncThunk(
  'tickets/createTicket',
  async (ticketData: any) => {
    const response = await axios.post(`${import.meta.env.VITE_API_BACK}tickets`, ticketData);
    return response.data;
  }
);

export const updateTicket = createAsyncThunk(
  'tickets/updateTicket',
  async ({ id, updates }: { id: string; updates: any }) => {
    const response = await axios.put(`${import.meta.env.VITE_API_BACK}tickets/${id}`, updates);
    return response.data;
  }
);

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTicket.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createTicket.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tickets.push(action.payload);
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to create ticket';
      })
      .addCase(updateTicket.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateTicket.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.tickets.findIndex(ticket => ticket._id === action.payload._id);
        if (index !== -1) {
          state.tickets[index] = action.payload;
        }
      })
      .addCase(updateTicket.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update ticket';
      });
  },
});

export default ticketSlice.reducer;
