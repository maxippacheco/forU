import { Model } from 'sequelize';

// Think about like system
export interface IPost extends Model{
	user_id: string;
	title: string;
	description: string;
	id: string;
	image?: string;
	interactions?: ILike;
	comments?: IComment[];
}

export interface ILike{
	liked_by: string[];
	disliked_by: string;
	likes: number;
	dislikes: number;
	post_id: string;
}

export interface IComment{
	post_id: string;
	user_id: string;
	title: string;
	description: string;
}
