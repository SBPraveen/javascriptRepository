/*
? Hash Tables
hash Tables are like books with index => Meaning we can reach out to values faster
These are unordered collection of data.
They are used for quick lookups
Can be implemented using maps, set, object.
insertion and removal takes constant time
Flexible keys => Strings, functions etc
Here keys are converted into memory address using the hashing function
Hash tables cannot be sorted

Here we use arrays for storage(We can also use Linked List but it is complex)
We don't use objects because we shouldn't implement an object with a object 
if two input values are hashed and are having the same index use sub-arrays => [ [ ['one':1],['two':2] ],[],[],[] ] 
                                                                    index =>          0[1]      0[2]     1  2  3
Note:
take into account,
1) the problem of resizing 
2) the problem of collisions
*/

class HashTable{
    constructor(){
        this._storage = [];
    }
    insert(){

    }
    remove(){

    }
    retrieve(){
    
    }
    _hash(str, n) {
        let sum = 0;
        for(let i=0; i<str.length; i++){
            sum += str.charCodeAt(i)*3
        }
        return sum%n;
    }

}

const myHashTable = new HashTable();
console.log(myHashTable);