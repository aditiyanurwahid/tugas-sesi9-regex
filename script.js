// Soal no 1
let cekKalimat = /^[A-Z]/;
if (cekKalimat.test("aditiya nurwahid")) {
  console.log("Huruf pertama adalah besar");
} else {
  console.log("Huruf pertama adalah kecil");
}

// Soal no 2
let cekNomor = /^[0-9]{10,12}$/;
if (cekNomor.test("089530639095")) {
  console.log("Input yang anda masukkan benar");
} else {
  console.log("Jumlah digit yang anda masukkan salah");
}

// Soal no 3

let cari = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/;

if (cari.test == true) {
  console.log("Jawaban Benar");
} else {
}

console.log(cari.test("Bagaimana cara memulai usaha bisnis"));
console.log(cari.test("Bagaimana cara mmulai usaha bisnis"));
