export function filter(elements,cb){
    if(!Array.isArray(elements) || typeof(cb) !== 'function'){
        return elements;
    }
    let arr =[];
    for(let index=0 ;index<elements.length;index++){
        if((cb(elements[index],index,elements))){
            arr.push(elements[index]);
        }
    }
    return arr;
}