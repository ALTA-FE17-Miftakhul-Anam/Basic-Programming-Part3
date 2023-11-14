function compareString(a: string, b: string): string {
    // Inisialisasi variabel untuk menyimpan hasil substring yang sama
    let result = "";

    // Tentukan panjang string terpendek dari A dan B
    let minLength = Math.min(a.length, b.length);

    // Loop untuk membandingkan karakter per karakter
    for (let i = 0; i < minLength; i++) {
        // Jika karakter pada posisi i sama, tambahkan ke hasil
        if (a[i] === b[i]) {
            result += a[i];
        } else {
            // Jika karakter tidak sama, hentikan loop karena substring tidak lagi sama
            break;
        }
    }

    return result;
}

console.log(compareString("AKA", "AKASHI")); // AKA
console.log(compareString("KANGAROO", "KANG")); // KANG
console.log(compareString("KI", "KIJANG")); // KI
console.log(compareString("KUPU-KUPU", "KUPU")); // KUPU
console.log(compareString("ILALANG", "ILA")); // ILA
