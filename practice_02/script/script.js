// // // 13.	Написать программу, которая находит параграфы и заменяет в каждом из них текст на “привет”.

// const paragraphs = document.querySelectorAll('p')
// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].innerText = 'Привет';
// }

// // 14.	Написать скрипт, который находит параграфы и четным параграфам меняет текст на 'Я четный', a нечетным на 'Я нечетный'.
// // Получаем все элементы <p> на странице

// const paragraphs = document.querySelectorAll('p')
// for (let i = 0; i < paragraphs.length; i++) {
//     if (i% 2 === 0) {
//         paragraphs[i].innerText = 'Я четный';
//     } else {
//         paragraphs[i].innerText = 'Я нечетный';
//     }}


// // 15.	Написать скрипт, который находит параграфы и первым 3 параграфам меняет текст на указанные пользователем значения.

// const pElem = document.querySelectorAll('p');

// for (let i = 0; i < 3; i++) {
//   pElem[i].innerText = prompt()
// }

// // 16.	Написать скрипт, который находит параграфы, которые находятся внутри div-ов и первым 2 параграфам текст меняет на указанные пользователем значения.

// const divElements = document.querySelectorAll('div');
// for (let i = 0; i < divElements.length; i++) {
//     let paragraphs = divElements[i].querySelectorAll('p');
//           for (let j = 0; j < 2; j++) {
//         paragraphs [j].innerText= prompt();
       
//     }
// }

// // 17.	Написать скрипт, который находит параграфы с классом 'p1' и выводит общее содержимое параграфов (вкл. теги, атрибуты, тексты).

// const paragraphs = document.querySelectorAll('p1');

// paragraphs.forEach(paragraph => {
//     console.log(paragraph.innerHTML);
// });

 

// // 18.	Написать скрипт, который находит параграфы и последним 2 четным параграфам меняет текст на указанные пользователем значения.

// const paragraphs = document.querySelectorAll('p');
// const evenParagraphs = [];

// for (let i = 0; i < paragraphs.length; i++) {
//     if (i % 2 === 0) {
//         evenParagraphs.push(paragraphs[i]);
//     }
// }

// const lastTwoEvenParagraphs = evenParagraphs.slice(-2);

// lastTwoEvenParagraphs.forEach(function(paragraph) {
//     paragraph.innerText = prompt();
// });


// // // 19.	Написать скрипт, который находит параграфы и выводит текстовое содержимое начиная с 3 параграфа до 6(вкл.).

//        const paragraphs = document.querySelectorAll('p');
//              for (let i = 2; i <= 5; i++) {

//             paragraphs[i].innerText;
//         }
        


// // 20.	Написать цикл, который создает множество div-ов c цветами от rgb(255, 0, 255) до rgb(255, 255, 255). У дивов цвет должен меняться с шагом 5.



        //   for (let i = 0; i < 255; i += 5) {

        //     const divElem = document.createElement("div");
        //     divElem.style.width = "100px";
        //     divElem.style.height = "10px";
        //     divElem.style.backgroundColor = `rgb(255, ${i}, 255)`;
        //     document.body.append(divElem); }


// // 21.	Создайте новый элемент <p>, добавьте ему текст и добавьте его после элемента с id "existingElement".


// const existingElementDiv = document.querySelector('#existingElement')
//   const newPElem = document.createElement("p") 
//      newPElem.innerText = "Привет"
//   existingElementDiv.after(newPElem)



// // 22.	Создайте новый элемент <div>, добавьте ему класс "box" и добавьте его перед элементом с классом "box-container".

// const Divelem= document.createElement("div")
// Divelem.classList.add("box")   
// const boxContainer = document.querySelector(".box-container");
// boxContainer.before(Divelem);



// // 23.	Создайте новый элемент <span>, добавьте ему текст и вставьте его внутрь элемента с id "parentElement".

// const newSpanElement = document.createElement('span');
// newSpanElement.innerText = 'Текст для span';
// const parentElement = document.querySelector('#parentElement');
// parentElement.appendChild(newSpanElement);



// // 24.	Удалите элемент с классом "removeMe".


// const removeElem = document.querySelector('.removeMe');
// removeElem.remove();



// // 25.	Создайте новый элемент <li>, добавьте ему текст и вставьте его в начало списка с id "myList".

// const newLiElement = document.createElement('li');
// newLiElement.innerText = 'Роман'
// const myList = document.querySelector('#myList');
// myList.prepend(newLiElement); 



// // 26.	Удалите все дочерние элементы из элемента с id "clearMe".


const idclearMe = document.querySelector('#clearMe');
idclearMe.innerHTML = '';






