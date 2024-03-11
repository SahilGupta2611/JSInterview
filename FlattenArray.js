function flattenArray(input){
    const stack = [...input]
    const res = [];
    while(stack.length){
        const last = stack.pop()
        
        if(Array.isArray(last)){
            res.push(...last.reverse())
        }else{
            res.push(last)
        }

    }
    return res.reverse()

}


console.log(flattenArray([1,2,3,[4,5],6]))
