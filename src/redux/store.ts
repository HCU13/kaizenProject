import {configureStore} from '@reduxjs/toolkit';
import TagsSlice from './slices/TagsSlice';
import promotionSlice from './slices/PromotionSlice';
import promotionDetails from './slices/PromotionDetails';
const store = configureStore({
  reducer: {
    tags: TagsSlice,
    promotion: promotionSlice,
    promotionDetails: promotionDetails,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
