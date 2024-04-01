// 1.
let school = {
  telebe_adi: "ABC Məktəbi",
  adress: "Bakı, Azərbaycan",
  qebuk_tarixi: 1990,
};

// 2.
let telebelers = [];

telebelers.push({
  telebe_adi: "Resul",
  surtelebe_adi: "Eliyev",
  yas: 16,
  qiymet: 11,
  hobbies: ["gezmek", "kitab yazmaq"],
  characteristics: {
    intelligent: true,
    hardWorking: false,
  },
  qiymets: [85, 92, 78, 90],
});

telebelers.push({
  telebe_adi: "Sema",
  surtelebe_adi: "Quddretli",
  yas: 17,
  qiymet: 12,
  hobbies: ["dans etmək", "dostlarla gezmek"],
  characteristics: {
    creative: true,
    sociallyActive: true,
  },
  qiymets: [95, 88, 92, 85],
});

telebelers.push({
  telebe_adi: "Azad",
  surtelebe_adi: "Zamanbeyov",
  yas: 15,
  qiymet: 10,
  hobbies: ["şahmat oynamaq", "kodin"],
  characteristics: {
    logical: true,
    quiet: true,
  },
  qiymets: [90, 92, 88, 95],
});

// 4.
let totalqiymets = telebelers.reduce((sum, telebe) => {
  return sum + telebe.qiymets.reduce((toplam, qiymet) => toplam + qiymet, 0);
}, 0);
let averyasqiymet = totalqiymets / (telebelers.length * telebelers[0].qiymets.length);
console.log(`Qiymət ortalaması: ${averyasqiymet.toFixed(2)}`);

// 5.
telebelers.forEach((telebe) => {
  let averyastelebeqiymet =
    telebe.qiymets.reduce((toplam, qiymet) => toplam + qiymet, 0) /
    telebe.qiymets.length;
  if (averyastelebeqiymet < 90) {
    console.log(
      `${telebe.telebe_adi} ${telebe.surtelebe_adi} - Diqqət! Ortalamanız 90-dan aşağıdır.`
    );
  }
});
