import { IPost } from "../interfaces";
import { useAppDispatch, useAppSelector } from "../store"
import { setPosts, startLoadingPosts } from "../store/post";

export const usePostStore = () => {

	const { loadingPosts, posts } = useAppSelector(state => state.post)
	const dispatch = useAppDispatch();

	const handleLoadPost = ( postsSSR: IPost[] ) => {
		dispatch( startLoadingPosts() );
		
		dispatch( setPosts(postsSSR) );
	}

	return {
		// * Values
		loadingPosts,
		posts,

		// * Methods,
		handleLoadPost
	}

}