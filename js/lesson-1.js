// (prompt, alert, confirm)
// alert("Ви успішно зареєструвалися"); undefined
// const login = prompt("login"); рядочок або null
// const isSure = confirm("Ви впевнені?") true або false

// const number = Number(prompt("Введіть число:"));
// console.log(number);
// if (number===10) {
//     alert('Вірно');
// }
// else{
//     alert('Невірно');
// }

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min<=15 && min>=0) {
//     alert(`${min} входить в першу чверть`);
// }
// else if(min>15&&min<=30){
//      alert(`${min} входить в другу чверть`);
// }
// else if(min>30&&min<=45){
//      alert(`${min} входить в третю чверть`);
// }
// else if(min>45&&min<=60){
//      alert(`${min} входить в четверту чверть`);
// }

// let num = Number(prompt("Введіть число"))
// let result;
// switch(num){
//     case 1:
//         result="зима";
//         break
//     case 2:
//         result="весна";
//         break
//     case 3: 
//         result="літо";
//         break
//     case 4:
//         result="осінь";
//         break
//     default:
//         result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }
// console.log(result);


// const num = Number(prompt("Введіть число від 1 до 4"));
// let result;
// switch(num){
//     case 1:
//         result = "зима";
//         break;
//     case 2:
//         result = "весна";
//         break;
//     case 3:
//         result = "літо";
//         break;
//     case 4:
//         result = "осінь";
//         break;
//     default:
//         result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }
// console.log(result);



// const number = Number(prompt("Введіть кількість хвилин"));
// const hour = Math.floor(number/60);
// const minutes = number%60;
// const result = `${hour.padStart(2, "0")}:${minutes.padStart(2,"0")}`;
// console.log(result);


// const login = prompt("Введіть логін");
// if(login==="Адмін"){
//     const password = prompt("Введіть пароль");
//     password==="Я головний" ? alert("Добрий день!") : alert("Невірний пароль!");
// }
// else if(login===null){
//     alert("Скасовано");
// }
// else{
//     alert("Я вас не знаю");
// }

// let i=0;
// while(i<=20){
//     console.log(i);
//     i++;
// }

// function getNumbers(min, max){
//     let sum = 0;
//     for(let i=max; i>=min; i--){
//         console.log(i);
//         if(i%2===0){
//             sum+=i;
//         }
//     }
//     return sum;
// }
// console.log(getNumbers(5, 15));


// function min(a, b){
//     if(typeof a !== "number" || typeof b !== "number"){
//         return 'Not a number!';
//     }
//     else{
//         // return a<b ? a : b;
//         return Math.min(a,b);
//     }
// }
// console.log(min(6,4));


// function isAdult(age){
//     return age>=18 ? true : confirm("Підтвердіть що вам 18");
// }
// let age=Number(prompt('Введіть ваш вік'));
// console.log(isAdult(age));

// function fizzBuzz(num){
//     for(let i=0; i<=num; i++){
//         console.log(i);
//         if(i%3===0 && i%5===0){
//             console.log('fizzbuzz');
//         }
//         else if(i%3===0){
//             console.log('fizz');
//         }
//         else if(i%5===0){
//             console.log('buzz');
//         }
//     }
// }
// let num=Number(prompt('Введіть число'));
// fizzBuzz(num);

// let i = 0;
// while(i!==null && i<=100){
//     i=Number(prompt('Введіть число більше 100'));
// }

// function check(adress){
//     if(adress.endsWith("/") && adress.includes("my-site")){
//         return adress+"/";
//     }
//     else{
//         return adress;
//     }
// }
