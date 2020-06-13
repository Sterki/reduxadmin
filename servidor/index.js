const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

const PORT = process.env.PORT || 4000

app.use(express.json({extended:true}));
// creando rutas para usar
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));


app.listen(PORT, ()=>{

    console.log(`ejecutando servidor express en el puerto ${PORT}`);
})
