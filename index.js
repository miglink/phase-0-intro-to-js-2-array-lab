// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function appendCat(name){
    const cats = ["Milo", "Otis", "Garfield"];
    const newCats = [...cats,name]
    return newCats;
}
appendCat("Broom")

function prependCat(name){
    const cats = ["Milo", "Otis", "Garfield"];
    const newCats = [name,...cats]
    return newCats;
}
prependCat("Bob")

function removeLastCat() {
    return cats.slice(0, cats.length -1)
}

function removeFirstCat() {
    return cats.slice(1) 
}
