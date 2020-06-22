export class CoinCounter {
  changeCounter(num) {
    if (isNaN(num)) {
      return "Not a number";
    }
    const quarter = 0.25;
    const dime = 0.1;
    const nickel = 0.05;
    const penny = 0.01;
    const result = [0, 0, 0, 0];
    return recurse(result);

    function recurse(result) {
      if (num === 0) {
        return result;
      } 
      if (num / quarter >= 1) {
        result[0] = Math.trunc(num / quarter);
        num = (num % quarter).toFixed(2);
        return recurse(result);
      }
      if (num / dime >= 1) {
        result[1] = Math.trunc(num/ dime);
        num = (num % dime).toFixed(2);
        return recurse(result);
      }
      if (num / nickel >= 1) {
        result[2] = Math.trunc(num / nickel);
        num = (num % nickel).toFixed(2);
        return recurse(result);
      } else {
      result[3] = Math.trunc(num / penny);
        return result;
      }
    }
  }
}

export class CoinCounterClosure {
  countCoins(num, quarters, dimes, nickels, pennies) {
    const quarter = 0.25;
    const dime = 0.1;
    const nickel = 0.05;
    const penny = 0.01;
    if (isNaN(num)) {
      return "Not a number";
    } else if (num < 0.01) {
      return `With this amount ${num}, you would have ${quarters} quarter(s), ${dimes} dime(s), ${nickels} nickel(s), ${pennies} penny(ies).`;

    } else if (num / quarter >= 1) {
      quarters = Math.trunc(num / quarter);
      num = (num % quarter).toFixed(2);
      return this.countCoins(num, quarters, dimes, nickels, pennies);

    } else if (num / dime >= 1) {
      dimes = Math.trunc(num / dime);
      num = (num % dime).toFixed(2);
      return this.countCoins(num, quarters, dimes, nickels, pennies);

    } else if (num / nickel >= 1){
      nickels = Math.trunc(num / nickel);
      num = (num % dime).toFixed(2);
      return this.countCoins(num, quarters, dimes, nickels, pennies);

    } else {
      pennies = Math.trunc(num / penny);
      num = (num % penny).toFixed(2);
      return this.countCoins(num, quarters, dimes, nickels, pennies);
    }
  }
}
