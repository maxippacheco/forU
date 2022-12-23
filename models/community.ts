import { DataTypes } from "sequelize";
import { sequelize } from "../database";
import { ICommunity } from '../interfaces';
import Post from "./post";
import User from "./user";

export const Community = sequelize.define<ICommunity>('community', {
	id:{
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	owner: {
		type: DataTypes.INTEGER,
		references:{
			model: 'user',
			key: 'id'
		}
	},
	users: {
		type: DataTypes.ARRAY(DataTypes.JSON),
    references: { model: 'user', key: 'id' },
		defaultValue: [],
	},
	posts:{
		type: DataTypes.ARRAY(DataTypes.JSON),
    references: { model: 'post', key: 'id' },
		defaultValue: [],
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	img: {
		type: DataTypes.STRING,
	},

})

Community.belongsTo( User, { foreignKey: 'owner' }	)
Community.hasMany(User, { foreignKey: 'users' })
Community.hasMany(Post, { foreignKey: 'posts' })

sequelize.sync();

export default Community;