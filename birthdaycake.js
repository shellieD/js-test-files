
function birthdayCakeCandle(age) {
    let candles = Array.from({length: age}, () => Math.ceil(Math.random() * 5));
    console.log(candles);

    let candlesArr = candles.sort().reverse();
    console.log(candlesArr);

    let tallCandle = candlesArr[0];
    let numOfCandles = 0;
    for (i=0; i <= candlesArr.length; i++)
        if (candlesArr[i] === tallCandle) {
            numOfCandles += 1;
        }

    return numOfCandles;
}

console.log(birthdayCakeCandle(8));