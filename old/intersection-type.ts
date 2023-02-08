interface Bird {
    type:'bird';
    flyingSpeed:number;
};
interface Hourse{
    type:'hourse';
    runningSpeed:number;
}

type Animal = Bird | Hourse;

function printAnimal(animal:Animal){
    let speed;
    switch(animal.type){
        case 'bird' :
            speed = animal.flyingSpeed;
            break;
        case 'hourse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed '+ speed);
    
}
printAnimal({type:'bird',flyingSpeed:100})

// const userInput = document.querySelector('#user-input')! as HTMLInputElement;
const userInput = <HTMLInputElement>document.querySelector('#user-input')! ;

userInput.value = 'Hi there!';

interface ErrorContainer{
    [prop:string] :string;
}

const errorBag:ErrorContainer ={
    email:'Not a valid Email',
    username:'Must start with a capital character!'
}


// 函数重载
type Combinable = string | number;

function add (a:number,b:number):number;
function add (a:string,b:string):string;
function add (a:Combinable,b:Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}
const res = add('alex','miki');

const myUserInput = undefined;

const storedData = myUserInput ?? 'Default';
console.log(storedData);
