/* 
Aceitar tudo ao criar um projeto Node.js - npm init -y

Sintaxe antiga - CommonJS
    modules.exports

Sintaxe nova - ES Modules
    Acrecentar código em package.json
        "type": "module",
    Ou caso não usar "type": "module"
        pode colocar os arquivos na extensão .mjs

    Retirar modules.exports e acrescentar "export" na função ou classes que queira exportar
    Importar funções e classes
        de:
            const {createPersona, Persona} = require('./product')

        para: 
            import {createPersona, Persona} from "./product.js"
        
        Ou para export default:
            import nomeDefault from "./product.js"

*/

// Módulo incompatível com ES Modules
import lodash from "lodash"
const { filter } = lodash

// Módulo nativo do Node.js
import path from "path"

// Importando './product.js'
import { createPersona, Persona } from './product.js'

// Importando todos os "exports" de './product.js' e colocando dentro da variável "productModule"
/* import * as productModule from './product.js' */
//productModule.Persona
//productModule.createPersona



// Usando a "função" dentro do módulo
const persona = createPersona(87, "Nilson", 32, "Developer")

// Usando a "classe" dentro do modulo
const persona2 = new Persona(88, "Maria", 22, "Design")

// Exibindo resultado da "função"
console.log(persona.getInfo())

// Exibindo resultado da "classe"
console.log(persona2.getInfo())