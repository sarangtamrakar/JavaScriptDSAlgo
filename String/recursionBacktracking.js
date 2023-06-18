// multiple recursion

// 1. Print Nth Fibonacci Number
function Fibonacci(n) { 
    // f(n) = f(n-1) + f(n-2);

    if (n <= 1) {
        return n;
    } else { 
        let FirstFb = Fibonacci(n - 1);
        let SecondFb = Fibonacci(n - 2);
        return FirstFb + SecondFb;
    }
}


// let res = Fibonacci(7);
// console.log(res);


// 2. Print All subsequence

function Subsequence(arr, idx, res) {
    let n = arr.length;
    if (idx === n) { 
        console.log(res);
        return;
    }

    // take the element
    res.push(arr[idx]);
    // then go for next element selection
    Subsequence(arr, idx + 1, res);

    // now not to take the  element
    res.pop();
    Subsequence(arr, idx + 1, res);
}


let arr = [1, 2, 1];
let idx = 0;
let res = [];

// Subsequence(arr, idx, res);


// subsequence with sum k;

function findSum(arr){ 
    let Sum = 0;
    for (let item of arr) { 
        Sum += item;
    }
    return Sum;
};

function SubsequenceWithSumK(arr, idx, sumK, res) { 
    let n = arr.length;
    if (idx == n) { 
        let Sum = findSum(res);
        if (Sum == sumK) {
            console.log(res);
        }
        // return is imp to terminate the recursion call for more thṇan arr.length idx value..
        return;
    }

    res.push(arr[idx]);
    SubsequenceWithSumK(arr, idx + 1, sumK, res);
    res.pop();
    SubsequenceWithSumK(arr, idx + 1, sumK, res);
}


// SubsequenceWithSumK(arr, idx, 3, res);



// Combinational Sum

function CombinationalSum(arr, idx, sumK, res) { 
    
    // base case
    // if sumK is 0 & idx == arr.length
    if (sumK === 0 && idx === arr.length) {
        console.log(res);
        return;
    }

    // if we reached end of arr but sum is not zero
    if (idx === arr.length) {
        return;
    }
    // if we reached anywhere in arr & sumK is less than 0 will not call recursion for that 
    if (sumK < 0) { 
        return;
    }

    
    res.push(arr[idx]);
    CombinationalSum(arr, idx, sumK - arr[idx], res);
        
    // not pick any element
    res.pop();
    CombinationalSum(arr, idx + 1, sumK, res);
    
}


CombinationalSum([1,2,3], 0, 9, []);



function SubsetSum(arr, idx, sumK) { 
    
    if (idx == arr.length) { 
        console.log(sumK);
        return;
    }

    // not picking element
    SubsetSum(arr, idx + 1, sumK);
    
    // picking element
    SubsetSum(arr, idx + 1, sumK + arr[idx]);
}


// SubsetSum([1, 2, 3], 0, 0);
