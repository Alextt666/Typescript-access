type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';
function combine(input1:Combinable, input2:Combinable, resultCoversion:ConversionDescriptor){
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultCoversion == 'as-number'){
        return +input1 + +input2;
    }
    else{
        return input1.toString() + input2.toString();
    }
};
const resultAge = combine(18,18,'as-number');
console.log(resultAge);
const resultStringAge = combine('18','18','as-number');
console.log(resultStringAge);
const resultName = combine('alex','zhang','as-string');
console.log(resultName);