class Person{
    constructor(name){
        this.name = name
    }
    printArrow(){
        setTimeout(()=>{
            console.log('Arrow '+this.name)
        }, 100)
    }
    printFunction(){
        setTimeout(function(){
            console.log('Function '+this.name)
        }, 100)
    }
}
let person = new Person('BOB');
person.printArrow();
person.printFunction();