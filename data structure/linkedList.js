/*
 ? Linked List:
 A linked list is a linear data structure similar to an array. However, unlike arrays, they don't require continuous memory locations.
 Rather each node is a separate object that contains a pointer or a link to the next object in that list.
 Each node contains two items: the data stored and a link to the next node. 
 *Advantages:
    Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. 
*Disadvantages:
    Search operations are slow in linked lists. Unlike arrays, random access of data elements is not allowed.
    It uses more memory than arrays
*Types of Linked Lists
    Singly Linked Lists: Each node contains only one pointer to the next node.
    Doubly Linked Lists: Each node contains two pointers, a pointer to the next node and a pointer to the previous node.
    Circular Linked Lists: The last node points to the first node thereby forming a loop.
*linked List in Javascript
const list = {
    head: {
        value: 6
        next: {
            value: 10                                             
            next: {
                value: 12
                next: {
                    value: 3
                    next: null	
                    }
                }
            }
        }
    }
};

 */

class LinkedList{
    constructor(value){
        this._head = {value:value, next:null};
        this._tail = this._head;
        this._size = 1;
    }


    findCurrent(value){
        let currentNode = this._head;
        while(currentNode.value !== value){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    findPrevious(value){
        if(this.isHead(this.findCurrent(value))){
            return null;
        }
        let beforeNode = this._head;
        while(beforeNode.next.value !== value){
            beforeNode = beforeNode.next;
        }
        return beforeNode;
    }


    insertEnd(value){
        const node = {value:value, next:null};
        this._tail.next = node;//if we use "this._head.next = node;" there would be only two nodes(head and tail) as we insert more nodes 
        this._tail = node;                                       //head and tail gets updated  to the new values but the nodes doesn't get inserted
        this._size += 1;
    }

    insertBeginning(value){
        const node = {value:value, next:this._head};      
        this._head = node;                      
        this._size += 1;
    }


    deleteTail(){
        //loop and find the node that is before the tail
        let lastBeforeNode = this.findPrevious(this._tail.value);
        lastBeforeNode.next = null;
        this._tail = lastBeforeNode;
        this._size -= 1;
    }
    
    
    delete(value){
         nodeToBeDeleted = this.findCurrent(value);
         //Find if it is the head node
         if (nodeToBeDeleted.isHead()){
            this._head = nodeToBeDeleted.next;
            return 1;
         }
        let beforeNode = this.findPrevious(value);
        let afterNode = nodeToBeDeleted.next;
        beforeNode.next = afterNode
        this._size -= 1;
    } 


    constains(value){
        let currentNode = this._head;
        while(currentNode.value !== value){
            currentNode = currentNode.next;
        }
        return currentNode.value === value;
    }


    isHead(node){
        return node === this._head;
    }


    isTail(node){
        return node === this._tail;
    }
}
const myLinkedList = new LinkedList(1);
myLinkedList.insertEnd(2);
myLinkedList.insertEnd(3);
myLinkedList.insertEnd(4);
myLinkedList.insertEnd(5);
myLinkedList.insertEnd(6);
myLinkedList.insertEnd(7);
console.log(myLinkedList);

// console.log(myLinkedList.findPrevious(1));

// console.log(myLinkedList.findCurrent(7));

myLinkedList.insertBeginning(0);
console.log(myLinkedList);
