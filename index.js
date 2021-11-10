// Your code goes here
document.addEventListener("DOMContentLoaded",function() {
let p = document.getElementById("text");
p.textContent ="This is really cool!";
console.log(p.textContent);
console.log ("The DOM has loaded");
});

console.log ("This fires when indexedDB.js loads -before DOMContentLoaded is triggered");