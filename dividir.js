function dividir (a, b){
    if(a === 0 || b === 0) {
       return "no se puede dividir por cero";
}

return a / b;
}

console.log (0/2)

module.exports = dividir;