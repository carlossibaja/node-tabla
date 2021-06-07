const { crearArchivo } = require('./helpers/multiplicar');
const  argv = require('./config/yargs');

// const base = 9;

crearArchivo(argv.b, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,'guardado'))
    .catch(err => console.log('err'));

