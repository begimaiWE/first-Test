// function green(){
//     console.log('hello')
// }
// // console.log('privet')

// // green()
// function countUntil(num){
//     for(let i=1;i<=num;i++){
//         console.log(i)

//     }
// }
// // countUntil(5)

// function congrats(name,LastName){
//     console.log(`Поздравляю ${name} ${LastName} с успешным прохождением теста`)
// }
// // congrats('Jack','kim')


// //! return

// function calcTrangleSqare(base,height){
//     return(1/2)*base*height;

// }
//  console.log(calcTrangleSqare(4,5))



//  const person={
//      name:'Alex',
//      salary:30000,

//  }
//  function givePremium(salary,percent){
//      return (salary*percent)/100
//  }
  

//  person.premium=givePremium(person.salary,10)
// //  console.log(person)


// function checkAge(age){
//     if(age>18){
//         return console.log('Welcome')
//     }else{
//         return console.log('not Welcome')
//     }
// }

// // let userAge=prompt('enter your age')
// // checkAge(userAge)


// //? return без значения-немедленный выход из функции
// function chackType(elem) {
// //     if(!elem)return
// //     console.log(`Это элемент типа ${typeof elem}`)
//  }

// chackType('makers')
// chackType(0)

// function getCube(num){
//     return num*num;
// }
// console.log(getCube(2))


// function getCube(num){
//     console.log(num*num);
// }
// console.log(getCube(5))

// // Напишите программу на JavaScript для вычисления суммы двух заданных целых чисел. Если два значения одинаковы, то возвращается тройная их сумма

// function getSum (num1, num2){ 
//     if(num1 === num2){ 
//         return 3* (num1+num2) 
//     }else{ 
//         return num1+num2 
//     } 
// } 
 
// console.log(getSum(2,1))
// // Напишите функцию pow(x,n) которая возвращает x в степени n. Другими словами умножьте x на себя n раз
// function pow(x,n){
// if(n>0){
//     return x**n;
// }
// }
// console.log(pow(4,6));


// //! оьласть видимости










// //index off
// let arr =[2,3,9]
// console.log(arr.indexOf(9))

// function sum(string){
//     let wowals='aoeiuAOEIU'
//     let count=0;
//     for(let x=0;x<string.length;x++){
//         // console.log(string[x])
//         if(wowals.indexOf(string[x]) !==-1){
//             count+=1;
//         }
//     }
//     return count;
// }
// console.log(sum('hello world'))









///Lesson2=================================================================================================================================

//! замыкание
// function startFuns(){
//     return function(){
//         return "Hello"
//     }
// }
// // 1 sposob
//  console.log(startFuns()())


// //2 sposob
//  let endFunc=startFuns()
//  console.log(endFunc())


// function makeAdder(x){
//     return function(y){
//         return x+y
//     }
// }
// console.log(makeAdder(2)(3))

// let e=10
// function sum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return a+b+c+d+e;
//             }
//         }
//     }
// }
// console.log(sum(1)(2)(3)(4))


// //? Рекурсия
// function toSumRecur(num){
//     if(num<=1) return num; //точка выхода
//     return num  + toSumRecur(num-1)
// }

// console.log(toSumRecur(7));


// const array=[1,2,22,2,2,4,5,6,-11,-23]
// function finder(arr,x) {
//     const copy=[...arr];
//     if(copy,length<1)return 0;//точка выхода
//     let currentNum=copy.splice(0,1);
//     console.log(currentNum);


//     return currentNum[0]===x ? 1+finder(copy,x): finder(copy,x);

// }
// console.log(finder(array,2));



// const array = [31, 2, 1, 4, 2, 1, 5, 2, -5, -6];
// function finder (arr, x){
//   const copy = [...arr];
//   if(copy.length< 1) return 0;  // ? точка выхода
//   let currentNum = copy.splice(0,1);
// console.log(currentNum);

//   return currentNum[0]===x ? 1+ finder(copy,x) : finder(copy, x);

// }
// console.log(finder(array, 2));




// ?Фибоначи================================================================

// function fib(num){
//     if(num>1){
//         return fib(num-1)+fib(num=2)
//     }
//     return num
// }
// console.log(fib(6))





//!  lesson 3  arrow function+++++++++++++++++++++++++++++++++++++++++++++++++
// const getsum=(x,y)=>x+y;
// console.log(getsum(5,4))


// const num2=(x)=>(typeof x==='number' ? 'yes':'no')
// // console.log(num(10))


// //? arguments
// function func(a,b,c){
//     console.log(arguments)
// }
// func(10,20,30)
   

// let km = (a)=> a*1000 
// console.log(km(7))
// let km2 = (a)=>{ 
//    return  a*1000
// }


//TODO 2. У вас есть массив:  const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92]; С помощью стрелочной функции отфильтруйте и создайте новый массив с числами больше 70


// const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92] 
// const filtered=numbers.filter((number)=>number>70)
// console.log(filtered)


// Методы объекта  сылочные,примитивные
// let airplane={
//    type:'Boeing',
//    isActive:true,
//    inService:674,
//    fly:function(city){
//        console.log(`летит в ${city}`)
//    },
//    addNew(){
//        this.inService++
//    }
// }
// airplane.fly('Bishkek')
// airplane.addNew()
// console.log(airplane)

//инкримент
//динртмент



// function myFunc(){

//     console.log(this)
// }
// myFunc()


// console.log(window.navigator.platform)
// console.log(navigator.platform)
// console.log(location.href)
// console.log(screen)



// let user={
//     name:'Piter',
//     surname:'Parker',
//     age:18,
//     SayHi:()=>{
//       console.log('Hello World')
//     },
//     SayAge:function(){
//       console.log(`${user.age}`)
//     },
//     SayAll:function(){
//       console.log(`${user.name} ${user.surname} ${user.age}`)
//     }
  
//   }
//   user.SayHi()
//   user.SayAge()
//   user.SayAll()

// let num=(numbers)=>{ 
//     let arr=[] 
//     for (let i = 0; i < numbers.length; i++) { 
//         if(numbers[i] >70){ 
//             arr.push(numbers[i]) 
 
//         } 
//         return console.log(arr); 
//     } 
// }

//TODO 1. Дан объект passenger. Напишите метод для этого объекта,который возвращает информацию о пассажире. Также, напишите второй метод, который меняет значение свойства baggage на то значение, которое получает в качестве параметра.
// let passenger = {
//     firstName: 'Sam',
//     lastName: 'Winchester',
//     passportNum: 'US12345678',
//     baggage: 20,
//     getInfo(){
//         this.passportNum,
//         weight:20kg,
//     }
//   };
//   // Пример
//   passenger.getInfo(); // Passenger Sam Winchester. Passport number is US12345678. Maximum luggage weight is 20kg
//   passenger.setBaggage(30);
//   passenger.getInfo(); // Passenger Sam Winchester. Passport number is US12345678. Maximum luggage weight is 30kg

//   let passenger = { 
//     firstName: 'Sam', 
//     lastName: 'Winchester', 
//     passportNum: 'US12345678', 
//     baggage: 20, 
//     getInfo(){ 
//         console.log(`Passenger ${this.firstName} ${this.lastName}. Passport number is ${this.passportNum}. Maximum luggage weight is ${this.baggage}kg`) 
//     }, 
 
//     setBaggage(){ 
//         this.baggage = this.baggage + 10 
//     } 
 
     
// };
// let passenger = {
//     firstName: 'Sam',
//     lastName: 'Winchester',
//     passportNum: 'US12345678',
//     baggage: 20,
//   };
  
//   passenger.getInfo = function () {
//     console.log(
//      ` Passenger ${this.firstName} ${this.lastName}. Passport number is ${this.passportNum}. Maximum luggage weight is ${this.baggage}kg`
//     );
//   };
  
//   passenger.setBaggage = function (kg) {
//     this.baggage = kg;
//   };
  
//   // Пример
//   passenger.getInfo(); // Passenger Sam Winchester. Passport number is US12345678. Maximum luggage weight is 20kg
//   passenger.setBaggage(80);
//   passenger.getInfo(); // Passenger Sam Winchester. Passport number is US12345678. Maximum luggage weight is 30kg
//   // Пример
//   passenger.getInfo(); // Passenger Sam Winchester. Passport number is US12345678. Maximum luggage weight is 20kg
//   passenger.setBaggage(30);
//   passenger.getInfo(); // Passenger Sam Winchester. Passport number is US12345678. Maximum luggage weight is 30kg
  



//   TODO 3. Создайте объект calculator (калькулятор) с тремя методами: read() (читать) запрашивает два значения и сохраняет их как свойства объекта. sum() (суммировать) возвращает сумму сохранённых значений. mul() (умножить) перемножает сохранённые значения и возвращает результат
  



// let calc = { 
//     read(a,b) { 
//     this.a=+prompt('a?')
//     this.b=+prompt('b?')
//     }, 
 
//     sum(a,b) { 
//     return this.a + this.b 
//     }, 
 
//     mul(a,b){ 
//         return this.a * this.b 
 
//     }, 
// } 
 
// console.log(calc)
// calc.read()
// console.log(calc)
// alert(calc.sum())
// alert(calc.mul())


















// const checkTask=(str)=>{
//     console.log( str.split('').reverse().join(''))
//     }
//     checkTask( "JavaScript")



    // function (str)
    // {
    //        var length = str.length;
    //        count = 0;                        
    //        for(n=0; n<=length; n++)
    //        {
    //            str.charAt(n)             
    //            if(n=="B")                   
    //           count++;
    //         }
    //       return count;
    //  }
    // console.log(countBs("BoBs BoB"))


    // const checkTask= (str)=>
    // {
    //        var length = str.length; // число символов в строке
    //        count = 0;                        // счетчик
    //        for(n=0; n<=length; n++)
    //        {
    //            str.charAt(n)              // получаем  n - символ строки
    //            if(n=="B")                    //если символ наш, добавляем счетчик
    //           count++;
    //         }
    //       return count;
    //  }
    // console.log(countBs("BoBs BoB"))














//     function getArray(str) {
//       let array = [];
//       for (let i = 0; i < str.length; i++) {
//           for (j = i; j < str.length; j++)
//               array.push(str.slice(i, j + 1));
//       }
//       return array;
//   }
//   let str = "dog";
//   console.log(getArray(str))

//   let str = "dog";
//   let array = [];
//   for (let i = 0; i < str.length; i++) {
//     for (j = i; j < str.length; j++)
//         array.push(str.slice(i, j + 1));
// }

