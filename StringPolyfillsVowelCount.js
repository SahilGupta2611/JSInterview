const vowelCount = function (){
    let vowelCountt = 0
    const vowel = ["a","e","i","o","u"]
    const strArray = this.split('')
    for (let char of strArray) { 
        if(vowel.includes(char)){
            vowelCountt++;
        }
    }

    return vowelCountt;
}

String.prototype.getVowelCount =  vowelCount;


console.log("sahil".getVowelCount())

console.log("abhishek".getVowelCount())
