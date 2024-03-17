// Importando os "módulos" dentro de product
const {createPersona, Persona} = require('./product')

// Importando código para ser executado diretamente
require('./hello')

// Usando a "função" dentro do módulo
const persona = createPersona(87, "Nilson", 32, "Developer")

// Usando a "classe" dentro do modulo
const persona2 = new Persona(88, "Maria", 22, "Design")

// Exibindo resultado da "função"
console.log(persona.getInfo())

// Exibindo resultado da "classe"
console.log(persona2.getInfo())