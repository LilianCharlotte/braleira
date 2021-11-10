
let object = {
    name: "Lilian Charlotte",
    nachname: "Krieg Carreño"
}

function langerName(nachname){
    if (nachname== "Krieg Carreño"){
        return true;
    } else {
        return false;
    }
}

console.log("Name: "+object.name+" "+object.nachname);
console.log(langerName(object.nachname));