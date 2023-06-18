// stack is LIFO ==>
// array push & pop can be used as array;

// let stack = new Array();
// stack.push(10);
// stack.push(20);
// stack.pop();
// console.log(stack);


// 1. push
// 2. pop
// 3. peek
// 4. isEmpty
// Traversing function


class Stack { 
    constructor() { 
        this.array = new Array();
    }


    push(data) { 
        this.array.push(data);
    }

    pop() { 
        this.array.pop();
    }

    peek() { 
        this.array.length
    }
}

