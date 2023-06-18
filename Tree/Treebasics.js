

class Stack { 
    constructor() {
        this.array = new Array();
    }
    
    push(data) { 
        this.array.push(data);
    }

    pop() { 
        return this.array.pop();
    }

    peek() { 
        return this.array[this.array.length - 1];
    }

    isEmpty() { 
        if (this.array.length > 0) {
            return false;
        } else { 
            return true;
        }
    }
}




class Queue{

    constructor() { 
        this.data = {}
        this.head = 0;
        this.tail = 0;
    }

    push(data) { 
        this.data[this.tail] = data;
        this.tail++;
    }

    pop() { 
        let item = this.data[this.head];
        delete this.data[this.head];
        this.head++;
        return item;
    }

    peek() { 
        return this.data[this.head]
    }

    isEmpty() { 
        return Object.keys(this.data).length == 0;
    }

    size() { 
        return (this.tail - this.head);
    }
}






class Tree { 
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
     }
}

// making a tree
node1 = new Tree(10);
node1.left = new Tree(20);
node1.right = new Tree(30);
node1.left.left = new Tree(40);
node1.right.left = new Tree(50);


function preorder(root) { 
    // root left right
    if (root == null) { 
        return;
    }

    console.log(root.data);
    preorder(root.left);
    preorder(root.right);
}

// preorder(node1);


function LevelOrderTraversal(root) { 
    // initilaization of Queue
    let queue = new Queue();
    // first push root to queue
    queue.push(root);
    
    // now iterate through the queue unless is is empty
    while (queue.isEmpty() == false) { 
        // get the current size of Queue
        let size = queue.size();

        for (let i = 0; i < size; i++) {
            // pop that item
            let item = queue.pop();

            // check is left node exist so push it to Queue
            if (item.left != null) {
                queue.push(item.left);
            }

            // check is right node exist so push it to Queue
            if (item.right != null) {
                queue.push(item.right);
            }
            // print the popped item data
            console.log(item.data);
        }        
    }
}

// LevelOrderTraversal(node1);




function MaxHeightOfTree(root) { 
    if (root == null) return 0;

    let lh = MaxHeightOfTree(root.left);
    let rh = MaxHeightOfTree(root.right);
    
    return Math.max(lh, rh) + 1;
}

// let ans = MaxHeightOfTree(node1);
// console.log(ans);



function IterativePreOrderTraversal(root) { 
    // Initialize the Stack
    let stack = new Stack();

    // push the root to stack first
    stack.push(root);

    while (stack.isEmpty() == false) { 

        // popped the top element from stack
        let item = stack.pop();

        // first push right & then left so that left will be upper to process first
        if (item.right != null) { 
            stack.push(item.right);
        }

        // first push right & then left so that left will be upper to process first
        if (item.left != null) { 
            stack.push(item.left);
        }
        console.log(item.data);
    }
}


// IterativePreOrderTraversal(node1);


function IterativeInorderTraversal(root) { 
    let stack = new Stack();

    let node = root;

    while (true) { 

        if (node != null) {
            stack.push(node);
            node = node.left;
        } else { 

            if (stack.isEmpty()) { 
                break;
            }

            let popped = stack.pop();
            console.log(popped.data);
            node = popped.right;
        }
    }
}

// IterativeInorderTraversal(node1);





// o(n2) solution
function CheckBalancedBinaryTree(root) { 

    if (root == null) { 
        return true;
    }

    let lh = MaxHeightOfTree(root.left);
    let rh = MaxHeightOfTree(root.right);

    let diff = Math.abs(lh - rh);
    if (diff > 1) { 
        return false;
    }
    return CheckBalancedBinaryTree(root.left) && CheckBalancedBinaryTree(root.right);   
}

// let node3 = new Tree(10);
// node3.left = new Tree(10);
// node3.left.left = new Tree(10);
// node3.left.left.left = new Tree(10);
// node3.left.left.left.left = new Tree(10);

// node3.right = new Tree(10);
// node3.right.right = new Tree(10);
// node3.right.right.right = new Tree(10);
// node3.right.right.right.right = new Tree(10);


// let ans = CheckBalancedBinaryTree(node3)
// console.log(ans);



let arr = new Array(1);
arr[0] = 0;


// o(n2) solution 
function DiameterOfBinaryTree(root, max) { 
    if (root == null) { 
        return;
    }

    let lh = MaxHeightOfTree(root.left);
    let rh = MaxHeightOfTree(root.right);
    
    max[0] = Math.max(max[0], lh + rh + 1);
    
    DiameterOfBinaryTree(root.left, max);
    DiameterOfBinaryTree(root.right,max);
}


// o(N) solution
// While finding height, we will update the max variable then & there itself....

function DiameterOfBinaryTree2(root, max) {
    if (root == null) { 
        return 0;
    }

    let lh = DiameterOfBinaryTree2(root.left, max);
    let rh = DiameterOfBinaryTree2(root.right, max);

    // update the max variable
    max[0] = Math.max(max[0], lh + rh + 1);

    return Math.max(lh, rh) + 1;
}

// DiameterOfBinaryTree2(node1, arr);
// console.log(arr);



function MaximumPathSum(root, max) { 
    if (root == null) { 
        return 0;
    }

    let lsum = MaximumPathSum(root.left, max);
    let rsum = MaximumPathSum(root.right, max);

    max[0] = Math.max(max[0], lsum + rsum + root.data);

    return lsum + rsum + root.data;
}


MaximumPathSum(node1, arr);
console.log(arr);




