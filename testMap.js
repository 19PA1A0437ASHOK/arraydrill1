import { map } from './map.js';
import { items } from './index.js';
function cb(value,index,elements){
    return  value+index;
}
const result = map(items,cb);
console.log(result);
