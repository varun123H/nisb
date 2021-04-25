
const express = require('express');
const PORT = process.env.PORT ||3000;
const log = console.log;
const app = express();
const path = require('path');

const staticPath = path.join(__dirname, "/views");


app.use(express.static(staticPath));




app.listen(PORT, () => log('Server started on ',3000));