const argv = require ('./config/yargs.js').argv;
const porHacer = require('./por-hacer/por-hacer.js');
const colors = require('colors');

let comando = argv._[0];

switch ( comando ) {
  case 'crear':
    let tarea = porHacer.crear (argv.descripcion );
    console.log(tarea);
  break;

  case 'listar':
    let listado = porHacer.getListado( argv.completado );

    for( let tarea of listado){
      if( tarea.completado == false){
        console.log('==================='.green);
        console.log(colors.red(tarea.descripcion));
        console.log(colors.red('Estado: ', tarea.completado));
        console.log('==================='.green);
      }else {
        console.log('==================='.green);
        console.log(colors.green('Descripcion: ', tarea.descripcion));
        console.log(colors.green('Estado: ', tarea.completado));
        console.log('==================='.green);
      }
    }

  break;

  case 'actualizar':
    let actualizado = porHacer.actualizar( argv.descripcion, argv.completado );
    if ( actualizado == true ){
      console.log("Datos actulizados correctamente".green);
    }else{
      console.log("Error al actualizar los datos".red);
    }
    break;

  case 'borrar':
      let borrado = porHacer.borrar( argv.descripcion );
      if ( borrado == true ){
        console.log("Dato eliminado correctamente".green);
      }else{
        console.log("Error al eliminar los datos".red);
      }
  break;

  default:
    console.log('Comando no reconocido');

}
