const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Hello World from Port ${port}`);
});

app.get('/myname', (req, res) => {
    const name = "Ian Isaak";
    res.send(`Hello World! My name is ${name}.`);
});

app.listen(port, () =>{
    console.info(`Server is running on port ${port}`);
});
