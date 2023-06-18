// document.body.style.backgroundColor = "black";

// problem1
// Palindrome problem
function palindrome(str1,l,h) {
    
    let low = l;
    let high = h;

    while (low < high) {
        if (str1.charAt(low) == str1.charAt(high)) {
            low = low + 1;
            high = high + 1;
        } else {
            return false;
        }
    }
    return true;
}



// problem2
// palindrome atmost one deletion
function palindrome2(str) { 
    let low = 0;
    let high = str.length - 1;

    while (low < high) { 
        if (str.charAt(low) != str.charAt(high)) {
            return (palindrome(str, low + 1, high) || palindrome(str, low, high - 1));
        } else { 
            low++;
            high--;
        }
    }
    return true;
}


// let res2 = palindrome2("abbxa");
// console.log(res2);



// Problem 3
function subsequence(str1, str2) { 
    let l1 = str1.length;
    let l2 = str2.length;

    if (l1 == l2) { 
        return true
    }

    let p1 = 0;
    let p2 = 0;
    while (p1 < l1 && p2 < l2) { 
        if (str1.charAt(p1) == str2.charAt(p2)) {
            p1++;
            p2++;
        } else { 
            p1++;
        }
    }
    if (p2 < l2) { 
        return false;
    }
    return true;
}

// recursive function
function recursive_subsequence(s1, s2, p1, p2) { 
    
    // base case
    if (p1 == s1.length && p2 == s2.length) {
        return true;
    }
    if(p1==s1.length && p2!=s2.length) { 
        return false;
    }

    
    if (s1.charAt(p1) == s2.charAt(p2)) {
        p1++;
        p2++;
    } else { 
        p1++
    }
    return recursive_subsequence(s1, s2, p1, p2);
}

// let res = recursive_subsequence("abcde", "p",0,0);
// console.log(res);



// problem 4
// check for Anagram

// brute force method
function CheckAnagram(string1, string2) {
    // O(logn) time complexity Solution
    
    if (string1.length !== string2.length) { 
        return false;
    }
    // sort both the string 
    let re1 = string1.split("").sort().join("");
    let re2 = string2.split("").sort().join("");
    return re1==re2
}

//  optimised solution;
function optimisedCheckAnagram(string1, string2) { 
    if (string1.length !== string2.length) { 
        return false;
    }

    // create an arr of size 256 & fill by 0
    let arr = new Array(256);
    for (let i = 0; i < 256; i++) { 
        arr[i] = 0;
    }

    let idx = 0;
    while (idx < string1.length) { 
        let asci1 = string1.charCodeAt(idx); 
        let asci2 = string2.charCodeAt(idx); 
        arr[asci1] += 1;
        arr[asci2] -= 1;
        idx++;
    }

    // now iterate through arr again;
    for (let el of arr) {
        if (el !== 0) { 
            return false;
        }
    }
    return true;
}

// let res = optimisedCheckAnagram("silent", "listen");
// console.log(res);



// problem 5
// left most repeating character
function left_most_repeating_char(str) {
    // o(logn) solution
    str = str.split("").sort().join("");
    

    let mf = 1;
    let mfidx = 0;
    let currf = 1;

    for (let i = 1; i < str.length; i++) { 
        if (str.charAt(i) == str.charAt(i - 1)) {
            currf++;
            if (currf > mf) {
                mf = currf;
                mfidx = i;
            }
        } else { 
            // update curr frequency
            currf = 1;
        }

    }
    return str.charAt(mfidx);
}

let res = left_most_repeating_char("abcccbb");
console.log(res);



// problem 6
// reverse string 2 leetcode
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
// If there are fewer than k characters left, reverse all of them.
//  If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

function reverse2(s, k) {
    let arr = s.split("");

    for (let idx = 0; idx < arr.length; idx = idx + (2 * k)) {
        
        let low = idx;
        let high = Math.min(idx +k-1, arr.length - 1);
        
        while (low < high) { 
            let extra = arr[low];
            arr[low] = arr[high];
            arr[high] = extra;
            low++;
            high--;
        }
    }

    return arr.join("");
}


// console.log(reverse2("abcdefgh", 3));  



// Problem 7 reverse the words

arr = "Lets Play Holi";

function ReverseWords(str) { 
    let arr = str.split(" ");
    // now we will take each str & reverse it;
    for (let idx = 0; idx < arr.length; idx++) { 
        let wordArr = arr[idx].split("");

        let low = 0;
        let high = wordArr.length - 1;
        while (low < high) { 
            let extra = wordArr[low];
            wordArr[low] = wordArr[high];
            wordArr[high] = extra;
            low++;
            high--;
        }
        // after reverse join back & store to same index
        arr[idx] = wordArr.join("");
    }
    return arr.join(" ");
}


// console.log(ReverseWords("Let's Play Holi"));



function LongestCommonPrefix(arr) { 
    res = [];

    for (let idx = 0; idx < arr[0].length; idx++) { 

        let match = true;
        for (let idx2 = 1; idx2 < arr.length; idx2++) { 

            if (idx == arr[idx2].length) { 
                match = false;
                break;
            }

            if (arr[0][idx] !== arr[idx2][idx]) { 
                match = false;
                break;
            }
        }

        if(match) {
            res.push(arr[0][idx]);
        } else { 
            break;
        }
    }

    return res.join("");

}

let rrr = LongestCommonPrefix(["flower", "f", "flo"]);
// console.log(rrr);


