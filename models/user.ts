import { DataTypes } from "sequelize";
import { sequelize } from "../database";
import { IUser } from "../interfaces";

export const User = sequelize.define<IUser>('user', {
	id:{
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	username:{
		type: DataTypes.STRING,
		allowNull: false,
	},
	email:{
		type: DataTypes.STRING,
		allowNull: false,
	},
	password:{
		type: DataTypes.STRING,
		allowNull: false,
	},
	status:{
		type: DataTypes.ENUM,
		values: ['online', 'offline'],
		defaultValue: 'offline'
	},
	avatar:{
		type: DataTypes.STRING,
	},


})


export default User;