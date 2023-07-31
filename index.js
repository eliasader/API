
const express = require('express');

const server = express();
const port = 3000;

server.use(express.json());

const pessoas = ['Elisa','Jonas','Fabio','Mariana','Maria','Julia'];

server.get('/:index', (req,res) =>{
    const { index } = req.params;
    return res.json(pessoas[index]);
})

server.get('/', (req,res) =>{ 
    return res.json(pessoas);
})
server.post('/', (req, res) =>{
    const { pessoa } = req.body;
    pessoas.push(pessoa);
    return res.json(pessoas);
})

server.put('/:index', (req,res) =>{
    const { index } = req.params;
    const { pessoa } = req.body;
    pessoas[index] = pessoa
    return res.json(pessoas);
})
server.delete('/:index', (req,res) =>{
    const { index } = req.params;
    pessoas.splice(index,1) 
    return res.json(pessoas);
})
console.log(`servidor na porta: http://localhost:${port}`);

server.listen(port);