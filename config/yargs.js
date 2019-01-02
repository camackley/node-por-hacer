const descripcion ={
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado= {
  alias: 'c',
};

const argv = require('yargs')
            .command('crear','crea un elemento nuevo por hacer',{
              descripcion
            })
            .command('actualizar','Actualiza el estado de una tarea',{
              descripcion,
              completado
            })
            .command('borrar', 'Borrar una tarea creada',{
                descripcion
            })
            .command('listar', 'Listar las tareas',{
              completado
            })
            .help()
            .argv;

module.exports ={
  argv
}
