// Завдання 8. HTTP-запити (файл task-8.ts)

// Функція fetchPosts робить GET-запит до API та повертає список постів.

// import axios from "axios";

// async function fetchPosts() {
//   const response = await axios.get(
//     '<https://jsonplaceholder.typicode.com/posts>'
//   );
//   return response.data;
// }

// fetchPosts().then((posts) => {
//   console.log(posts[0].title);
// });

// Завдання:

// Інсталюй бібліотеку axios командою npm i axios
// Створи інтерфейс Post, який описує об'єкт поста з такими полями:
// id: число
// title: рядок
// body: рядок
// 3. Типізуй axios.get, щоб вказати, що API повертає масив постів.


import axios from "axios";

// Інтерфейс для опису структури Post
interface Post {
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(): Promise<Post[]> {  // Типізованр відповідь axios, вказавши, що data буде масивом Post, типізовано значення функції, яке повертаємо - "fetchPosts (Promise<Post[]>)"
    const response = await axios.get<Post[]>(   // Типізовано виклик axios.get, вказавши, що він повертає масив постів "(axios.get<Post[]>)"
    'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
}

fetchPosts().then((posts) => {
    console.log(posts[0].title);
});