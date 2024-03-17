/* 
Documentação Node.js Path
    https://nodejs.org/api/path.html
*/
// importando a lib "path" - Nativa do Node.js
const path = require("path")

// Módulo para criar, editar, deletar arquivos
const fs = require("fs")

// __filename - Nome do arquivo contendo todo o seu diretório
// caminho completo + nome do arquivo
console.log("Caminho + nome do arquivo:\n", __filename, "\n")

// Somente o caminho completo do arquivo
console.log("Somente o caminho:\n", __dirname, "\n")

// Pegar nome de um arquivo
console.log("Nome do arquivo:\n", path.basename(__filename), "\n")

// Pegar extensão de um arquivo
console.log("Extensão do arquivo:\n", path.extname(__filename), "\n")

// Criar um arquivo no diretório do arquivo atual ou pasta desejada
console.log("Criar arquivo:\n", path.join(__dirname, "folder", "message.txt"), "\n")

// Criar um arquivo .txt dentro da pasta "folder" que está no diretorio atual (é necessário que a pasta exista)
fs.writeFile(
    path.join(
        __dirname,
        "folder",
        "message.txt"
        ), "Arquivo criado dentro da pasta folder", () => {})


// Criar um arquivo .txt no diretorio atual
fs.writeFile(
    path.join(
        __dirname,
        "message.txt"
        ), "Arquivo criado no diretorio atual", () => {})
