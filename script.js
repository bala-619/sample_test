const fruits = ["apple", "organe", "banana"];

const modified = fruits.map((fruit) => fruit.toUpperCase());

console.log(modified);


// Filter

const fruits1 = ["apple", "banana", "grapes", "mango", "orange"];

function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits1, "ap"));

const userName= ["bala", "Rohit","karthi","saravanan"]

function filterName(arr, query){
    return arr.filter((el)=> el.toLowerCase().includes(query.toLowerCase()))
}
console.log(filterName(userName,"r"),"answer");

