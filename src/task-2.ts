// Задача 2. Інтерфейси (файл task-2.ts)

// У цьому фрагменті коду є об'єкт product, який описує товар.

// const product = {
//   id: 1,
//   title: "Tablet",
//   description: "Compact and fast",
// };

// console.log(`Product: ${JSON.stringify(product)}`);

// Завдання:
// Створи інтерфейс Product, який описує структуру цього об’єкта.
// Зроби поле id тільки для читання – воно не повинно змінюватись після створення об’єкта.
// Зроби поле description необов’язковим – не всі товари можуть його мати.
// Типізуй змінну product за допомогою створеного інтерфейсу.
// Залиш властивості обʼєкта product і їх значення без змін.


// Інтерфейс Product
interface Product {
    readonly id: number; // id - позначено як readonly, що робить його лише для читання
    title: string; // title - обов'язкова властивість типу string
    description?: string; // description - позначено як необов'язкова властивість за допомогою ?
}

  // Об'єкт product з типом Product
const product: Product = {
    id: 1,
    title: "Tablet",
    description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);