import { length } from './strings'; 
const addDigits = (num) => {
    let sum = 0;
    num += '';
    for (let i = 0; i < num.length; i += 1) {
      sum += Number(num[i]);
    }
    if (num.length > 1) {
      return addDigits(sum);
    }
    return sum;
  };
  export default addDigits;