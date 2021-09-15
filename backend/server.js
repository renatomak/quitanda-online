const express = require('express');
require('dotenv').config();
const cors = require('cors');

const router = require('./src/routers');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => console.log('Rodando na porta', port));