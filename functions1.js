function printName() {
    console.log (`Bashayer`)
} 
//printName()

function printAge(birthYear){
    console.log(`you are ${2024-birthYear}`);
}
// printAge(1983);
function printAgeAndName(birthYear,name){
    console.log(`Hello ${name} you are ${2024-birthYear}years old`);
}
//printAgeAndName(1983,"Bashayer"); 

function printHello(name,language){
    if (language==="en") {
        console.log(`Hello ${name}`);
    } else if (language=="es"){
        console.log(`Hola ${name}`);
    } else if (language==="fr"){
        console.log(`Bonjour ${name}`);
    } else if (language==="tr"){
        console.log(`Merhaba ${name}`);
    }
}
// printHello("Basahyer","en");
// printHello("Basahyer","es");
// printHello("Basahyer","fr");
// printHello("Basahyer","tr");

function printMax(firstNumber,secondNumber){
    if(firstNumber > secondNumber) {
        console.log(firstNumber);
    } else {
        console.log(secondNumber);
    }
}
printMax(14,18);
 