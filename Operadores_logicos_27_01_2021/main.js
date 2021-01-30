//operacion AND **$$**

let afirmacion = true;
let negacion = false;

console.log(`%cOperador AND '||'`, "color:blue;");
console.log(`${negacion} && ${negacion} = ${negacion&&negacion}`);
console.log(`${negacion} && ${afirmacion} = ${negacion&&afirmacion}`);
console.log(`${afirmacion} && ${afirmacion} = ${afirmacion&&afirmacion}`);
console.log(`${afirmacion} && ${negacion} = ${afirmacion&&negacion}`);

console.log(`%cOperador OR '||'`, "color:blue;");
console.log(`${negacion} || ${negacion} = ${negacion||negacion}`);
console.log(`${negacion} || ${afirmacion} = ${negacion||afirmacion}`);
console.log(`${afirmacion} || ${afirmacion} = ${afirmacion||afirmacion}`);
console.log(`${afirmacion} || ${negacion} = ${afirmacion||negacion}`);

console.log(`%cOperador NOT '!'`, "color:orange;");
console.log(`${negacion} ! = ${negacion}`);
console.log(`${afirmacion} ! = ${afirmacion}`);