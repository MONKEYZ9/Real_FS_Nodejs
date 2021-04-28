//  require은 해당 패키지를 가져와서 쓸 수 있게
const http = require("http");
// 
// 서버를 생산하고 req 응답보낼때, res 응답 받을 때 하면서 요청과 응답을 받게끔
// http.createServer((req, res) => {
//      res.writeHead(200, {"Content-type" : "text/html"});
//     //             상태코드(200 잘 보냈을때)
//     //              404는 잘 안될때 
//     res.end("<p>Hello World</p>");

// }).listen(3000, () => {
//     console.log("3000번 포트 서버 접속 완료");
// });

http
.createServer((req, res) => {
     if(req.url === "/") {
        res.writeHead(200);
        res.end("main url");
     } else if(req.url === "/upload"){
        res.writeHead(200);
        res.end("upload url");
     } else if(req.url === "/delete") {
        res.writeHead(200);
        res.end("delete url");
     } else {
        res.writeHead(404);
        res.end("NOT found");
     }

})
.listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료");
});