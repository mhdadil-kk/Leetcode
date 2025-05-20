/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var grtCoDiv = function(a,b){
    while(b!==0){
        let temp=b;
        b = a%b
        a = temp
    }

    return a
}

var insertGreatestCommonDivisors = function(head) {
    let current = head;

    while(current && current.next){
        let cd = grtCoDiv(current.val ,current.next.val)
        let newNode = new ListNode(cd)

        newNode.next = current.next 
        current.next = newNode


        current = newNode.next
     }
     return head
};

