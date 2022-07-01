"use strict";
/*
1. Ձեր պատկերացումով փոփոխում և օպտիմիզացնում եք filmapp.js-ը, 
որ կոդը էլ ավելի կարճանա ու էլ ավելի արագ աշխատի

2․ ստեղծում եք 20 օրինակ Destructuring-ի, այսինքն 10 հատ զանգված 10 հատ օբջեքթ, կեսը  պետք է լինեն ճյուղավորված
 գոնե 1 աստիճան, այսինքն զանգվածի մեջ զանգված, օբջեքթի մեջ օբջեքթ, բայց պետք է լինեն նաև չճյուղավորվածները
*/
//----------------1--------------------------------array
const fruits = ["Orange", "banan", "apple", "lemon"];
const [a, b, c] = fruits;
console.log(`${a}, ${b} and ${c} are my favorite fruits.`);

//----------------2--------------------------------
const list = [];
const [a5 = 1, a12 = 20, a13 = 59] = list;
console.log(a5);

//----------------3-------------------------------
const numList = ["Արամ", "Անի", "Ալեքս", [[["Հովհաննիսյան"]]]];
const rateList = [ 18, 20, 15];
const [nam1, nam2, nam3, lastname] =numList;
const [nam1R, nam2R, nam3R] = rateList;

console.log(`Քնության մասնակիցների ցուցակ՝
${lastname} ${nam1}-${nam1R},
${lastname} ${nam2}-${nam2R},
${lastname} ${nam3}-${nam3R},
`);
//----------------4--------------------------------
const colorS = ["Orange", "Yeloww", "Green", "Red"];
const [c1, c2, c3] = colorS;

console.log(`${c1}, ${c3}`);
//----------------5--------------------------------
let a2, b2;
[a2 = 5, b2 = 7] = [1, 20];
console.log(a2); 
console.log(b2);
//----------------6--------------------------------
let a3 = 1;
let b3 = 3;

[a3, b3] = [b3, a3];
console.log(a3); // 3
console.log(b3); // 1
//----------------7--------------------------------
function S () {
    return [1,2,3,4,[[5]]];
}
const [s1, , s3, , s5]=S();
console.log (`Վիճակահանության շահող թվերն են՝ ${s1}, ${s3}, ${s5}`);

//----------------8--------------------------------
const numA = [2, 4, 6, 8, 10];
const [num1, num2, num3, num4, num5]= numA;
const numB= [num5, num4, num3, num2, num1];
console.log(numB);

//----------------9--------------------------------
const phone = ["Samsung", "Iphone", "LG"];
const [ ,phone2,] = phone;
console.log(phone2);
//----------------10-------------------------------- 
const numG = [1, 2, 3, 4, 6, 7];

const [, , , , numd1, numd2]= numG;
console.log(numd1, numd2);

//----------------11--------------------------------objects
const user1 = {
    name: "Alex",
    age: 30,
    pictures: 20,
    videos: 1,
     
};
function userInfo1 ({name, age, pictures}) {   
    console.log(`${name} is ${age} years old and has  ${pictures} pictures.`);
}
userInfo1(user1);

//----------------12--------------------------------
const mobApp = {
    name : "MusicPlay",
    payMethod : "Free",
    languages : "English",
    color : {
        backgraund : "red",
        line : "blue",
        player : "black"  
    }
};
const{backgraund: cl1, line: cl2, player: cl3  } =mobApp.color;
console.log (`MobApp aplication has ${cl1}, ${cl2}, ${cl3} colors.`);


//----------------13--------------------------------
function f() {
    return [1, 2];
  }
  let z, y;
  [z, y] = f();
  console.log(z); // 1
  console.log(y); //2

//----------------14--------------------------------
const market = {
    applePrice  : "100 դրամ",
    bananPrice  : "200 դրամ" , 
    orangePrice : "300 դրամ",
    lemonPrice  : "600 դրամ" ,
    kiwiPrice   : "400 դրամ" ,
    reserve     : { 
        apple :  "20 կգ",
        banan :  "50 կգ",
        orange : "80 կգ",
        lemon :  "90 կգ",
        kiwi :  "10 կգ"
    }
 };
 const {applePrice:p1, bananPrice:p2, orangePrice:p3, lemonPrice:p4, kiwiPrice:p5,} = market;
 const {apple:cs1, banan:cs2, orange:cs3, lemon:cs4, kiwi:cs5 } = market.reserve;
console.log (`Խնձորի գինը  ${p1} է, իսկ պահեստում մնացորդը ${cs1}:
              Բանանի գինը  ${p2} է, իսկ պահեստում մնացորդը ${cs2}:
              Նարինջի գինը ${p3} է, իսկ պահեստում մնացորդը ${cs3}:
              Լիմոնի գինը  ${p4} է, իսկ պահեստում մնացորդը ${cs4}:
              Կիվիի գինը   ${p5} է, իսկ պահեստում մնացորդը ${cs5}:`);

//----------------15--------------------------------
let ab, ac;
({ab, ac} = {ab:"red", ac: "blue"});
console.log(ab,ac);
//----------------16--------------------------------
const user = {
    name: "Անի",
    lastName: "Հակոբյան",
    family: {
        mother: "Մանե",
        father: "Հայկ",
        sister: "Աննա",
        brather: "Արթուր"
        },
        age:20,
    };
const {name:n, lastName:l} = user;
const {mother:mam, father:dad, sister:sist, brather:br} = user.family;
console.log(`${n} ${l}ի մայրը ${mam}ն է, հայրը՝${dad}ը, իսկ ${sist}ն նրա քույրն է։`);


//----------------17--------------------------------
const userԼog = {
    login: "Angi58n",
    password: "5214hn74"
};

function log( {login:log, password: pass}) {
    if(pass === "5214hn74" && log === "Angi58n"  ) {
        console.log("Welcome!!");
    } return "Some Error";

}
log(userԼog);
//----------------18--------------------------------
const {a11 = 10, b11 = 5} = {a11: 3};

console.log(a11); 
console.log(b11);
//----------------19--------------------------------
const user2 = {
    name: "Alex",
    age: 30,
    pictures: 20,
    videos: 1
   // friends: [],  
};

function userInfo2 ({name:a, age:b, pictures:c, friends :d = ["Joe","Adam", "Ani"]}) {   
    console.log(`${a} is ${b} years old and has  ${c} pictures, ${d.length} friends`);
}
userInfo2(user2);
//----------------20--------------------------------
const user3 = {
    name: "Alex",
    age: 30,
    pictures: 20,
    videos: 1,
    friends: ["Joe", "Adam",  "Ani"],  
};

function userInfo3 ({name:a, age:b, friends :d }) {   
    console.log(`${a} is ${b} years old and  ${d[2]} his best friend.`);
}
userInfo3(user3);

