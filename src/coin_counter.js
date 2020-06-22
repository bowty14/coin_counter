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
