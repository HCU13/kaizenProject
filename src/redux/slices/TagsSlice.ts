import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Get_Tags } from "../../api/apiClient";

// Tag tipini tanımlayın
interface Tag {
  id: string;
  name: string;
}

// State'in tipi
interface TagsState {
  tags: Tag[];
  status: "idle" | "loading" | "failed";
}

const initialState: TagsState = {
  tags: [],
  status: "idle",
};

// Async thunk
export const Get_Tags_Request = createAsyncThunk(
  "Get_Tags_Request",
  async () => {
    try {
      const response = await Get_Tags.get("/tags/list");
      console.log("res->", process.env.MAIN_API_URL);
      return response.data;
    } catch (error) {
      console.log("err->", error);
    }
  }
);

// Slice
const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Get_Tags_Request.pending, (state) => {
        state.status = "loading";
      })
      .addCase(Get_Tags_Request.fulfilled, (state, action) => {
        state.status = "idle";
        state.tags = action.payload;
      })
      .addCase(Get_Tags_Request.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default tagsSlice.reducer;
