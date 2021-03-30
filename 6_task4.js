function printNumbers(from, to) {
    let i = 0;
    const intervalId = setInterval(function (a, b) {
        console.log(a + i);
        if (a + i === b) {
            clearInterval(intervalId);
        }
        i++;
    }, 1000, from, to);
}
printNumbers(5, 10);