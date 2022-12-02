import { Model } from 'sequelize';

// Think about like system
export interface IPost extends Model{
	user_id: string;
	title: string;
	description: string;
	id: string;
	image?: string;
	// likes?: number[];
	// dislikes?: number[];
	comments?: any[];
}

// todo: añadir fecha