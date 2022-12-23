import { Model } from 'sequelize';



// export enum IUserStatus{

// }

export interface IUser extends Model{
	id: string;
	username: string;
	email: string;
	password: string;
	role: 'client' | 'admin';
	status?: 'online' | 'offline';
	avatar?: string;
}


