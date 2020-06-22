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









});