const userNumb = Number(prompt ("inserisci un numero da 1 a 5"))
const cpuNubmb = Math.trunc(Math.random()*5)+1
console.log(cpuNubmb)

function sum(userNumb,cpuNubmb){
    const totalNumber= userNumb + cpuNubmb;
    return totalNumber
}
const total = sum (userNumb,cpuNubmb);
console.log(total);

function isEven(total){
    if(total % 2 === 0){
        return true;
    
    }
    return false;
}  

const evenOrNot= isEven(total)

if(evenOrNot){
    alert ("il numero è pari")
} else{
    alert("il nuemro è dispari")
}