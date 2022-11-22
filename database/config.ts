import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('foro_facultad', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

export const dbConnection = async() => {
	try {
		
		await sequelize.authenticate();
		console.log('Database connected');


	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

