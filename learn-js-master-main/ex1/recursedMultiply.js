export function recursedMultiply(a, b) {
    if (!(typeof(a) == 'number' && typeof(b) == 'number')) {
      return "Данные должны быть числами"
    }
    if (!(Number.isInteger(a) && Number.isInteger(b))) {
       return "Числа должны быть целыми";
    }
    if (b == 0) {
        return 1;
    }
    else {
        if (b>0) {
            return a*recursedMultiply(a, b - 1);
        }
        else {
            return (1/a)*recursedMultiply(a, b + 1);
        }
    }
}