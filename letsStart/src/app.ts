import * as express from "express";
import catsRouter from "./cats/cats.route";

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    // router 등록해주는 것!
    this.app.use(catsRouter);
  }

  // 미들웨어 세팅
  private setMiddleware() {
    // * logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is logging middleware");
      next();
    });
    // * json middleware
    this.app.use(express.json());

    this.setRoute();

    // * 404 middleware
    this.app.use((req, res, next) => {
      console.log("this is error middleware");
      res.send({ error: "404 not found error" });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("server is on...");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();

// app.use가 미들웨어 역할이고
// next 함수는 다음 함수 역할을 실행시킬 수 있도록 해줌
// 미들웨어가 맨 끝에 함수가 위치하면 기능을 하지 않음X
// express는 위에서부터 아래로 실행시키기 때문에!!
