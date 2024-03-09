import { filter } from './filter.js';
import { items } from './index.js';
function cb(value,index,elements){
    if(value%2 === 0){
        return true;
    }
}
const result = filter(items,cb);
console.log(result);
