export function map(elements,cb){
    if(!Array.isArray(elements) || typeof(cb) !== 'function'){
        return elements;
    }
    let arr =[];
    for(let index=0 ;index<elements.length;index++){
        arr.push(cb(elements[index],index,elements));
    }
    return arr;
}