// console.log("Nama saya Radit");
// console.log("Nama saya Radit");
// console.log("Nama saya Radit");
// console.log("Nama saya Radit");
// console.log("Nama saya Radit");

// for (let i = 5; 
//     i >= 0; 
//     i--) {
//     console.log(i)
// }

// for (let i = 11; i < 20; i += 2) {
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i, "x", 1, "=", i*1)
// }

//     let total = 0;
// for (let i = 10; i <= 5; i++) { 
//     total = total + i;
//     console.log(`i=${i} -> total=${total}`);
// }

// let total = 0;
// for (let i = 10; i <= 20; i+= 2) { 
//     total = total + i;
//     console.log(`i=${i} -> total=${total}`);
// }

// let nama = ["Andi", "Budi", "Citra", "Doni", "Agus", "Yanto", "Joko", "Rifat", "Bowo", "Ganjar"];
// for (let i = 0; i < nama.length; i++) {
//     console.log(i, ".",nama[i]);
// }

// let nilai = [80, 76, 90, 60, 100];
// for (let index = 0; index < nilai.length; index++) {
//     if (nilai[index] >= 90) {
//         console.log("Nilai Ujian", nilai[index], "Atas Rata-Rata");
//     } else if (nilai[index] >= 80 && nilai[index] < 90) {
//         console.log("Nilai Ujian", nilai[index], "Bagus");
//     } else if (nilai[index] >= 70 && nilai[index] < 80) {
//         console.log("Nilai Ujian", nilai[index], "Cukup");
//     } else if (nilai[index] >= 60 && nilai[index] < 70) {
//         console.log("Nilai Ujian", nilai[index], "Dibawah Rata-Rata");
//     }
// }

// let nilai = [80, 65, 90, 55, 75];
// for (let i = 0; i < nilai.length; index++) {
//     if (nilai[i] >= 75) {
//         console.log("Nilainya" + nilai[i], "Lulus");
//     } else if (nilai[i] >= 80 && nilai[i] < 90) {
//        console.log("Nilainya" + nilai[i], "Lulus");
//     } else if (nilai[i] >= 70 && nilai[i] < 80) {
//         console.log("Nilainya" + nilai[i], "Lulus");
//     } else if (nilai[index] >= 60 && nilai[index] < 70) {
//         console.log("Nilainya" + nilai[i], "Tidak Lulus");
//     }
// }

// let nama = ["Ali", "Bambang", "Citra", "Doni", "Eka"];
// let nilai = [85, 60, 90, 72, 45]
// for (let i = 0; i < nama.length; i++) {
//     if (nilai[i] <= 70) {
//         console.log(nama[i],"-", nilai[i], "- Tidak Lulus");
//     } else {
//         console.log(nama[i],"-", nilai[i], "- Lulus");
//     }
// }

let angka = [12, 7, 20, 15, 8, 3, 14, 9];
for (let i = 0; i < angka.length; i++)
if (angka [i] % 2 === 0 && angka [i] >= 10) {
console.log(`${angka[i]} - Genap >=10`);
 }
 else if (angka[i] % 2 === 0 && angka[i] <10) {
    console.log(`${angka[i]} - Genap < 10`);
 }
 else {
    console.log(`${angka[i]} - Ganjil > 10`);
 }