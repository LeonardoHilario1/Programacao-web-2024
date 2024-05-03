const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, dataAgendamento } = req.body;
    res.render('dados', { nome, endereco, telefone, dataAgendamento });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
