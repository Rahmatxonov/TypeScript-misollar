// 1-misol

const numbers = [];

while (true) {
  const input = prompt("Please create number");

  if (input === null) {
    break;
  }

  const number = parseFloat(input);

  if (!isNaN(number) && number > 1) {
    numbers.push(number);
  } else {
    console.log("NaN");
  }
}

// console.log(numbers);

// 2-misol

// function engKattaQiymat(array: number[]): number {
//   if (array.length === 0) {
//     throw new Error("Array bo'sh");
//   }

//   let maxQiymat = array[0];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > maxQiymat) {
//       maxQiymat = array[i];
//     }
//   }

//   return maxQiymat;
// }

// const testArray: number[] = [3, 7, 2, 9, 13, 6];
// const maxQiymat = engKattaQiymat(testArray);
// console.log(`Eng katta qiymat: ${maxQiymat}`);

// 3-misol

// const array: string[] = ["JavaScript", "Python", "Java", "C++", "Ruby"];
// const soz = prompt("Iltimos, so'z kiriting:");

// function sozniTekshir(array: string[], soz: string): boolean {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === soz) {
//       return true;
//     }
//   }
//   return false;
// }

// if (soz !== null) {
//   const natija = sozniTekshir(array, soz);
//   console.log(natija);
// } else {
//   console.log("So'z kiritilmadi.");
// }

// 4-misol

// function juftRaqamlar(array: number[]): number[] {
//   let juftArray: number[] = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       juftArray.push(array[i]);
//     }
//   }

//   return juftArray;
// }

// const testArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log("Juft raqamlar:", juftRaqamlar(testArray));

// 5-misol

// function arrayYigindisi(array: number[]): number {
//   let yigindi: number = 0;

//   for (let i = 0; i < array.length; i++) {
//     yigindi += array[i];
//   }

//   return yigindi;
// }

// const testArray: number[] = [1, 2, 3, 4, 5];
// console.log("Array yig'indisi:", arrayYigindisi(testArray));

// 6-misol

// const users: any[] = [
//   {
//     id: 1,
//     name: "John",
//     email: "john@example.com",
//     password: "123456",
//     address: "123 Main St",
//   },
//   {
//     id: 2,
//     name: "Alice",
//     email: "alice@example.com",
//     password: "abcdef",
//     address: "456 Elm St",
//   },
//   {
//     id: 3,
//     name: "Bob",
//     email: "bob@example.com",
//     password: "qwerty",
//     address: "789 Oak St",
//   },
// ];

// function getNameAndEmail(
//   users: any[],
//   name: string
// ): { name: string; email: string } | null {
//   const user = users.find((user) => user.name === name);
//   return user ? { name: user.name, email: user.email } : null;
// }

// const result = getNameAndEmail(users, "Alice");

// if (result) {
//   console.log("Foydalanuvchi nomi:", result.name);
//   console.log("Foydalanuvchi emaili:", result.email);
// } else {
//   console.log("Foydalanuvchi topilmadi.");
// }

// users.forEach((user: any) => {
//   console.log("Foydalanuvchi nomi:", user.name);
//   console.log("Foydalanuvchi emaili:", user.email);
// });

// 7-misol

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   address: string;
// }

// const users: User[] = [
//   {
//     id: 1,
//     name: "John",
//     email: "john@example.com",
//     password: "123456",
//     address: "123 Main St",
//   },
//   {
//     id: 2,
//     name: "Alice",
//     email: "alice@example.com",
//     password: "abcdef",
//     address: "456 Elm St",
//   },
//   {
//     id: 3,
//     name: "Bob",
//     email: "bob@example.com",
//     password: "qwerty",
//     address: "789 Oak St",
//   },
//   {
//     id: 10,
//     name: "Jane",
//     email: "jane@example.com",
//     password: "123abc",
//     address: "321 Pine St",
//   },
// ];

// function findAddressById(id: number, users: User[]): string | null {
//   const user = users.find((user) => user.id === id);
//   return user ? user.address : null;
// }

// const userId: number = 3;
// const address: string | null = findAddressById(userId, users);

// if (address) {
//   console.log(
//     `User id si ${userId} bo'yicha topilgan foydalanuvchi manzili: ${address}`
//   );
// } else {
//   console.log(`User id si ${userId} bo'yicha foydalanuvchi topilmadi.`);
// }

// 8-misol

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   address: string;
// }

// function extractNames(users: User[]): string[] {
//   const names: string[] = [];
//   for (let user of users) {
//     names.push(user.name);
//   }

//   return names;
// }

// const users: User[] = [
//   {
//     id: 1,
//     name: "John",
//     email: "john@example.com",
//     password: "123456",
//     address: "123 Main St",
//   },
//   {
//     id: 2,
//     name: "Alice",
//     email: "alice@example.com",
//     password: "abcdef",
//     address: "456 Elm St",
//   },
//   {
//     id: 3,
//     name: "Bob",
//     email: "bob@example.com",
//     password: "qwerty",
//     address: "789 Oak St",
//   },
// ];

// console.log("Extracted names:", extractNames(users));

// 9-misol

// function engKattaRaqamlar(array1: number[], array2: number[]): string[] {
//   const engKatta: string[] = [];

//   for (let i = 0; i < array1.length; i++) {
//     const max = Math.max(array1[i], array2[i]);
//     engKatta.push(max.toString());
//   }

//   return engKatta;
// }

// const array1: number[] = [3, 7, 2, 9, 1, 56, 78];
// const array2: number[] = [4, 6, 8, 2, 5, 89, 7];

// const resultArray: string[] = engKattaRaqamlar(array1, array2);

// console.log("Eng katta raqamlar:", resultArray);

// 10-misol Juft va Toqlarini qaytaradi

// function juftToqAjrat(array: number[]): [number[], number[]] {
//   const juftArray: number[] = [];
//   const toqArray: number[] = [];

//   for (let num of array) {
//     if (num % 2 === 0) {
//       juftArray.push(num);
//     } else {
//       toqArray.push(num);
//     }
//   }

//   return [juftArray, toqArray];
// }

// const testArray: number[] = [-5, 2, 7, -12, 9, 6];
// const [juftlar, toqlar] = juftToqAjrat(testArray);

// console.log("Juft raqamlar:", juftlar);
// console.log("Toq raqamlar:", toqlar);

// 11-misol Manfiy va Musbatlarini qaytaradi

// function alohidaArrayJamlovchi(array: number[]): [number[], number[]] {
//   const manfiyArray: number[] = [];
//   const musbatArray: number[] = [];

//   for (let num of array) {
//     if (num < 0) {
//       manfiyArray.push(num);
//     } else {
//       musbatArray.push(num);
//     }
//   }

//   return [manfiyArray, musbatArray];
// }

// const testArray: number[] = [-5, 2, 7, -12, 9, 6];
// const [manfiyRaqamlar, musbatRaqamlar] = alohidaArrayJamlovchi(testArray);

// console.log("Manfiy raqamlar:", manfiyRaqamlar);
// console.log("Musbat raqamlar:", musbatRaqamlar);
