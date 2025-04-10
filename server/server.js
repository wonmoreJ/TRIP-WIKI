const express = require("express"); //express 모듈을 가져온다음
const path = require("path"); //경로를 쉽게 가져올수있는 path모듈
const app = express(); //익스프레스 모듈을 실행해서 app이라는 상수에 할당을 해주고
const PORT = 3000; //포트번호할당

app.use(express.static(path.join(__dirname, ".."))); //현재탐색기에 위치한 폴더들의 서버가 접근할 수 있도록
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
}); //어떠한경로로 요청이오던지 항상 index.html을 반환할수 있도록

app.listen(PORT, () => {
  console.log("🚓🚓서버실행🚓🚓");
});
