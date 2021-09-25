import readline from 'readline';
import { OperationFactory } from './operations/operation-factory';
import { State } from './state';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let state = new State();

export function setState() {
  state = new State();
}

export function processOperation(operation, log) {
  const command = OperationFactory.createOperation(operation);
  command.setData(state.account);
  state.step(command);
  log(state.account.getResponse());
}

rl.on('line', function(line){
  processOperation(JSON.parse(line), console.log);
});