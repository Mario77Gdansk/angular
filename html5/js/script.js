//typy referencyjne i prymitywne
let number = 10;
let number2 = number;

let person = {
    name: 'Jan',
    lastName: 'Kowalski'
}
let person2 = person;


person2.name = 'Andrzej'
number2 = 15;


console.log(number, number2);
console.log(person, person2);

//typy prymitywne
let ciagZnakow ='lorem ipsum';
let liczba = 10;
let logiczna = false;
let tablica = [1,2,3];

//console.log(tablica[3])

if (tablica[3] === undefined){
    console.log('Brak takiego elementu');
}

let mojaZmienna = null;
console.log(mojaZmienna & "to jest moja zmienna");
console.log(1=='1');
console.log(1==='1');
console.log(person2===person);
console.log(1/3-10/30);

console.log({name:'Jakub'} ==={name:'Andrzej'});

console.log(_.isEqual({},{}));

console.log(typeof 1);
console.log(typeof 'lorem ipsum');
console.log(typeof {});
console.log(Array.isArray([]));
console.log([] instanceof Array);

console.log([1,2,3].findIndex((el) => el === 4));
// popularne metody tablicowe to map, reduce, filter

class Person{
    constructor(name){
this.name = name;
    }
    hello(){
        console.log('Hello, my name is ' + this.name); 
        console.log(`Hello, my name is ${this.name}`);
    }
}
let mariusz = new Person('Mariusz');
mariusz.hello();

add(2,2);

//hoisting
function add(a,b){
    console.log(a+b);
}

//temporary dead zone
console.log(hoistTest);
//console.log(hoistTest2);
var hoistTest = 'lorem ipsum';
//let hoistTest2 =

document.onscroll = function(){
      if(document.body.scrollTop > 70 || document.documentElement.scrollTop >70) {
        document.querySelector('#navigation').style.padding = "0px 10px";
   }else{
        document.querySelector('#navigation').style.padding = "20px 10px";
   }
}
//// promises

const todoTasks = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => resolve(response.json()))
        .catch(error => reject(error))
})

todoTasks
    .then(taskData => {
        const myUserTasks = taskData.filter((task) => {
            return task.userId === 1
        });
        const container = document.querySelector('#todoTasks');
        myUserTasks.forEach((taskDetails) => {
            const task = document.createElement('li');
            task.innerHTML = taskDetails.title;
            container.appendChild(task);
        })
    })
    .catch(error => console.log(error));

// Dodanie kontenera do strony glownej
// Filtrowanie zwroconej tablicy po userID === 1
// Dodawanie elementów do strony głównej -> document.createElement
// document.appendChild