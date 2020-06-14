const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
connectDB();

const PORT = process.env.PORT || 4000

app.use(express.json({extended:true}));
app.use(cors());
// creando rutas para usar
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));


app.listen(PORT, ()=>{

    console.log(`ejecutando servidor express en el puerto ${PORT}`);
})
