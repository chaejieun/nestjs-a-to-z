# nestjs-a-to-z

탄탄한 백엔드 NestJS, 기초부터 심화까지 (인프런)

### 인프런 강의

- https://www.inflearn.com/course/%ED%83%84%ED%83%84%ED%95%9C-%EB%B0%B1%EC%97%94%EB%93%9C-%EB%84%A4%EC%8A%A4%ED%8A%B8/dashboard
- https://github.com/amamov/teaching-nestjs-a-to-z

### 환경 설정

1. node 설치
   `$ npm -v`

   `$ npm i -g npm`

2. yarn 설치

`$ npm install --global yarn`

3. nodemon, prettier 설치

`$ yarn global add nodemon`

`$ yarn global add prettier`

### nodemon

$ nodemon main.js 명령어로 실시간으로 스크립트 파일을 디버깅할 수 있다.

### 공식 문서 정리

- http 프로토콜 자료 1 :https://developer.mozilla.org/ko/docs/Web/HTTP
- http 프로토콜 자료 2 :https://developers.google.com/web/fundamentals/performance/http2
- Rest API 공식 문서 : https://docs.microsoft.com/ko-kr/azure/architecture/best-practices/api-design
- JSON과 Javascript의 차이 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON
- express 공식 문서 : https://expressjs.com/

### Express와 Node란?

Node (또는 더 공식적으로는 Node.js) 는 오픈소스, 크로스 플랫폼이며, 개발자가 모든 종류의 서버 사이드 도구들과 어플리케이션을 JavaScript로 만들수 있도록 해주는 런타임 환경이다.
런타임은 브라우져 영역 밖에서도 사용할수 있도록 의도했다.(예를들면 서버 OS 또는 컴퓨터에서 직접적으로 실행되는).
이와 같이, 이 환경에서 특정 브라우져에서의 자바스트립트 API들을 제외시키고 , HTTP 와 파일 시스템 라이브러리들을 포함하여 더 많은 전형적인 OS API들을 추가했다.

### Express Route

라우팅은 애플리케이션 엔드 포인트(URI)의 정의, 그리고 URI가 클라이언트 요청에 응답하는 방식을 말합니다.

```
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
```

### Express middleware

미들웨어 함수는 요청 오브젝트(req), 응답 오브젝트 (res), 그리고 애플리케이션의 요청-응답 주기 중 그 다음의 미들웨어 함수 대한 액세스 권한을 갖는 함수입니다.
그 다음의 미들웨어 함수는 일반적으로 next라는 이름의 변수로 표시됩니다.

![image](https://user-images.githubusercontent.com/48235442/196363302-a93306b1-18f5-41e0-8ab3-6eedab780b78.png)

## NestJS

- 공식 문서 : https://docs.nestjs.com/
- 공식 문서 한국어 번역 : https://docs.nestjs.kr/

`$ npm i -g @nestjs/cli`

`$ nest new project-name`

app.controller.ts 단일 경로가 있는 기본 컨트롤러입니다.
app.controller.spec.ts 컨트롤러에 대한 단위 테스트입니다.
app.module.ts 애플리케이션의 루트 모듈입니다.
app.service.ts 하나의 방법으로 기본 서비스를 제공합니다.
main.ts 핵심 기능 NestFactory을 사용하여 Nest 애플리케이션 인스턴스를 생성하는 애플리케이션의 항목 파일입니다.

### VScode

- ESLint : 자바스크립트나 타입스크립트의 코드를 검사해주는 역할 (.eslintrc.js 규칙 명시 파일)
- https://eslint.org/docs/rules/
- .prettierrc : 코드를 예쁘게 졍렬해주는 역할
- 확장 프로그램 : auto import

### Controller

컨트롤러는 들어오는 요청 을 처리 하고 클라이언트에 응답 을 반환 하는 역할
컨트롤러의 목적은 애플리케이션에 대한 특정 요청을 수신하는 것이다.
라우팅 메커니즘 은 어떤 컨트롤러가 어떤 요청을 수신하는지 제어한다.
종종 각 컨트롤러에는 둘 이상의 경로가 있으며 다른 경로는 다른 작업을 수행할 수 있다.
![image](https://user-images.githubusercontent.com/48235442/196597471-476cd283-fc93-454c-a7f9-dd87f64d3d9f.png)

### Module

@Module()모듈은 데코레이터 로 주석이 달린 클래스
데코레이터는 Nest 가 애플리케이션 구조를 구성하는 데 사용하는 메타 @Module()데이터를 제공한다
![image](https://user-images.githubusercontent.com/48235442/196602083-aeebe1dc-0923-4cbf-a006-55f83f4312fe.png)

`$ nest g module cats`

`$ nest g co cats`

`$ nest g service cats`

모듈 은 기본적으로 공급자를 캡슐화 한다.
즉, 현재 모듈의 일부도 아니고 가져온 모듈에서 내보낸 것도 아닌 공급자를 주입할 수 없다.
따라서 모듈에서 내보낸 공급자를 모듈의 공용 인터페이스 또는 API로 간주할 수 있다.

### Middleware

![image](https://user-images.githubusercontent.com/48235442/196603387-87b059c5-adb3-459c-b283-73829ec48e51.png)

미들웨어는 라우트 핸들러 전에 호출되는 함수
미들웨어 기능은 요청 및 응답 객체에 대한 액세스 권한이 next()있으며 애플리케이션의 요청-응답 주기에 있는 미들웨어 기능이다.
다음 미들웨어 기능은 일반적으로 라는 변수로 표시 next().

`$ nest g middleware logger`

### 미들웨어 적용

@Module()데코레이터 에는 미들웨어가 들어갈 자리가 없습니다 .
configure()대신 모듈 클래스의 메서드를 사용하여 설정합니다 .
미들웨어를 포함하는 모듈은 NestModule인터페이스를 구현해야 합니다.
LoggerMiddleware수준 에서 설정합시다 AppModule.

```
@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}
```

### Exception filter

Nest에는 애플리케이션 전체에서 처리되지 않은 모든 예외를 처리하는 예외 레이어 가 내장되어 있다.
애플리케이션 코드에서 예외를 처리하지 않으면 이 계층에서 예외를 포착한 다음 자동으로 적절한 사용자 친화적인 응답을 보낸다

![image](https://docs.nestjs.com/assets/Filter_1.png)

예외필터

```
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}
```

- @UseFilters(HttpExceptionFilter) 적용 방법 2가지

1. 해당 컨트롤러에 반영

```
@Post()
@UseFilters(new HttpExceptionFilter())
async create(@Body() createCatDto: CreateCatDto) {
throw new ForbiddenException();
}
```

2. 전체 컨트롤러에 반영

```
@UseFilters(new HttpExceptionFilter())
export class CatsController {}
```

3. 전역 범위 필터 적용

```
main.ts

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
```

### Pipes

파이프에는 두 가지 일반적인 사용 사례가 있습니다.

- 변환 : 입력 데이터를 원하는 형식으로 변환(예: 문자열에서 정수로)
- validation : 입력 데이터를 평가하고 유효한 경우 변경되지 않은 상태로 전달합니다. 그렇지 않으면 데이터가 올바르지 않을 때 예외를 던집니다.

```
@Get(':id')
async findOne(@Param('id', ParseIntPipe) id: number) {
  return this.catsService.findOne(id);
}
```

Q. Pipe를 사용하는 사례는 알겠지만, 정의를 모르겠어요

> 파이프는 클라이언트 요청에서 들어오는 데이터를 유효성 검사 및 변환을 수행하여 서버가 원하는 데이터를 얻을 수 있도록 도와주는 클래스이다

Q. 요청 -> 필터 -> 파이프 -> 라우트 핸들러 이런 식으로 흐름이 흘러가는 건가요?

- https://docs.microsoft.com/en-us/azure/architecture/patterns/pipes-and-filters

- 파이프는 단방향 통신을 위한 용도로 사용됩니다. 하나의 파이프는 이전 파이프에서 전달된 결과를 입력 값으로 받아 또 다른 결과 값을 내놓습니다. NestJS에서의 파이프는 클라이언트 요청에서 들어오는 데이터를 유효성 검사 및 변환을 수행하여 서버가 원하는 데이터를 얻을 수 있도록 도와주는 역할을 합니다.

### Interceptors

@Injectable()인터셉터는 데코레이터 로 주석이 달린 클래스 이며 NestInterceptor인터페이스를 구현한다.
![image](https://docs.nestjs.com/assets/Interceptors_1.png)

인터셉터에는 AOP( Aspect Oriented Programming ) 기술 에서 영감을 받은 유용한 기능 세트가 있습니다 . 이를 통해 다음을 수행할 수 있습니다.

- 메서드 실행 전후에 추가 논리 바인딩
- 함수에서 반환된 결과를 변환
- 함수에서 throw된 예외를 변환합니다.
- 기본 기능 동작 확장
- 특정 조건에 따라 함수를 완전히 재정의합니다(예: 캐싱 목적).

## 프로젝트1. 고양이 정보 커뮤니티

- mongoDB `$ npm i @nestjs/mongoose mongoose`
- 환경 변수 설정 `$ npm i --save @nestjs/config`
- 클래서 유효성검사기 `$ npm i --save class-validator class-transformer`
- bcrypt 라이브러리 설치 ` $ npm i bcrypt` `$ npm i -D @types/bcrypt`
