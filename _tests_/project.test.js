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
  test("Should return 3 quarters, 1 dime, 1 nickel, 4 pennies", () => {
    const number = 0.94;
    expect(counterCoin.changeCounter(number)).toEqual([3, 1, 1, 4]);
  });
});
// <------------------------------------Closures------------------------------------------>
import { CoinCounterClosure } from "./../src/coin_counter.js";

describe("CountCoins", () => {
  let coinCounter = new CoinCounterClosure();

  let quarter = 0;
  let dime = 0;
  let nickel = 0;
  let penny = 0;

  test("Should return message 'Not a number'", () => {
    const amount = "cat";
    expect(coinCounter.countCoins(amount, quarter, dime, nickel, penny)).toEqual("Not a number");
  });
  
  test("Should return zeros for all coin amounts", () => {
    const amount = 0;
    expect(coinCounter.countCoins(amount, quarter, dime, nickel, penny)).toEqual("With this amount you would have 0 quarter(s), 0 dime(s), 0 nickel(s), 0 penny(ies).");
  });

  test("Should return 1 quarter", () => {
    const amount = 0.25;
    expect(coinCounter.countCoins(amount, quarter, dime, nickel, penny)).toEqual("With this amount you would have 1 quarter(s), 0 dime(s), 0 nickel(s), 0 penny(ies).");
  });

  test("Should return 1 dime", () => {
    const amount = 0.10;
    expect(coinCounter.countCoins(amount, quarter, dime, nickel, penny)).toEqual("With this amount you would have 0 quarter(s), 1 dime(s), 0 nickel(s), 0 penny(ies).");
  });
});






