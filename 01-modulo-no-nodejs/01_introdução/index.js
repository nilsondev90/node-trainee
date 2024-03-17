// Módulo para criar, editar, deletar arquivos
const fs = require("fs")

/* 
Criar um arquivo com a extenção ".txt" com o
conteúdo de "Bem vindo a este arquivo"
com a função vazia
*/
fs.writeFile("myFile.txt", "Bem vindo a este arquivo", () => {})