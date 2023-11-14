function meanMedian(arrayInput: number[]): void {
    // Hitung mean
    const mean = arrayInput.reduce((acc, num) => acc + num, 0) / arrayInput.length;

    // Hitung median
    const length = arrayInput.length;
    const median = length % 2 === 0 ? (arrayInput[length / 2 - 1] + arrayInput[length / 2]) / 2 : arrayInput[Math.floor(length / 2)];

    // Pembulatan hasil mean
    const roundedMean = Math.round(mean * 10) / 10;

    console.log(roundedMean, median);
}

// Test cases
console.log(meanMedian([1, 2, 3, 4])); // 2.5 2.5
console.log(meanMedian([1, 2, 3, 4, 5])); // 3 3
console.log(meanMedian([7, 8, 9, 13, 15])); // 10.4 9
console.log(meanMedian([10, 20, 30, 40, 50])); // 30 30
console.log(meanMedian([15, 20, 30, 60, 120])); // 49 30
