// interface Greetable {
//     name:string;
//     age:number;
//     greet(phrase:string):void;
// }
// class Person implements Greetable{
//     name: string;
//     age:number = 30;
//     constructor(name:string,age:number){
//        this.name = name;
//        this.age = age
//     }
//     greet(phrase: string): void {
//         console.log(phrase+' '+this.name);
//     }
// }
// let user1 = new Person('alex',18);

// // type AddFn = (a:number,b:number)=> number;
// interface AddFn{
//     (a:number,b:number):number;
// }

// let add:AddFn;
// add=(n1:number,n2:number)=>{
//     return n1+n2;
// }