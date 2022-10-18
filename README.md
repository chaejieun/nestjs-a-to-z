# nestjs-a-to-z
탄탄한 백엔드 NestJS, 기초부터 심화까지 (인프런)


### 인프런 강의
- https://www.inflearn.com/course/%ED%83%84%ED%83%84%ED%95%9C-%EB%B0%B1%EC%97%94%EB%93%9C-%EB%84%A4%EC%8A%A4%ED%8A%B8/dashboard

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
`
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});`


### Express middleware
미들웨어 함수는 요청 오브젝트(req), 응답 오브젝트 (res), 그리고 애플리케이션의 요청-응답 주기 중 그 다음의 미들웨어 함수 대한 액세스 권한을 갖는 함수입니다. 
그 다음의 미들웨어 함수는 일반적으로 next라는 이름의 변수로 표시됩니다.


![image](https://user-images.githubusercontent.com/48235442/196363302-a93306b1-18f5-41e0-8ab3-6eedab780b78.png)

