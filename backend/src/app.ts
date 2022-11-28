import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler';
import { usersRouter } from './routers/users';
import { transactionsRouter } from './routers/transactions';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (_req, res) => res.json('OK'));
  }

  private async config(): Promise<void> {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use('/users', usersRouter);
    this.app.use('/transactions', transactionsRouter);
    this.app.use(errorHandler);
  }

  public start(PORT: string | number): void {
    // eslint-disable-next-line no-console
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;
