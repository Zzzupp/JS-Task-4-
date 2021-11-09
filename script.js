// // Задание 1

// // Дан объект:

let user = { name: 'Tom', age: 20, isMarried: false }



// Cформировать массив строк вида "имя_поля - значение_поля":

// ['name - Tom', 'age - 20', 'isMarried - false']

// Реализовать это в виде функции, которая принимает объект и возвращает массив. Использовать цикл for-in

let massiveMaker = function(obj){
    let newMassive = [];
    for(property in obj){
        newMassive.push(`${property} + ${obj[property]}`);
    }
    console.log(newMassive);
}

massiveMaker(user);

// Задание 2.1



// Написать функцию, которая принимает два параметра и складывает их.

// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке.

function calculate(a, b){

    if (arguments.length < 2){
        console.log('введите два параметра');
    } else{
        if ( typeof a == 'number' && typeof b == 'number'){
            console.log(a + b);
        } else {
            console.log('Вы ввели не цифру!'); 
        }
    }

}
calculate(10, 'qwe');
calculate(10, 5);
calculate(10, 5.5);
calculate();
calculate(10);

// Задание 3



// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.

// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}

let randomNumber = (a) => {
    let number = getRandomInteger(1, 10);
    if (a > 10 || a < 0){
        console.log('Число должно быть от 0 до 10!')
    } else {
        if (a == number){
            console.log("Вы выиграли");
        } else {
            console.log(`Вы не угадали, ваше число - ${number}`)
        }
    }

}
let yourNumber = prompt('Введите число')
randomNumber(yourNumber);


// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.



// // Написать функцию в стрелочном синтаксисе.

// Задание 4



// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

let massive = [1, 3, 5, 10];
let copyArr = function(arr){
    console.log(massive.map(item => item));
}

copyArr(massive);

// Задание 5



// На странице в html задать список элементов li с числами. Джававскриптом нужно выбрать из этого списка четные числа и создать из них массив. Затем, используя метод forEach, создать из массива новый спсок элементов li и поместить эти элементы в исходный тег ul. Для обхода через querySelectorAll использовать цикл for-of (forEach работать не будет).

let allli = document.querySelectorAll('li');
console.log(allli);
let newMassive = [];
for(element of allli) {
    if (element.innerText % 2 == 0) {
        newMassive.push(element);
    }
}
console.log(newMassive);


let ul = document.querySelector('ul');
newMassive.forEach(element => {
    console.log(ul);
    let li = document.createElement('li');
    li.innerText = element.innerText;
    ul.appendChild(li);
});


// Задание 6

// Создать разметку формы с инпутом для текста и селектом для категории (добавить несколько option с текстом Категория 1, Категория 2, Категория 3). Под формой должны должен быть список ul. В этот список каждую секунду добавляется новый элемент li с произвольным текстом (напр. Hello). Для этого можно использовать функцию setInterval https://learn.javascript.ru/se...
// Вся разметка должна быть создана джаваскриптом. В HTML в начале body должен быть пустой.

let form = document.createElement('form');
let input = document.createElement('input');
let select = document.createElement('select');

document.body.appendChild(form);
input.setAttribute('type', 'text')
form.appendChild(input);

let something = Number(prompt('Введите число!'));
for(let i = 0; i < something; i++){
    let option = document.createElement('option');
    option.innerText = 'Категория ' + (i+1);
    select.appendChild(option);
}

form.appendChild(select);

let ul = document.createElement('ul');
document.body.appendChild(ul);

function appendChild(){
    let li = document.createElement('li');
    li.innerText = 'Hello!';
    ul.appendChild(li);
}
setInterval(appendChild, 1000);
