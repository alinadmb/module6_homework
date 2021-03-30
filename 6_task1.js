function countElements(arr) {
    let oddCount = 0;
    let evenCount = 0;
    let zeroCount = 0;
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "number"){
            if(arr[i] === 0){
                zeroCount++;
            }
            else if(arr[i] % 2 == 0){
                evenCount++;
            }
            else {
                oddCount++;
            }
        }
    }
    console.log(`Count of odd: ${oddCount}`);
    console.log(`Count of even: ${evenCount}`);
    console.log(`Count of zero: ${zeroCount}`);
}
let arr = [1, 2, 3, 4, 5, 6, 7, "srt", 0, null];
countElements(arr);