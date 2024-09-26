console.log("Hello World!");

// variabila declarata si apoi atribuita valoare separat
let userName;
userName = "Monica";
console.log(userName);
userName = "_monica";
console.log(userName);

// variabila declarata si initiata cu o valoare intr-o linie 
let email = "user@test.com";
console.log(email);

// constanta declarata cu valoare
const pi = 3.14;
//pi = 3.12;  --INTERZISA RE-ATRIBUIREA DE VALORI UNEI CONSTANTE
console.log(pi);

// Operatii aritmetice 

//adunare
const sumResult = 12 + 32;
console.log("sumResult: ", sumResult);

//scadere
const differenceResult = 33-71;
console.log("difference: ",differenceResult);

//String
let password = "secret";
console.log("password: ",password);

//accesarea unui caracter dintr-un string
let secondLetterOfPassword = password[1];
console.log("a doua litera: ",secondLetterOfPassword);

//concatenare stringuri:
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " "+ lastName;
console.log("fullname: ",fullName)

//lungimea stringului
let myString = "hello people";
let myStringLength = myString.length;
console.log("lungime myString: ",myStringLength);

//metode string
let baseString = "Base";
let upper = baseString.toUpperCase();
let lower = baseString.toLowerCase();
console.log("base: ",baseString);
console.log("upperCase: ",upper);
console.log("lowerCase: ",lower);

let substringOfBase = baseString.substring(0, 2);
console.log("substringOfBase: ",substringOfBase);