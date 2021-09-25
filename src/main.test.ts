import { processOperation, setState } from "./main";

describe('ACCOUNT CREATION', () => {

  let log;

  beforeEach(() => {
    setState();
    log = jest.fn();
  })


  test('create account should be success', async () => {
    processOperation({"account": {"active-card": true, "available-limit": 100}}, log);
    expect(log).toHaveBeenCalledWith({"account": {"active-card": true, "available-limit": 100}, violations: []});
  });

  test('it should return account-already-initialized if the application receives another operation of account creation', async () => {
    processOperation({"account": {"active-card": true, "available-limit": 100}}, log);
    processOperation({"account": {"active-card": true, "available-limit": 200}}, log);
    expect(log).lastCalledWith({"account": {"active-card": true, "available-limit": 100}, violations: ["account-already-initialized"]});
  });

  test('it should decrease limit', async () => {
    processOperation({"account": {"active-card": true, "available-limit": 100}}, log);
    processOperation({"transaction": {"merchant": "Burger King", "amount": 20, "time": "2019-02-13T10:00:00.000Z"}}, log);
    expect(log).lastCalledWith({"account": {"active-card": true, "available-limit": 80}, "violations": []});
  });

  test('it should return insufficient-limit', async () => {
    processOperation({"account": {"active-card": true, "available-limit": 100}}, log);
    processOperation({"transaction": {"merchant": "Burger King", "amount": 20, "time": "2019-02-13T10:00:00.000Z"}}, log);
    processOperation({"transaction": {"merchant": "Habbib's", "amount": 90, "time": "2019-02-13T11:00:00.000Z"}}, log);
    expect(log).lastCalledWith({"account": {"active-card": true, "available-limit": 80}, "violations": ["insufficient-limit"]});
  });

  test('it should return account-not-initialized', () => {
    processOperation({"transaction": {"merchant": "Uber Eats", "amount": 25, "time": "2020-12-01T11:07:00.000Z"}}, log);
    expect(log).lastCalledWith({"account": {}, "violations": ["account-not-initialized"]});
  });

});