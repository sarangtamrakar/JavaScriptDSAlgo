
// create Linked List Node in JS
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);




// 1.
// iterate through the linked list
function Iterate(head) {
    if (head == null) {
        return;
    }
    console.log(head.data);
    Iterate(head.next);
}


// Iterate(head);


// 2. 
// Search Element in Linked List if found return idx else -1
function Search(head, x) {

    if (head == null) {
        return false;
    }

    if (head.data == x) {
        return true;
    }

    return Search(head.next, x);

}



// res = Search(head, 0);
// console.log(res);



// 3.
// Insert At Position index into Linked List
function InsertAt(head, val, index) {

    temp = new Node(val);

    if (head == null) {
        return temp;
    }
    if (index <= 0) {
        temp.next = head;
        return temp;
    }


    idx = 0;
    curr = head;
    while (idx < index - 1 && head.next != null) {
        curr = curr.next;
    }

    next = curr.next;
    curr.next = temp;
    temp.next = next;
    return head;
}

// baba = InsertAt(head, 54, 0);


// 4. 
// De at index 1;
function DeAtIndex(head, index) {
    idx = 0
    curr = head;
    while (idx < index - 1 && curr.next != null) {
        curr = curr.next;
        idx++;
    }

    if (curr.next == null) {
        return head;
    }

    else {
        curr.next = curr.next.next;
    }

    return head;

}


// DeAtIndex(head, 3);



// 5. 
// de nth index from last
function DeNthIndexFromLast(head, M) {
    p1 = head;
    p2 = head;
    idx = 0;
    while (idx < M && p1 != null) {
        p1 = p1.next;
        idx++;
    }

    // Edge case to de last element from last;
    if (p1 == null) {
        return head.next;
    }


    // now increment both 
    while (p1.next != null) {
        p1 = p1.next;
        p2 = p2.next;
    }

    p2.next = p2.next.next;
    return head;

}


// ree = DeNthIndexFromLast(head,8)


// 6.
// Reverse the LinkedList

function ReverseLinkedList(head) {
    if (head == null) {
        return head;
    }

    curr = head;
    prev = null;
    while (curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}


// Iterate(head);
// res = ReverseLinkedList(head);
// Iterate(res);



// loop detection
// creating looped linked list
head1 = new Node(10);
head1.next = new Node(20);
head1.next.next = new Node(30);
head1.next.next.next = new Node(40);
head1.next.next.next.next = head1.next.next;

// approach 1
// using hashset
function loopDetection1(head) {
    curr = head;
    hset = new Set();

    while (curr != null) {
        if (hset.has(curr)) {
            return true;
        } else {
            hset.add(curr);
            curr = curr.next;
        }
    }
    return false;
}



function loopDetection2(head) {

    slow = head;
    fast = head.next.next;

    while (slow !== null && fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}


// res = loopDetection2(head1);
// console.log(res);



// detect & remove the loop in linkedList;

function DetectAndRemoveLoop(head) {

    sentialNode = new Node(-1);
    sentialNode.next = head;
    hset = new Set();
    isLoop = false;

    while (sentialNode != null) {
        if (hset.has(sentialNode.next)) {
            isLoop = true;
            break;
        } else {
            hset.add(sentialNode.next);
            sentialNode = sentialNode.next;
        }
    }

    if (isLoop) {
        sentialNode.next = null
        return head;
    } else {
        return head;
    }
}


// let res = DetectAndRemoveLoop(head1);
// Iterate(res);


// separate the even & odd linked list from main list;
// [1,2,3,4,5,6] => [1,3,5] + [2,4,6] = [1,3,5,2,4,6];


class SeparateEvenOddList {


    separate(head) {
        let es = null; let ee = null;
        let os = null; let oe = null;
        let curr = head;

        while (curr !== null) {
            // check for even 
            if (curr.data % 2 === 0) {

                if (es == null) {
                    es = curr;
                    ee = curr;
                } else {
                    ee.next = curr;
                    ee = ee.next;
                }
            } else {
                // for odd

                if (os == null) {
                    os = curr;
                    oe = curr;
                } else {
                    oe.next = curr;
                    oe = oe.next;
                }
            }
            curr = curr.next;
        }

        if ((es == null) || (os == null)) {
            // means either all elements are even or odd only;
            return head;
        } else {
            oe.next = es;
            ee.next = null;
            // return os;
            // or return head; both are same thing;
            return head;
        }
    }
}



let head2 = new Node(1);
head2.next = new Node(2);
head2.next.next = new Node(3);
head2.next.next.next = new Node(4);
head2.next.next.next.next = new Node(5);
head2.next.next.next.next.next = new Node(6);

// obj1 = new SeparateEvenOddList()
// let res = obj1.separate(head2);
// Iterate(res);






// merge two sorted linked lists

function MergeTwoSortedLinkedList(l1, l2) { 
    let head = new Node(-1);
    let dummy = head;

    while (l1 !== null && l2 !== null) { 
        
        if (l1.data <= l2.data) {
            dummy.next = l1;
            dummy = dummy.next;
            l1 = l1.next;
        } else { 
            dummy.next = l2;
            dummy = dummy.next;
            l2 = l2.next;
        }
    }

    if (l1 != null) {
        dummy.next = l1;
    } else if (l2 != null) {
        dummy.next = l2;
    }

    return head.next;

}


let l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(3);
l1.next.next.next = new Node(4);

let l2 = new Node(4);
l2.next = new Node(5);
l2.next.next = new Node(6);
l2.next.next.next = new Node(7);


// let ans = MergeTwoSortedLinkedList(l1, l2);

// Iterate(ans);






// add two numbers
function addTwoNumbersGivenTwoLinkedList(l1, l2) {
    let head = new Node(-1);
    let dummy = head;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        
        let a = 0;
        let b = 0;

        if (l1 !== null) { 
            a = l1.data;
            l1 = l1.next;
        }

        if (l2 !== null) { 
            b = l2.data;
            l2 = l2.next;
        }

        let sum = a + b + carry;
        carry = parseInt(sum/10);
        dummy.next = new Node(parseInt(sum % 10));
        dummy = dummy.next;
    }

    // imp point
    if (carry === 1) { 
        dummy.next = new Node(carry);
        dummy = dummy.next;
    }

    return head.next;
}


let aaaa = addTwoNumbersGivenTwoLinkedList(l1, l2);

Iterate(aaaa);


