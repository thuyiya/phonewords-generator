import Express, { Application, Router } from "express";
import AppRouter from "./routes";
import Config from "./config";

export default function createServer() {
  const app: Application = Express();
  const expressRoute: Router = Express.Router();

  app.use(Express.json());
  app.use(Config.API.api_prefix, AppRouter(expressRoute));

  return app;
}
