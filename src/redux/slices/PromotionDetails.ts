import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Get_PromotionDetails} from '../../api/apiClient';

// Promosyon detayları tipi
interface PromotionDetails {
  id: string;
  name: string;
}

// State'in tipi
interface PromotionDetailsState {
  promotionDetails: PromotionDetails[];
  status: 'idle' | 'loading' | 'failed';
}

// Başlangıç durumu
const initialState: PromotionDetailsState = {
  promotionDetails: [],
  status: 'idle',
};

// Async thunk - promosyon detaylarını almak için
export const Get_PromotionDetails_Request = createAsyncThunk(
  'Get_PromotionDetails_Request',
  async ({Id}: {Id: number}) => {
    try {
      // API çağrısı yap
      const response = await Get_PromotionDetails.get(`/promotions?Id=${Id}`);
      return response.data; // Yanıt verisini döndür
    } catch (error) {
      console.log(error); // Hata varsa konsola yazdır
    }
  },
);

// Slice oluşturma
const PromotionDetails = createSlice({
  name: 'PromotionDetails',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Async thunk'ın durumlarına göre state'i güncelleme
    builder
      .addCase(Get_PromotionDetails_Request.pending, state => {
        state.status = 'loading'; // İstek beklemede
      })
      .addCase(Get_PromotionDetails_Request.fulfilled, (state, action) => {
        state.status = 'idle'; // İstek tamamlandı
        state.promotionDetails = action.payload; // Veriyi güncelle
      })
      .addCase(Get_PromotionDetails_Request.rejected, state => {
        state.status = 'failed'; // İstek reddedildi
      });
  },
});

export default PromotionDetails.reducer; // Reducer'ı dışa aktar
