function joinArrayRemoveDuplicate(arrayA: string[], arrayB: string[]): string[] {
    // Gabungkan kedua array
    let resultArray = arrayA.concat(arrayB);

    // Buat Set untuk menyimpan nilai unik
    let uniqueSet = new Set(resultArray);

    // Konversi kembali ke array
    let uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
}

// Test cases
console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]));
// ["apel", "anggur", "lemon", "leci", "nanas"]

console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]));
// ["samsung", "apple", "sony", "xiaomi"]

console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]));
// ["football", "basketball"]
