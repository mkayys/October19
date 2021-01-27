Array.prototype.myEach = function(cb) {
    for(let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
};

console.log([1,2,4].myEach(ele => console.log(ele)));

Array.prototype.myReduce = function(cb, initialValue) {
    
}

