const requestUrl = `https://jsonplaceholder.typicode.com/users`;
const request = new XMLHttpRequest;

const getSomething = (requestPath) => {
    return new Promise((resolve, reject) => {
        request.addEventListener('readystatechange', (e) => {
            if (request.readyState === 4 && request.status === 200) {
                resolve(request.response);
            } else if(request.readyState === 4) {
                reject("Something went wrong");
            }
        });
        request.open('GET', requestPath);
        request.send();
    });
}

getSomething(requestUrl).then((data) => {
    console.log('Promise 1 resolved');
    // console.log(data);
    return getSomething(`https://jsonplaceholder.typicode.com/todos`);
}).then((data) => {
    console.log('Promise 2 resolved');
    return getSomething(`https://jsonplaceholder.typicode.com/posts`);
}).then((data) => {
    console.log('Promise 3 resolved');
}).catch(err => {
    console.log(err);
});

// fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
//     if (!response.ok) {
//         throw new Error ("HTTP Error: "+ response.status);
//     }
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => console.log(err));


const getDataWithAsync = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (response.status !== 200) {
        throw new Error('Cannot fetch data');
    }
    const data = await response.json();

    return data;
}

getDataWithAsync().then(data => {
    console.log(data);
}).catch(err => console.log(err.message));