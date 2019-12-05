Array.prototype.uniq = function() {
    let newArr = [];
    for(let i=0; i < this.length; i++) {
        if(!newArr.includes(this[i])) {
            newArr.push(this[i]);
        }
    }

    return newArr;
}

Array.prototype.twoSum = function() {
    let sums = [];
    for(let i=0; i < this.length - 1; i++) {
        for(let j=1; j < this.length; j++) {
            if ((i < j) && (this[i] + this[j] === 0)) {
                sums.push([i, j]);
            }
        }
    }

    return sums;
}

Array.prototype.transpose = function() {
    let transposed = [];

    for (let i=0; i < this.length; i++) {
        for (let j=0; j < this.length; j++) {
            
        }
    }

    return transposed;
}