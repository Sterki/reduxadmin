const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

const PORT = process.env.PORT || 4000


// creando rutas para usar
app.use('/api/users', require('./routes/users'));

app.listen(PORT, ()=>{

    console.log(`ejecutando servidor express en el puerto ${PORT}`);
})