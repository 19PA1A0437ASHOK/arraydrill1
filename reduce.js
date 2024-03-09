export function reduce(elements,cb,startingValue){
    if(!Array.isArray(elements) || typeof(cb) !== 'function' || elements.length===0){
        return undefined;
    }
    let acc=startingValue;
    for(let index=0 ;index<elements.length;index++){
        acc=cb(acc,elements[index],index,elements);
    }
    return acc;
}
