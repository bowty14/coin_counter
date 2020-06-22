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










});