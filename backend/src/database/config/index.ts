import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  host: process.env.HOSTNAME || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 5432,
  database: process.env.POSTGRES_DB || 'ng-cash',
  username: process.env.POSTGRES_USER || 'admin',
  password: process.env.POSTGRES_PASSWORD || 'admin',
  dialect: 'postgres',
  dialectOptions: {
    rejectUnauthorized: false,
  },
};

export = config;
