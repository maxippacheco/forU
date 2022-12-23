import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '../../interfaces'

export interface PostState {
	loadingPosts: boolean;
	posts: IPost[];
}

const initialState: PostState = {
	loadingPosts: false,
	posts: [],
}

export const postSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    startLoadingPosts: (state) => {
      state.loadingPosts = true;
    },
		setPosts: (state, { payload }: PayloadAction<IPost[]>) => {
			state.loadingPosts = false;				
			state.posts = payload;
		}
  },
})

// Action creators are generated for each case reducer function
export const { startLoadingPosts, setPosts } = postSlice.actions;

// export default postSlice.reducer

