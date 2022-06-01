//async and await
//fetch

const square = async function(n) {
    return n * n;
}

square(2);  //this will return a promise

//to access data from promise we use await.

const value = await square(2);  //it returns value 4
console.log(value);

//fetch is used to fetch an url.

//using fetch alongwith promise method.

const url = 'https://restcountries.com/v2/all'
fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error))


//using with async and await

const fetchData = async () => {
    try {
        const response1 = await fetch(url);
        const data1 = await response1.json();
        console.log(data1);
    } catch (error) {
        console.error(error);
    }
}

fetchData();

