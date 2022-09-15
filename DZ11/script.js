const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
}
function createNewObj(obj){
    let newObj = {};
    return fillObj({},obj);
}

function fillObj(newObj, obj){
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            let innerObj = obj[key];
            fillObj(newObj, innerObj);
        } else{
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

console.log( createNewObj(obj) );