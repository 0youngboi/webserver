//기본 세팅
const express = require('express');
const app = express();

app.listen(8080, function(){ //8080 포트번호, 띄운 후 실행할 코드
    console.log('listening on 8080')//8080에 함수 실행
});


app.get('/pet', function(요청, 응답){
    응답.send('펫쇼핑');
})
app.get('/beauty', function(요청, 응답){
    응답.send('뷰티용품');
})
app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/standard.html')//sendFile(보낼파일경로)
})