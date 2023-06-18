

// graph implementation via Adjacency metrices
let n = 3;
let a = [];
for (let i = 0; i < n + 1; i++) {
    a.push([]);
    for (let j = 0; j < n + 1; j++) { 
        a[i].push(0);
    }
}

a[1][2] = 1;
a[2][1] = 1;

a[2][3] = 1;
a[3][2] = 1;

a[3][1] = 1;
a[1][3] = 1;

// console.log(a);




// by adjacency array;
let aa = [];

for (let i = 0; i < n + 1; i++) { 
    aa.push([]);
}

// connect 1 & 2 , 1 & 3
aa[1].push(2)
aa[1].push(3)

// console.log(aa);


export default class Queue {

    constructor() {
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
    }

    isEmpty() {
        return this.arr.length == 0;
    }

    pop() {
        return this.arr.shift();
    }

    top() { 
        return this.arr[0]
    }

}


// let queue = new Queue();

// queue.push(10);

// // console.log(queue.isEmpty());
// // console.log(queue.top());
// // console.log(queue.isEmpty());