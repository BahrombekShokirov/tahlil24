let a = [1,2,3,4,5,6,-1,-2,-4,-5];
let s = 0;

for(let i = 0; i < a.length; i++){
    if(a[i] < 0){
        s++;
    }
}

console.log(`${s} ta`)