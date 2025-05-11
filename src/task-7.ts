// Задача 7. Типізація Promise (файл task-7.ts)

// Функція getMessage повертає проміс, який через затримку повертає рядок.

// function getMessage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello from TS");
//     }, 1000);
//   });
// }

// getMessage().then(result => console.log(result));

// Завдання:

// Додай до функції явну типізацію, яка вказує, що вона повертає проміс.
// Переконайся, що значення, з яким виконається проміс, - це рядок (string).

function getMessage(): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Hello from TS");
        }, 1000);
    });
}

// функція повертає Promise<string>, що означає проміс, який виконується з рядковим значенням.
// У конструкторі Promise також додано тип-параметр <string>, щоб вказати, що resolve приймає рядок

getMessage().then(result => console.log(result));