import App from './app';
import 'dotenv/config';

const { API_PORT } = process.env;

new App().start(API_PORT || 3001);
