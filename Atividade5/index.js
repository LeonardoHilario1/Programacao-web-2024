const express = require('express');
const app = express();


let estoque = [];


app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    estoque.push({ id, nome, qtd: parseInt(qtd) });
    res.send('Produto adicionado ao estoque.');
});


app.get('/listar', (req, res) => {
    res.send(estoque);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque = estoque.filter(produto => produto.id !== id);
    res.send('Produto removido do estoque.');
});


app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const produto = estoque.find(produto => produto.id === id);
    if (produto) {
        produto.qtd = parseInt(qtd);
        res.send('Quantidade do produto atualizada.');
    } else {
        res.send('Produto não encontrado.');
    }
});


app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
