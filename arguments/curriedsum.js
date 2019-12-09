
function curriedSum(numArgs) {
    let numbers = [];

    return function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            let sum = 0;
            for (let i=0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            return sum;
        } else {
            return _curriedSum;
        }
    }
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56