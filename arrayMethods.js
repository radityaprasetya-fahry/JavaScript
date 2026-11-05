// const nilai = [80, 75, 90, 85, 70, 65, 60, 50, 45, 95];
// nilai.forEach((angka) => {
//   console.log(angka);
//  });

// nilai.forEach((angka) => {
//     if (angka >= 75) {
//         console.log("Nilainya", angka + 5,  " - Lulus");
//     } else {
//         console.log("Nialinya", angka + 5,  " - Remedial");
//     }
//     });

    // const baru = ["Zulfi", "Iyas", "Arya", "Iqbal", "Reihan", "Arya", "Vano", "Faril", "Rafi", "Rama"];
    // baru.forEach((nama) => {
    //     console.log("Halo " + nama);
    // });
    
    // const siswa = [
    //     { nama: "Joko", alamat:"Solo", umur:12, kelas:7},
    //     { nama: "Owi", alamat:"Klaten", umur:13, kelas:8},
    //     { nama: "Ismail", alamat:"Sukoharjo", umur:14, kelas:9}
    // ];

    // const namaSaja = siswa.map((namaDoang) => namaDoang.nama);
    // console.log(namaSaja);
    // const umurAja = siswa.map((umurDoang) => umurDoang.umur * 2);
    // console.log(umurAja)
    
//     const nilaiBaru = [40, 45,50, 55, 60, 65, 70, 75, 80, 90];
// const nilaitidakLulus = nilaiBaru.filter((angka) => {
//     return angka <= 75;
// });
// console.log(nilaitidakLulus);

// arrayAngka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,  13, 14, 14, 15, 16, 17, 18, 19, 20];
// const ganjil=arrayAngka.filter((angka) => angka % 2 != 0)
// console.log(ganjil)

// const warTicket = [
//     {nama : "Konser",jumlah :300, dipesan:200},
//     {nama:  "Seminar",jumlah :100,dipesan:90},
//     {nama:  "Workshop",jumlah :80, dipesan:80}
// ];
// // const sisaTicket = warTicket.find((ticket) => {
// //     return ticket.jumlah - ticket.dipesan !== 100;
// // });
// // console.log(sisaTicket);
// const masihBukanKonser = warTicket.find((tiket) =>
//     tiket.jumlah - tiket.dipesan !== 0 && tiket.nama !== "Konser"
// );
// console.log(masihBukanKonser);

// const siswa = [
//   {nama:"Andi", nilai:80},
//   {nama:"Budi", nilai:65},
//   {nama:"Citra", nilai:90},
//   {nama:"Dina", nilai:75},
//   {nama:"Eko", nilai:85}
// ]

// siswa.forEach((siswa) => {
//   if (siswa.nilai >= 75) {
//     console.log(siswa.nama, "-", siswa.nilai, "-", "Lulus");
//   } else{
//     console.log(siswa.nama, "-", siswa.nilai, "-", "Remedial");
//   }
// });

// const produk = [
//     { nama: "Mouse", harga: 100000 },
//     { nama: "Keyboard", harga: 150000 },
//     { nama: "Headset", harga: 200000 },
//     { nama: "Flashdisk", harga: 50000 },
//     { nama: "Webcam", harga: 250000 },
// ]

// const hargaSaja = produk.map((hargaDoang) => hargaDoang.harga);

// const product=[
//   {nama:"Mouse", harga:100000},
//   {nama:"Keyboard", harga:150000},
//   {nama:"Headset", harga:200000},
//   {nama:"Flashdisk", harga:50000},
//   {nama:"Webcam", harga:250000}
// ]

// let hargaPromo=product.map((produk) => {
//   return {nama: produk.nama, harga: produk.harga - (produk.harga * 0.1)};
// });
// console.log(hargaPromo)
// const CalonAnggota=[
//   {nama:"Andi", nilai:85, kehadiran:90},
//   {nama:"Budi", nilai:75, kehadiran:95},
//   {nama:"Citra", nilai:90, kehadiran:85},
//   {nama:"Dina", nilai:80, kehadiran:70},
//   {nama:"Eko", nilai:88, kehadiran:100},
//   {nama:"Fajar", nilai:70, kehadiran:75},
// ]


// const siswalolos=CalonAnggota.filter((siswa) => siswa.nilai >= 80 && siswa.kehadiran >= 80)
// siswalolos.forEach((siswa) => {
//     console.log(siswa.nama)
// })
// console.log("Jumlah Anggota Yang Lolos:", siswalolos.length)

const inventaris = [
    { kode: "PC001", nama: "Komputer 1", kondisi: "Baik"},
    { kode: "PC002", nama: "Komputer 2", kondisi: "Rusak"},
    { kode: "PC003", nama: "Komputer 3", kondisi: "Baik"},
    { kode: "PC004", nama: "Komputer 4", kondisi: "Perbaikan"},
    { kode: "PC005", nama: "Komputer 5", kondisi: "Baik"}
]
const hasilCari = inventaris.find((item) => {
    return item.kode == "PC003";
});
if (hasilCari) {
    console.log("Nama perangkat: " + hasilCari.nama);
    console.log("Kondisi: " + hasilCari.kondisi);
} else {
    console.log("Perangkat tidak ditemukan");
}
