Function.prototype.inherits = function(childClass) {
    function Surrogate() {};
    Surrogate.prototype = this.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
}