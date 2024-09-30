// Мінімум

// Напиши всі можливі варіанти створення функцій.

// Створення функції:
//  - декларація;
//  - запис у змінну;
//  - стрілочна;
//  - метод як спеціальний випадок? функцій


// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function countArgs(...theArgs) {
  let total = 0;
  for (let i = 0; i < theArgs.length; i++) {
    total += 1;
  }
  alert(total)
}

// countArgs(1, 2, 3, 4, 5, 56, 6767, 66690)


// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

// let initialData = prompt('Enter two numbers: /n(like 4 -6)')
// let separated = initialData.split(' ')

// let a = Number(separated[0])
// let b = Number(separated[1])

// function judge(a, b) {


//   if ((a - b) > 0) {
//     alert(1)
//   } else if ((a - b) < 0) {
//     alert(-1)
//   } else alert(0)
// }

// judge(a, b)

// Напиши функцію, яка обчислює факторіал переданого їй числа.

// let givenNumber = prompt('Enter a positive integer (in order to get it`s factorial): ')
// let counter = 1

// function factorial() {
//   for (let i = givenNumber; i > 0; i--) {
//     counter *= i
//   }
//   alert(counter)
// }

// factorial()

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function merger(hundreds, tens, ones) {
  hundreds = hundreds * 100
  tens = tens * 10
  ones = ones * 1
  let output = hundreds + tens + ones
  alert(output)
}

// merger(3, 5, 6)

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function areaCalculator(a, b) {
  if (Boolean(a) === true && Boolean(b) === true) {
    let area = a * b
    alert(area)
  } else if (Boolean(a) === true && Boolean(b) !== true) {
    area = a * a
    alert(area)
  } else { alert('invalid data') }
}

areaCalculator (60)

// Норма

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.










// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.