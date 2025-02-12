/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let curr = head
    let stack = [];
    while(curr !== null){
       stack.push(curr.val)
       curr = curr.next
    }

    while(head !== null){
        
     let c= stack.pop()

        if(c !== head.val){
            return false
        }

        head = head.next

    }
    return true
};