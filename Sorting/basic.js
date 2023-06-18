let arr = [10, 20,30,40,50];
// console.log(arr.sort((a, b) => b - a));


// problem 1
function BubbleSort(arr) { 
    for (let i = 0; i < arr.length; i++) { 
        let swap = false;
        for (let j = 0; j < arr.length - 1; j++) { 
            if (arr[j] > arr[j + 1]) { 
                let extra = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = extra;
                swap = true;
            }
        }

        if (swap == false) { 
            break;
        }
    }
    return arr;
}

// console.log(BubbleSort(arr));


// problem 2
// selection sort
function SelectionSort(arr) { 
    for (let i = 0; i < arr.length; i++) { 
        
        let min_idx = i;
        for (let j = i + 1; j < arr.length; j++) { 
            if (arr[j] < arr[min_idx]) { 
                min_idx = j;
            }
        }

        // now swap the indices value
        let extra = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = extra;
    }
    return arr;
}


// console.log(SelectionSort([5, 4, 3, 2, 1]));



// problem 3
// for merge sort algo first learn , merge of two sorted arrays....

function mergeTwoSortedArr(arr1, arr2) { 
    let length1 = arr1.length;
    let length2 = arr2.length;

    let res = new Array(length1 + length2);

    let p1 = 0; let p2 = 0; let idx = 0;

    while (p1 < length1 && p2 < length2) {

        if (arr1[p1] <= arr2[p2]) {
            res[idx] = arr1[p1];
            p1++;
        } else { 
            res[idx] = arr2[p2];
            p2++;
        }
        idx++;
    }

    while (p1 < length1) {
        res[idx] = arr1[p1];
        p1++;
        idx++;
    }

    while (p2 < length2) {
        res[idx] = arr2[p2];
        p2++;
        idx++;
    }

    return res;
}



// let res = mergeTwoSortedArr([1, 3, 5], [2, 4, 6, 7, 8, 9])
// console.log(res);




// problem 4
function mergeFunction(arr, l, r,mid) {
    
    let l1 = mid - l + 1;
    let l2 = r - mid;

    let arr1 = new Array(l1);
    let arr2 = new Array(l2);

   
    // Copy data to temp arrays L[] and R[]
    for (var ii = 0; ii < l1; ii++)
        arr1[ii] = arr[l + ii];
    
    for (var jj = 0; jj < l2; jj++)
        arr2[jj] = arr[mid + 1 + jj];


    // now merge the two aux arr & save the values to its corresponding main arr
    let i = 0;
    let j = 0;
    let idx = l;
    while (i < l1 && j < l2) { 
        if (arr1[i] <= arr2[j]) {
            arr[idx] = arr1[i];
            i++;
        } else { 
            arr[idx] = arr2[j];
            j++;
        }
        idx++;
    }

    while (i < l1) { 
        arr[idx] = arr1[i];
        idx++;
        i++;
    }

    while (j < l2) { 
        arr[idx] = arr2[j];
        idx++;
        j++;
    }
}


function mergeTwoSortedArr(arr, l, r) { 
    if (l < r) { 
        let mid = l + parseInt(((r - l) / 2));
        mergeTwoSortedArr(arr, l, mid);
        mergeTwoSortedArr(arr, mid + 1, r);
        mergeFunction(arr, l, r,mid);
    }
}

// let aaa = [2,1,3,2,4]

// mergeTwoSortedArr(aaa, 0, 4);

// console.log(aaa);




// problem 5
function LomutoPartition(arr, l, h) { 
    let pivot = arr[h];
    let idx = l - 1;

    for (let i = l; i <= h - 1; i++) { 
        if (arr[i] < pivot) { 
            idx++;
            let aux = arr[idx];
            arr[idx] = arr[i];
            arr[i] = aux;
        }
    }

    // now move pivot to its location
    idx++;
    let aux = arr[idx];
    arr[idx] = pivot;
    arr[h] = aux;
    return idx;
}


// console.log(LomutoPartition([1, 7, 9, 2], 0, 3));

// problem 6
function QuickSort(arr, l, h,k,length) { 
    if (l <= h) { 
        let pivotIdx = LomutoPartition(arr, l, h);
        if (pivotIdx == length-k) {
            return arr[pivotIdx];
        } else if (length-k > pivotIdx) {
            return QuickSort(arr, pivotIdx + 1, h, k,length);
        } else { 
            return QuickSort(arr, l, pivotIdx - 1, k,length);
        }

    }
}


let aaaa = [1, 9, 7, 3];
// console.log(QuickSort(aaaa, 0, 3,5,4));
// console.log(aaaa);


// problem 7
// chocklet distribution problem
function chocklet(arr, mchildren) { 
    // first sort the arr;
    let length = arr.length;
    let temp = arr.sort();
    let res = arr[mchildren-1]-arr[0];
    for (let idx = 1; idx < length - mchildren; idx++) { 
        let el1 = arr[idx];
        let el2 = arr[idx + mchildren - 1];
        let diff = el2 - el1
        if (diff < res) { 
            res = diff;
        }
    }
    return res;
}


// let ressss = chocklet([1,9], 2);
// console.log(ressss);


// problem 8
// sort the arra of two types of elements
// seg positive & negative numbers

function SegPosNegative(arr) { 

    let idx = -1;

    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] <= 0) {
            idx++;
            // swap the element
            let aux = arr[i];
            arr[i] = arr[idx];
            arr[idx] = aux;
        }
    }
    return arr;
}

// let res = SegPosNegative([-2,10,20,-20,-30])
// console.log(res);



// problem 9
function SegEvenOdd(arr) { 
    let idx = -1;
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] % 2 == 0) { 
            idx++;
            // swap the element
            let aux = arr[i];
            arr[i] = arr[idx];
            arr[idx] = aux;
        }
    }

    return arr;
}

// let res = SegEvenOdd([2,3,4,5,6])
// console.log(res);



// problem 10
// seg Binary Arr
function SegBinaryArr(arr) { 
    let idx = -1;
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] == 0) { 
            idx++;
            let aux = arr[i];
            arr[i] = arr[idx];
            arr[idx] = aux;
        }
    }
    return arr;
}


let res = SegBinaryArr([0, 1, 0, 1, 1, 1, 1, 0, 0]);
console.log(res);


// sort the three types of Elemenets


function SortThreeElement(arr) {
    // we will use the dutch national flag algorith
    // we will divide the arr to three parts and maintain the three points low , mid & high

    let low = 0; let mid = 0; let high = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) { 
            
        }
    }
}