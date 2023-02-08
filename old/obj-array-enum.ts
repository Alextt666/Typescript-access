// const person:{
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number,string];
// } = {
//     name:'alex',
//     age:18,
//     hobbies:['Sports','Cooking'],
//     role:[0,'author']
// }
// person.role.push('admin');
// person.role[0] = 10;

enum Role{ ADMIN , READ_ONLY, AUTHOR};

const person = {
  name: 'alex',
  age: 18,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person.role === Role.AUTHOR)