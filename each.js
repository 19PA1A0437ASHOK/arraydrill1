export function each(elements,cb){
    if(!Array.isArray(elements) || typeof(cb) !== 'function'){
        return elements;
    }
    for(let index=0 ;index<elements.length;index++){
        elements[index] = cb(elements[index],index,elements);
    }
}
