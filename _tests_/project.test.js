import { CoinCounter } from "./../src/coin_counter.js";

describe("CoinCounter", () => {
  let counterCoin = new CoinCounter();

  let quarter = 0;
  let dime = 0;
  let nickel = 0;
  let penny = 0;

  test("Should return message on 'Not a number'", () => {
    const number = "dog";
    expect(counterCoin.changeCounter(number, quarter, dime, nickel, penny)).toEqual("Not a number");
  });
  test("Should return zeros for all coin amounts", () => {
    const number = 0;
    expect( counterCoin.changeCounter(number)).toEqual([0,0,0,0]);
  });
  test("Should return 1 quarter", () => {
    const number = .25;
    expect( counterCoin.changeCounter(number)).toEqual([1,0,0,0]);
  });
  test("Should return 1 dime", () => {
    const number = 0.1;
    expect(counterCoin.changeCounter(number)).toEqual([0, 1, 0, 0]);
  });
  test("Should return 1 nickel", () => {
    const number = 0.05;
    expect(counterCoin.changeCounter(number)).toEqual([0,0,1,0]);
  });
  test("Should return pennies", () => {
    const number =  0.01;
    expect(counterCoin.changeCounter(number)).toEqual([0,0,0,1]);
  });
  test("should return 1 of each coin", () => {
    const number = 0.41;
    expect(counterCoin.changeCounter(number)).toEqual([1, 1, 1, 1]);
  });








});