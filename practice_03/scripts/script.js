// 1.	Написать программу, которая находит параграфы и заменяет в каждом из них текст на “привет”.


// const paragraphs = document.querySelectorAll('p')
// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].innerText = 'Привет';
// }

// 2.	Написать скрипт, который находит параграфы и первым 3 параграфам меняет текст на указанные пользователем значения.

// const pElem = document.querySelectorAll("p");
// for (let i = 0; i < 3; i++) {
//   pElem[i].innerText = prompt()
// }

// 3.	Написать скрипт, который находит картинки в блоке с классом main и первым 5 картинкам меняет url на указанное значение.


// let url = 'http://i1.wallbox.ru/wallpapers/main/201642/priroda-ptica-zimorodok-kingfisher.jpg'

// const img = document.querySelectorAll(".main>img")
// for (let i = 0; i < 5; i++) {
//     // img[i].src = url
// img[i].setAttribute('src', url)
// }


// 4.	Написать скрипт, который находит все ссылки на странице и формирует массив со всеми адресами. В итоге этот массив необходимо вывести в консоль.

const links =document.querySelectorAll("a")

 let array = [] 
for (let i = 0; i < links.length; i++) {
    array.push(links[i].href);
}

console.log(array);

// 5.	Написать цикл, который создает множество div-ов c цветами от rgb(255, 0, 255) до rgb(255, 255, 255). У дивов цвет должен меняться с шагом 10.

// for (let i = 0; i <= 255; i += 10) {
//     const divElem = document.createElement("div");
//     divElem.style.width = "150px";
//     divElem.style.height = "10px";
//     divElem.style.backgroundColor = `rgb(255, ${i}, 255)`;
//     document.body.append(divElem);
// }

// 6.	Создайте новый элемент <p>, добавьте ему текст и добавьте его после элемента с id "existingElement".

// 7.	Создайте новый элемент <div>, добавьте ему класс "box" и добавьте его перед элементом с классом "box-container".

// 8.	Создайте новый элемент <span>, добавьте ему текст и вставьте его внутрь элемента с id "parentElement".

// 9.	Удалите элемент с классом "removeMe".

// 10.	Создайте новый элемент <li>, добавьте ему текст и вставьте его в начало списка с id "myList".

// 11.	Удалите все дочерние элементы из элемента с id "clearMe".

// 12.	Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца(число) в квадрат.

// let paragraph = document.querySelector('.num');
// let button = document.querySelector('.btn');

// button.addEventListener('click', function() {
//     paragraph.innerText = Number(paragraph.innerText) ** 2;
// });

// 13.	Дан абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац.

// const paragraph = document.querySelectorAll('.num');
// const button = document.querySelector('.btn');

// button.addEventListener('click', function() {
//   let sum = 0;

//   for (let i = 0; i < paragraph.length; i++) {
//     sum += Number(paragraph[i].innerText);
//   }

//   paragraph[0].innerText = sum;
// });


// 14.	Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.

// const paragraph = document.querySelectorAll('.num1');
// const button = document.querySelector('.btn');

// button.addEventListener('click', function() {
//   let sum = 0;

//   for (let i = 0; i <= 100; i++) {
//     sum += i;
//   }

//   paragraph[0].innerText = sum;
// });


// 15.	Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див.

// const paragraph = document.querySelectorAll('.num1');
// const button = document.querySelector('.btn');
// const divElem=document.querySelector('.all');

// button.addEventListener('click', function() {
//       let sum = 0;
    
//       for (let i = 0; i < paragraph.length; i++) {
//         sum= sum+1;
//       }
    
//      divElem.innerText = sum;

//     });


// 16.	Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку.

// const paragraph = document.querySelectorAll('.num1');
// const button = document.querySelector('.btn');

// button.addEventListener('click', function() {
        
//       for (let i = 0; i < paragraph.length; i++) { 
//         paragraph[i].innerText = i+1;
        
//       }
    
    

//     });


// 17.	Даны ссылки и кнопка. По нажатию на кнопку получите массив значений атрибута href ссылок и выведите в консоль.

// const alink =document.querySelectorAll ('a')
// const button = document.querySelector('.btn')

//  button.addEventListener('click', function() {
//         const linkArray=[];
// for (let i=0; i< alink.length; i++) 
// {
// linkArray.push (alink [i].href);
// }
//         console.log (linkArray);

               
//         });
                 


// 18.	Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.

// const alink =document.querySelector ('a')
// const button = document.querySelector('.btn')
// const paragraph = document.querySelector('.num1')

//  button.addEventListener ('click', function() {
   
// paragraph.innerText=alink.href
// }
// );

// 19.	Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте размеры дива в два раза.

const divElem= document.querySelector ("#mydiv")
divElem.style.height= "100px";
divElem.style.width= "100px";
divElem.style.border= "1px solid black";

button.addEventListener ('click', function() {
  divElem.style.height= "200px";
  divElem.style.width= "200px";
)}
  



// 20.	Создать кнопку. При клике на нее создать новый элемент (например, параграф). При повторном клике на кнопку удалять последний созданный элемент.

// 21.	Создать блок. При наведении на блок добавлять в него дополнительный элемент (например, изображение), который исчезает при уводе мыши.

// 22.	Создать элемент (например, кнопку). При наведении на нее изменять ее стиль (например, цвет фона или шрифт). При уводе мыши возвращать исходный стиль.

// 23.	Создать кнопку. При клике на нее создавать список элементов (например, список ul с несколькими пунктами li). При повторном клике на кнопку удалять весь список.

// 24.	Создать контейнер. При клике на него добавлять изображения с заданными URL в этот контейнер.

// 25.	Создать элемент (например, кнопку). При клике на нее увеличивать числовое значение внутри элемента, отображающее количество кликов.

// 26.	Создать форму с полями ввода. При отправке формы проверять введенные данные и отображать сообщения об ошибках рядом с соответствующими полями ввода