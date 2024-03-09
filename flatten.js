export function flatten(elements){
    let arr=[];
    if(!Array.isArray(elements)){
        return [];
    }
    for(let element in elements){
        if(Array.isArray(element)){
            return flatten(element);
        }
        else{
            arr.push(element);
        }
    }
    return arr;
}
