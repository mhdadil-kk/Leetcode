var MyStack = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
    let size = this.queue.length;
    while (size > 1) {
        this.queue.push(this.queue.shift()); // Move all elements before x to the back
        size--;
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.shift(); // Removes the top element
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[0]; // Returns the top element without removing it
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
