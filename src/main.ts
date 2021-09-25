import { Banco } from './banco';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let banco = new Banco();

export function setState() {
   //TODO: Inicializar la clase que guarda el estado de la cuenta
  banco = new Banco();
}

export function processOperation(operation, log) {

  if (operation.account) {
    // crear cuenta
    const cuenta = banco.crearCuenta(operation.account['active-card'], operation.account['available-limit']);
    log(banco.resultado(cuenta));
  } else {
    banco.ejecutarTransaccion(operation);
    log(banco.resultado(banco.cuenta));
  }


  //TODO: Crear el comando y usar la funcion log para imprimir el resultado de la operacion
}

rl.on('line', function(line){
  processOperation(JSON.parse(line), console.log);
});