import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Get_Promotion} from '../../api/apiClient';

// Promotion tipini tanımlayın
interface Promotion {
  id: string;
  name: string;
}

// State'in tipi
interface PromotionState {
  promotion: Promotion[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PromotionState = {
  promotion: [],
  status: 'idle',
};

// Async thunk
export const Get_Promotion_Request = createAsyncThunk(
  'Get_Promotion_Request',
  async () => {
    try {
      const response = await Get_Promotion.get('/promotions/list?Channel=PWA');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

// Slice
const promotionSlice = createSlice({
  name: 'promotionSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(Get_Promotion_Request.pending, state => {
        state.status = 'loading';
      })
      .addCase(Get_Promotion_Request.fulfilled, (state, action) => {
        state.status = 'idle';
        state.promotion = action.payload;
      })
      .addCase(Get_Promotion_Request.rejected, state => {
        state.status = 'failed';
      });
  },
});

export default promotionSlice.reducer;
