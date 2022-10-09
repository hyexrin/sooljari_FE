const express = require('express');
const imgRouter = require('./routes/img');

const app = express();

app.get('/img', (req, res) => {
    res.send('img connect');
})
app.use('/img', imgRouter);

app.listen(4000, () =>{
    console.log('4000번 포트 서버 실행');
})