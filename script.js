// Soal no 1
let cekKalimat = /(?=.*[A-Z])/;
if (cekKalimat.test("aditiya nurwahid")) {
  console.log("Huruf pertama adalah besar");
} else {
  console.log("Huruf pertama adalah kecil");
}

// Soal no 2
let cekNomor = /^([^0-9]*[0-9]){10,12}[^0-9]*$/;
if (cekNomor.test("089530639095")) {
  console.log("Input yang anda masukkan benar");
} else {
  console.log("Jumlah digit yang anda masukkan salah");
}

// Soal no 3
let cekRegex = /(?=.*[A-Z])/;
let kalimat1 = "Bagaimana cara memulai usaha bisnis";
let kalimat2 = "Bootcamp impact byte";
let kalimat3 = "Status covid hari ini";

if (cekRegex.test(kalimat1, kalimat2, kalimat3)) {
  console.log();
} else if (cexRegex.test(kalimat1)) {
  console.log("Bagaimana cara memulai bisnis");
} else if (cexRegex.test(kalimat2)) {
  console.log("Bootcamp impact byte");
} else if (cexRegex.test(kalimat3)) {
  console.log("Status covid hari ini");
} else {
}

console.log(cekRegex.test("Bagaimana cara memulai bisnis"));
console.log(cekRegex.test("bagaimana cara memulai bisnis"));
