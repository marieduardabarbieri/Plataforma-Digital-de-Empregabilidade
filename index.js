const express = require('express');
const path = require('path');
const homeRoutes = require('./routes/home');
const empresasRoutes = require('./routes/empresas');
const vagasRoutes = require('./routes/vagas');
const candidatosRoutes = require('./routes/candidatos');
const curriculosRoutes = require('./routes/curriculos');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rotas
app.use('/', homeRoutes);
app.use('/empresas', empresasRoutes);
app.use('/vagas', vagasRoutes);
app.use('/candidatos', candidatosRoutes);
app.use('/curriculos', curriculosRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
  console.log('App de Exemplo escutando na porta 3000!')
});