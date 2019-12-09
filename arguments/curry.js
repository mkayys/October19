// use apply
Function.prototype.curry = function(numArgs) {
    let args = [];
    let that = this;
    return function _curry(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            that.apply(that, args);
        } else {
            return _curry;
        }
    }
}

// use spread operator
Function.prototype.curry = function(numArgs) {
    let args = [];
    let that = this;
    return function _curry(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            that.cal(that, ...args);
        } else {
            return _curry;
        }
    }
}