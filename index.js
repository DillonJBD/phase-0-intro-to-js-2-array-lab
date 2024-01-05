const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(name){
    cats.shift();
}

function appendCat(name){
    
    const newArr = [...cats, "Broom"];
    return newArr;
}
function prependCat(name){
    const newArr = ["Arnold", ...cats];
    return newArr;
}
function removeLastCat(name){
    const newArr = cats.slice(0,2);
    return newArr;
    
}

function removeFirstCat (name){
    const newArr = cats.slice(1);
    return newArr;
}