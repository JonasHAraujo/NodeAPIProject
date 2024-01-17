const express = require('express');
const app = express();
const port = 3333

const json =  {
    nome: 'Jonas',
    idade: '17',
    profissão: 'Servente'
}
app.get('/user', (req, res) => {
    res.send(json);
})
app.listen(port ,() => {
    console.log("server rodando");
});