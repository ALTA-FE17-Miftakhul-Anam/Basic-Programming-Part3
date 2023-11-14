function removeDuplicates(array: number[]): number {
    // Handle edge case when the array is empty
    if (array.length === 0) {
        return 0;
    }

    // Inisialisasi pointer yang akan menunjuk ke elemen unik
    let uniquePointer = 0;

    // Loop melalui array dengan pointer lainnya
    for (let currentPointer = 1; currentPointer < array.length; currentPointer++) {
        // Jika elemen saat ini tidak sama dengan elemen sebelumnya, tambahkan ke elemen unik
        if (array[currentPointer] !== array[uniquePointer]) {
            uniquePointer++;
            array[uniquePointer] = array[currentPointer];
        }
    }

    // Panjang subarray yang memiliki elemen unik
    return uniquePointer + 1;
}

// Test cases
console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); // 4
console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9])); // 6
console.log(removeDuplicates([2, 2, 2, 11])); // 2
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])); // 4
console.log(removeDuplicates([1, 2, 3, 11, 11])); // 4
