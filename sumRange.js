function sumRange(num){
    if(num ===1) {
        return 1;
    } 
    return num + sumRange(num-1);
}

var result = sumRange(10);
console.log(result);