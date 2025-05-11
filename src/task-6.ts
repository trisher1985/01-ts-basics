// Задача 6. Узагальнені типи (файл task-6.ts)

// Функція getFirstElement приймає масив і повертає його перший елемент.

// function getFirstElement(arr) {
//   return arr[0];
// }

// getFirstElement([1, 2, 3]);           // 1
// getFirstElement(["a", "b", "c"]);     // "a"
// getFirstElement([true, false, true]); // true

// Завдання:

// Зроби функцію узагальненою, використовуючи тип T, щоб вона працювала з масивами будь-якого типу.
// Додай явну типізацію дженериків у виклики функцій.
// Переконайся, що тип елемента, який повертається, точно відповідає типу елементів у масиві.
// Перевір, що TypeScript не дозволяє передати масив змішаних типів без відповідного типу.


function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}
// Функція узагальнена за допомогою <T> параметр типу (дженерик), який дозволяє функції працювати з будь-яким типом
// Параметр arr має тип T[] - масив елементів типу T.
// Функція повертає значення типу T, що гарантує відповідність типу першого елемента типу елементів масиву.

// Виклики функції з явною типізацією
getFirstElement<number>([1, 2, 3]);           // 1
getFirstElement<string>(["a", "b", "c"]);     // "a"
getFirstElement<boolean>([true, false, true]); // true

console.log(getFirstElement<number>([1, 2, 3])); // OK, тип `number`
console.log(getFirstElement<string>(["a", "b", "c"])); // OK, тип `string`
console.log(getFirstElement<boolean>([true, false, true])); // OK, тип `boolean`


// getFirstElement<number>(["a", "b"]);  // Помилка: string не можна призначити number
// console.log(getFirstElement<number>(["a", "b"])); //але console.log відпрацює, бо TS працює тільки на етапі розробки

