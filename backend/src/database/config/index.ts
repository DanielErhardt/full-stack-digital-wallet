import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  host: process.env.DB_HOST || 'database',
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || 'wallet',
  username: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'admin',
  dialect: 'postgres',
  dialectOptions: {
    rejectUnauthorized: false,
  },
};

export = config;
