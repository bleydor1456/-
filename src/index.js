const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const userRoute = require('./routes/usuarios')
const suRoute = require('./routes/sucursales')
const prodRoute = require('./routes/productos')
const veRoute = require('./routes/ventas')
const paRoute = require('./routes/pagos')
const roRoute = require('./routes/roles')
const login = require('./routes/login')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', suRoute, login , prodRoute, paRoute, veRoute, roRoute, userRoute)


mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connect to Atlas DB'))
    .catch((error) => console.error(error));


app.listen(port, () => console.log('server listening on port', port));


