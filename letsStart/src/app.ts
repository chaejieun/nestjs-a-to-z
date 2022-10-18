import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
const port: number = 8000;

// app.use가 미들웨어 역할이고
// next 함수는 다음 함수 역할을 실행시킬 수 있도록 해줌
// 미들웨어가 맨 끝에 함수가 위치하면 기능을 하지 않음X
// express는 위에서부터 아래로 실행시키기 때문에!!

// * logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is logging middleware");
  next();
});

// app.get("/cats/som", (req, res, next) => {
//   console.log(req.rawHeaders[1]);
//   console.log("this is som middleware");
//   next();
// });

// app.get("/", (req: express.Request, res: express.Response) => {
//   //res.send("Hello World!");
//   //res.send({ name: "chae", friends: ["aa", "bb", "cc"] });
//   res.send({ cats: Cat });
// });

// app.get("/cats/blue", (req, res) => {
//   res.send({ cats: Cat, blue: Cat[0] });
// });

// app.get("/cats/som", (req, res) => {
//   res.send({ som: Cat[1] });
// });

// * json middleware
app.use(express.json);

// * READ 고양이 전체 데이터 다 조회
app.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    //throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// * READ 특정 고양이 데이터 조회
// :id -> 동적 라우팅 (파라미터)
app.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    //throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// * CREATE 새로운 고양이 추가 api
app.post("/cats", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data); // create
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// * 404 middleware
app.use((req, res, next) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found error" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
