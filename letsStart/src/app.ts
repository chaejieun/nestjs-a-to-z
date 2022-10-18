import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
const port: number = 8000;

// app.use가 미들웨어 역할이고
// next 함수는 다음 함수 역할을 실행시킬 수 있도록 해줌
// 미들웨어가 맨 끝에 함수가 위치하면 기능을 하지 않음X
// express는 위에서부터 아래로 실행시키기 때문에!!

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is logging middleware");
  next();
});

app.get("/cats/som", (req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is som middleware");
  next();
});

app.get("/", (req: express.Request, res: express.Response) => {
  //res.send("Hello World!");
  //res.send({ name: "chae", friends: ["aa", "bb", "cc"] });
  res.send({ cats: Cat });
});

app.get("/cats/blue", (req, res) => {
  res.send({ cats: Cat, blue: Cat[0] });
});

app.get("/cats/som", (req, res) => {
  res.send({ som: Cat[1] });
});

app.use((req, res, next) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found error" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
