import { sequelize } from "../database";
import { IPost } from "../interfaces";
import { DataTypes } from 'sequelize';

export const Post = sequelize.define<IPost>('post', {
	id:{
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	user_id: {
		type: DataTypes.INTEGER,
		references: {
			model: 'users',
			key: 'id'
		}
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false
	},

})