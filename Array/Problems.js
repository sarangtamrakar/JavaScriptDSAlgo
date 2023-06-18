// problem 1
// Search In Array
function SearchInArray(arr, x) {
    for (let el of arr) { 
        if (el === x) { 
            return 1;
        }
    }
    return -1;
}

// let res = SearchInArray([1, 2, 3, 4, 5, 6], 2);
// console.log(res);


// problem 2
// Largest Element In Array
function LargestElementInArray(arr) {
    let largest = arr[0];

    for (let idx = 1; idx < arr.length; idx++) { 
        if (arr[idx] > largest) { 
            largest = arr[idx];
        }
    }

    return largest;
}


// let res = LargestElementInArray([1,2,3,4,5,79,9,2,11])
// console.log(res);


// problem 3
// maximum Consequetive ones
function MaximumConsequetiveOnes(arr) { 
    
    let maxFreq = 0;
    let currFreq = 0;
    for (let val of arr) { 
        if (val === 1) {
            currFreq++;
            maxFreq = Math.max(maxFreq, currFreq);
        } else { 
                maxFreq = Math.max(maxFreq, currFreq);
                currFreq = 0;
        }
    }
    return maxFreq;
}

// let res = MaximumConsequetiveOnes([0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0])
// console.log(res);




// problem 4
// Max subArray Sum
// Naive
function MaxSubArraySumNaive(arr) {
    let MaxSum = 0;

    for (let idx1 = 0; idx1 < arr.length; idx1++) { 
        let currSum = 0;
        for (let idx2 = idx1; idx2 < arr.length; idx2++) { 
            currSum += arr[idx2];
            MaxSum = Math.max(MaxSum, currSum);
        }
    }
    return MaxSum;
}


// let res = MaxSubArraySumNaive([-1,-2,3])
// console.log(res);


function MaxSubArraySumKadanes(arr) { 
    let maxSum = arr[0];
    let currSum = arr[0];

    for (let i = 1; i < arr.length; i++) { 
        currSum = Math.max(arr[i]+currSum, currSum);
        maxSum = Math.max(currSum,maxSum)
    }
    return maxSum;
}

// let res = MaxSubArraySumKadanes([4, -2, -3]);
// console.log(res);


// function maximum Length of Even odd Subarray
function maximumEvenOddLengthNaive(arr) { 
    let MaxLength = 0;
    
    for (let idx1 = 1; idx1 < arr.length; idx1++) { 
        let currLength = 1;

        for (let idx2 = idx1; idx2 < arr.length; idx2++) { 
            if ((arr[idx2] % 2 === 0 && arr[idx2 - 1] % 2 !== 0) || (arr[idx2] % 2 !== 0 && arr[idx2 - 1] % 2 === 0)) {
                currLength++;
            } else { 
                break;
            }
        }

        MaxLength = Math.max(MaxLength, currLength);
    }
    return MaxLength;
}


// let res = maximumEvenOddLengthNaive([1,2,2,3,3,4,5,6])
// console.log(res);

function maximumEvenOddLengthkadanes(arr) { 
    let maxLen = 1;
    
    let currLen = 1;
    for (idx = 1; idx < arr.length; idx++) { 
        if ((arr[idx]%2 === 0 && arr[idx - 1] % 2 !== 0) || (arr[idx]%2 !== 0 && arr[idx - 1]%2 === 0)) {
            currLen++;
            maxLen = Math.max(maxLen, currLen);
        } else { 
            currLen = 1;
        }
    }
    return maxLen;
}

// let res2 = maximumEvenOddLengthkadanes([1, 2, 2, 3, 3, 4, 5, 6])
// console.log(res2);



function MajorityElementNaive(arr) { 
    let n = arr.length;
    for (let i = 0; i < n; i++) { 
        count = 1;
        for (let j = i+1; j < n; j++) { 
            if (arr[j] === arr[i]) { 
                count++;
            }
        }

        if (count >= n / 2) { 
            console.log(arr[i]);
        }
    }
}


// MajorityElementNaive([1, 2, 1, 2, 2]);


// find majority elements efficient solution


function Majority(arr) { 
    let idx = 0;
    let count = 1;

    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === arr[idx]) {
            count++;
        } else { 
            count--;
        }

        // again initialize the value of count become zero
        if (count === 0) { 
            idx = i;
            count = 1;
        }
    }

    return idx;
}


function FindMajorityOptimized(arr) { 
    let idx = Majority(arr);
    // now check whether it's frequency is more than n/2 or not?
    count = 0;
    let n = arr.length;
    for (let i = 0; i <n; i++) { 
        if (arr[i] === arr[idx]) { 
            count++;
        }
        if (count >= n / 2) {
            return arr[idx];
        }
    }

    return -1;
}



// let res = FindMajorityOptimized([1,2,1,3,1,4,1]);
// console.log(res);



function MaximumSumOFKCosequetiveElementNaive(arr,k) {
    let n = arr.length;
    let maxSum = 0;
    for (let i = 0; i < n - (k - 1); i++) { 
        let currSum = 0;
        for (let j = i; j < i + k; j++) {
            currSum += arr[j];
        }
        maxSum = Math.max(currSum,maxSum);
    }
    return maxSum;
}


// let res = MaximumSumOFKCosequetiveElementNaive([1, 2, 3, 4, 5, 6], 3)
// console.log(res);



function MaximumSumOFKCosequetiveElementOptimise(arr, k) {
    let max = 0;
    let sum = 0;
    let n = arr.length;

    for (let i = 0; i < k; i++) { 
        sum += arr[i];
    }

    max = Math.max(max, sum);
    for (let j = k; j < n; j++) { 
        sum = sum + arr[j] - arr[j - k];
        max = Math.max(sum, max);
    }

    return max;
}


let res = MaximumSumOFKCosequetiveElementOptimise([1, 2, 3, 4, 5, 6], 3);
console.log(res);


