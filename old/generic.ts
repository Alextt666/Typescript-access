function merge<T extends object,U extends object>(objA:T,objB:U){
    return Object.assign(objA,objB);
}

const mergedObj = merge({name:'alex'},{age:18});
console.log(mergedObj.name);

//
interface Lenthy {
    length:number;
}
function countAndDescribe<T extends Lenthy>(ele:T){
    let descriptionText  = 'Got no value';
    if(ele.length === 1){
        descriptionText = 'Got one'
    }else if(ele.length > 1){
        descriptionText = 'Got more'
    }
    return [ele,descriptionText];
}

function extractAndConvert<T extends object, U extends keyof T>(obj:T,key:U){
    return obj[key];
}

class DataStorage<T>{
   private data:T[] = [];
   addItem(item:T){
    this.data.push(item);
   };
   removeItem(item:T){
    this.data.splice(this.data.indexOf(item),1);
   };
   getItems(){
      return [...this.data]
   }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('alex');
textStorage.getItems();