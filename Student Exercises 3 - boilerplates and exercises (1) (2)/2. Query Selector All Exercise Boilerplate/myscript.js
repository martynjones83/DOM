////////////////  Query Selector All ////////////////////

/* 
1. Given the boiler plate use query selector console log the following items on the page:​

    - The second p tag​
    - All of the list items​ with the class list
    - The text content of the third instance of the class “list”​
    - The length of the list.

*/

// Write your JavaScript below

let div = document.querySelector("p").textContent;
console.log(div)

let list = document.querySelectorAll(".list");
document.getElementsByClassName("list");
console.log(list)

let length = document.querySelectorAll('list');
    let tabLength = list.length;
    console.log(tabLength);