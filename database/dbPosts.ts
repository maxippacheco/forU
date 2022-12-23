import { Post, User } from "../models";

export const getPosts = async() => {
	const posts = await Post.findAll({ include: { model: User } });
	return posts;
}