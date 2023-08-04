const express = require('express');
const cors = require('cors')

const server = express();
const port = 5000;
server.use(cors());
server.use(express.json());

const pessoas = [{'name':'Elias', 'age': '19'},
            {'name':'Jonas','age': '13'},
            {'name':'Mariana','age': '18'},
            {'name':'Maria','age': '20'},
            {'name':'Julia','age': '34'},
            {'name': 'Fabio' ,'age': '55'}]
            
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
    pessoas[index] = pessoa;
    return res.json(pessoas);
})
server.delete('/:index', (req,res) =>{
    const { index } = req.params;
    pessoas.splice(index,1);
    return res.json(pessoas);
})
console.log(`servidor na porta: http://localhost:${port}`);

server.listen(port);
