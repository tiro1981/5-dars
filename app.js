let bal = 60;
if (bal < 0 || bal > 100) {
  console.log("error");
} else if (bal >= 90 && bal <= 100) {
  console.log("Allo");
} else if (bal >= 70 && bal <= 89) {
  console.log("Yaxsh");
} else if (bal >= 60 && bal <= 69) {
  console.log("Qoniqarli");
} else if (bal >= 0 && bal <= 59) {
  console.log("Yeqildingiz");
}
//=--------==-------------===---------------=---------=--------------------

let login = "admin";
let password = "12345";
let isBlocked = false;
const ism = "admin";
const parol = "12345";
if (isBlocked) {
  console.log("Hisobingiz bloklangan");
} else if (login !== ism) {
  console.log("Login noto‘g‘ri");
} else if (login === ism && password !== parol) {
  console.log("Parol noto‘g‘ri");
} else if (login === ism && password === parol) {
  console.log("Xush kelibsiz!");
}
//========-------------======--------======------------====----------===-------

let total = 650000;
let isMember = true;

let discountPercent = 0; // Chegirma foizini saqlash uchun

// Chegirmalarni kattasidan kichigiga qarab tekshirish tartibi:
if (total >= 1000000) {
  discountPercent = 20;
} else if (total >= 500000 && isMember) {
  discountPercent = 15;
} else if (total >= 500000 && !isMember) {
  discountPercent = 10;
} else if (total >= 200000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

// Yakuniy summani hisoblash
let discountAmount = (total * discountPercent) / 100;
let finalAmount = total - discountAmount;

// Natijani chiqarish
console.log(`Chegirma foizi: ${discountPercent}%`);
console.log(`Chegirma summasi: ${discountAmount} so'm`);
console.log(`Yakuniy to'lov miqdori: ${finalAmount} so'm`);
//================--------===-----===---------=---=-==-==--=--==-----===----=--=--=------

let w1 = 5;
let w2 = 7;
let w3 = 9;

// 1. Tomonlardan biri 0 yoki manfiy ekanligini tekshirish (|| operatori)
if (w1 <= 0 || w2 <= 0 || w3 <= 0) {
  console.log("Tomonlar noto‘g‘ri");
}
// 2. Uchburchak tengsizligini barcha tomonlar uchun tekshirish (&& operatori)
else if (w1 + w2 > w3 && w1 + w3 > w2 && w2 + w3 > w1) {
  console.log("Uchburchak mavjud");
}
// 3. Aks holda
else {
  console.log("Uchburchak mavjud emas");
}
//===---==--=-==--=-----===-----=--=------======--==-==-=--=--==--

let orderPrice = 180000;
let region = "tashkent";
let isExpress = true;

let deliveryFee = 0; // Yetkazib berish narxi

// 1. Asosiy yetkazib berish narxini aniqlash
if (region.toLowerCase() === "tashkent") {
  if (orderPrice >= 200000) {
    deliveryFee = 0;
  } else {
    deliveryFee = 15000;
  }
} else {
}

if (isExpress) {
  deliveryFee += 20000;
}

let totalPrice = orderPrice + deliveryFee;

console.log(`Buyurtma summasi: ${orderPrice} so'm`);
console.log(`Yetkazib berish narxi: ${deliveryFee} so'm`);
console.log(`Umumiy to'lov miqdori: ${totalPrice} so'm`);

//=======----===========-----============-----============-----==---

let age = 22;
let experience = 2;
let englishLevel = "B2";
let hasCertificate = true;

if (age < 18) {
  // 1. Yoshi 18 dan kichik bo'lsa
  console.log("Yosh talabiga mos emas");
} else if (
  age >= 18 &&
  experience >= 2 &&
  (englishLevel === "B2" || englishLevel === "C1")
) {
  // 2. Yoshi kamida 18, tajribasi kamida 2 yil VA ingliz tili B2 yoki C1 bo'lsa
  console.log("Suhbatga taklif qilindi");
} else if (experience >= 1 && hasCertificate) {
  // 3. Tajribasi kamida 1 yil VA sertifikati mavjud bo'lsa
  console.log("Qo‘shimcha ko‘rib chiqiladi");
} else {
  // 4. Qolgan barcha holatlarda
  console.log("Talablarga mos emas");
}
//============--=--=--=====================------------------------===----==-----------

let balance = 850000;
let amount = 300000;
let cardBlocked = false;

if (cardBlocked) {
  // 1. Karta bloklanganligini tekshirish
  console.log("Karta bloklangan");
} else if (amount <= 0) {
  // 2. Yechiladigan summa 0 yoki manfiy ekanligi
  console.log("Summa noto‘g‘ri");
} else if (amount > 1000000) {
  // 3. Kunlik limitdan oshib ketganligi
  console.log("Kunlik limitdan oshdi");
} else if (amount > balance) {
  // 4. Hisobda yetarli mablag' yo'qligi
  console.log("Mablag‘ yetarli emas");
} else {
  // 5. Barcha shartlar bajarilganda pulni yechish va qolgan balansni chiqarish
  balance -= amount;
  console.log("Pul muvaffaqiyatli yechildi!");
  console.log(`Qolgan balans: ${balance} so'm`);
}
//===========--==-==---------------------=-==----==-----------=-----====---==--=---=--===-
let a = 12;
let b = 12;
let c = 5;

// 1. Manfiy son mavjudligini eng boshida tekshiramiz
if (a < 0 || b < 0 || c < 0) {
  console.log("Manfiy son mavjud");
}
// 2. Uchala son tengmi
else if (a === b && b === c) {
  console.log("Barcha sonlar teng");
}
// 3. Faqat ikkita son tengmi
else if (a === b || b === c || a === c) {
  console.log("Ikkita son teng");
}
// 4. Qolgan holatda barcha sonlar har xil
else {
  console.log("Barcha sonlar har xil");
}
//==---==--=--====--==-=--=---=--=--=-=--=-=--=--=--=

let averageScore = 88;
let attendance = 92;
let hasWarning = false;

// 1. Ustuvor shart: Davomati 60% dan past yoki intizomiy ogohlantirishi borlar
if (attendance < 60 || hasWarning) {
  console.log("Stipendiya berilmaydi");
}
// 2. Yuqori stipendiya sharti
else if (averageScore >= 90 && attendance >= 90) {
  console.log("Yuqori stipendiya");
}
// 3. Oddiy stipendiya sharti
else if (averageScore >= 75 && attendance >= 80) {
  console.log("Oddiy stipendiya");
}
// 4. Boshqa holatlar
else {
  console.log("Talablar bajarilmadi");
}

//====---==-==-=======--===========--=--=-=---====----=
