import express from 'express';

const app = express();

app.get('/users',(req, res) => {
    console.log('listagem de usuarios');
    res.json(['fernandso', 'maikon']);
})

app.listen(3333)