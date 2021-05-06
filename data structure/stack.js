/*
? Stacks
These are ordered data structure 
Follows Last in First out order
Eg: CallStack in javascript
Operations => Push & Pop
*/


//Implementing stack data structure 
class Stack{
    constructor(){
        this._storage = {}; // we are using an object instead of an array because we need to store the index and the value 
                                                //also accessing the vaues with the help of keys is constant time operation
        this._length = 0;
/*
"_" represents private methods and variables but there is no real privacy of classes.It means that you should not use these method/variables 
(starting with "_") out of your object. Of course technically you can, but "_" means that you should not.
dont use "myStack._storage" outsiide the object
 */ 
    }
    push(value){
        this._storage[this._length] = value;
        this._length++;
    }
    pop(){
        if(this._length){
            let lastValue = this._storage[this._length-1];
            delete this._storage[this._length-1];
            this._length--;
            return lastValue;
        }
        else{
            return undefined
        }
        
        
    }
    peek(){
        if(this._length){
            return this._storage[this._length-1]
        }
    }
}

const myStack = new Stack();
console.log(myStack);

myStack.push('one');
console.log(myStack);
myStack.push('two');
console.log(myStack);
myStack.push('three');
console.log(myStack);
myStack.push('four');
console.log(myStack);

myStack.pop();
console.log(myStack);