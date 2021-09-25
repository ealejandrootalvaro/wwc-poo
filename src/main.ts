import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

export function setState() {
   //TODO: Inicializar la clase que guarda el estado de la cuenta
}

export function processOperation(operation, log) {
  //TODO: Crear el comando y usar la funcion log para imprimir el resultado de la operacion
}

rl.on('line', function(line){
  processOperation(JSON.parse(line), console.log);
});