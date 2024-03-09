import { each } from './each.js';
import { items } from './index.js';
function cb(value,index,elements){
    return  value+index;
}
const result = each(items,cb);
console.log(result);
