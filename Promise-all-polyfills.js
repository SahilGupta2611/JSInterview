
const fakePromise = (value,duration, rejectForce)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(rejectForce){
                reject(new Error("something went wrong"))
                return;
            }
            resolve(value)

        },duration)
    })
}


const promisesCombined = (promisesArr)=>{
    const resultArr = []
    return new Promise((resolveCombined,rejectCombined)=>{

        for(const currentPromise of promisesArr){
            currentPromise.then((result)=>{
                resultArr.push(result)
                if(resultArr.length == promisesArr.length){
                    resolveCombined(resultArr)
                }
            }).catch(err=>{
                rejectCombined(err)
            })
        }
    })
}

// Provided by javascript
Promise.all([
    fakePromise(123,500), 
    fakePromise(456,1000),
    fakePromise(789,2000)]
).then((resultArr)=>{
    console.log(resultArr)
}).catch((err)=>{
    console.log(err)
})

// custom implementation
promisesCombined([
    fakePromise(123,500), 
    fakePromise(456,1000),
    fakePromise(789,2000)]
).then((resultArr)=>{
    console.log(resultArr)
}).catch((err)=>{
    console.log(err)
})

// practice

Promise.all(["hello",10,Promise.resolve(10)]
).then((result)=>{
    console.log(result)
}).catch(err=>console.log(err))


