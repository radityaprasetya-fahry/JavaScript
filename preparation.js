// // const barang = [
// //     {
// //         kode: "kb-001",
// //         nama: "keyboard mechanical",
// //         harga: 450000
// //     },
// //     {
// //         kode: "ms-002",
// //         nama: "mouse gaming",
// //         harga: 250000
// //     },
// //     {
// //         kode: "hs-003",
// //         nama: "headset",
// //         harga: 350000
// //     }
// // ];

// // const pembelianBarang = 7
// // const harga = barang [1].harga

// // const total = harga * pembelianBarang;
// // let diskon = 0;

// // if (jumlah >= 5) {
// //     diskon = (total * 10)/100;
// // }
// // let totalBayar = total - diskon;

// // console.log("Harga satuan : ", harga);
// // console.log("Jumlah : ", jumlah);
// // console.log("Total harga : ", totalharga);
// // console.log("Diskon : ", diskon);

// const daftarsiswa = [
//     {
//         nama: "Andi",
//         kelas: "XI SIJA",
//         nilai: 85,
//         kehadiran: 90
//     },
//     {
//         nama: "Budi",
//         kelas: "XI SIJA",
//         nilai: 65,
//         kehadiran: 85
//     },
//     {
//         nama: "Citra",
//         kelas: "XI SIJA",
//         nilai: 92,
//         kehadiran: 95
//     },
//     {
//         nama: "Siti",
//         kelas: "XI SIJA",
//         nilai: 75,
//         kehadiran: 75
//     },
    
// ]

// for (let i = 0; i< daftarsiswa.length; i++){
//     if (daftarsiswa[i].nilai>=75 && daftarsiswa[i].kehadiran >= 80){
//         console.log(daftarsiswa[i])
//     }
// }


// const barangToko=[
//     {
//         nama:"KeyBoard",
//         stok:10
//     },
//     {
//         nama:"Mouse",
//         stok:3
//     },
//     {
//         nama:"Headset",
//         stok:0
//     },
//     {
//         nama:"Webcam",
//         stok:7
//     },
//     {
//         nama:"USB Hub",
//         stok:2
//     }
// ]

// for (let i = 0; i<barangToko.length; i++){
//     if (barangToko[i].stok == 0){
//         console.log(barangToko[i].nama, " - Stok Kosong")
//     }else if(barangToko[i].stok >= 1 && barangToko[i].stok < 5){
//         console.log(barangToko[i].nama, " - Stok Sedikit")
//     }else if(barangToko[i].stok >= 5 && barangToko[i].stok > 5){
//         console.log(barangToko[i].nama, "- Stok Tersedia")
//     }
// }

for(let i = 0; i <= 10; i++) {
    console.log(i)
}