import { sequelize } from "../database";
import { IPost } from "../interfaces";
import { DataTypes } from 'sequelize';
import User from './user';

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

Post.belongsTo( User, { foreignKey: 'user_id' })
sequelize.sync();

export default Post;