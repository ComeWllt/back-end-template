import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import routes from './routes';

export default class Server {
  public static bootstrap(): Server {
    return new Server();
  }
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.startServer();
  }

  private config() {
    this.app.use(bodyParser.json({ limit: '4MB' }));
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.options('*', cors());
  }

  private routes() {
    this.app.use(routes);
  }

  private startServer() {
    const port = process.env.PORT || 4200;
    this.app.listen(port, () => {
      console.log(`Server Listening on port ${port}`);
    });
  }
}
