import { reduce } from './reduce.js';
import { items } from './index.js';
function cb(acc,value,index,elements){
    return acc+elements[index];
}
const result = reduce(items,cb,0);
console.log(result);
