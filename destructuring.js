// const siswa = {
//     nama: "Iyas",
//     umur: 17,
//     kelas: 7,
//     hobby: "Catur"
// };

// delete siswa.kelas;
// console.log(siswa)

// const {nama:namaSiswa, umur: umurSiswa , kelas: kelasSiswa, jurusan = "Belum di Tentukan"} = siswa;
// console.log("Nama:", namaSiswa)
// console.log("Umur:", umurSiswa )
// console.log("Kelas:", kelasSiswa)
// console.log("Jurusan:", jurusan)


// const warna = ["Merah", "Hijau", "Kuning"];
// const [warna1, warna2, warna3] = warna;
// console.log(warna1, warna2)

// const siswa = [
//   {nama:"Andi", nilai:80, umur:16, kelas:8},
//   {nama:"Budi", nilai:65, umur:17, kelas:8},
//   {nama:"Citra", nilai:90, umur:16, kelas:8},
//   {nama:"Dina", nilai:75, umur:17, kelas:8},
//   {nama:"Eko", nilai:85, umur:16, kelas:8}
// ];

// siswa.forEach(({nama, nilai, umur, kelas}) => {
//     console.log("Nama:", nama);
//     console.log("Nilai:", nilai);
//     console.log("Umur:", umur);
//     console.log("Kelas:", kelas);
//     console.log("========================");
// });

const daftarHargaLaptop=[
    {nama:"Asus", harga:14000000, kondisi:"baru"},
    {nama:"Acer", harga:10000000, kondisi:"bekas"},
    {nama:"MSI", harga:27000000, kondisi:"baru"},
]
const namaHarga=daftarHargaLaptop.map(({nama,harga})=>{return {nama, harga};})
console.log(namaHarga);
daftarHargaLaptop.map(({nama, harga}) => {
    console.log("Nama:", nama, ",", "Harga:", harga);
    console.log("-------------------------")
})