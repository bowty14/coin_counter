import { CoinCounter } from "./../src/coin_counter.js";

describe("CoinCounter", () => {
  let counterCoin = new CoinCounter();

  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  test("Should return message on 'Not a number'", () => {
    const number = "dog";
    expect(counterCoin.changeCounter(number, quarter, dime, nickel, penny)).toEqual("Not a number");
  });










});