const fs = require("fs")
const path = require("path")

// Criar uma pasta no diretório que está executando o arquivo
// Se a pasta for existente, não criará outra da mesma
/* fs.mkdir("./new-folder", () => {}) */

// Criar uma pasta no diretório que está o código (RECOMENDADO)
// Se a pasta for existente, não criará outra da mesma
fs.mkdir(path.join(__dirname, "new-folder"), (error) => {
    console.log(error)
})

// Criar o arquivo "new-file.txt" com o conteúdo de "Arquivo Criado", dentro da nasta "new-folder"
fs.writeFile( // writeFile - Criar arquivo
    path.join( // Modulo para diretorio
    __dirname, // Pasta "03_modulos-nativos"
    "new-folder", // Nome da pasta
    "new-file.txt"), // Nome do arquivo
    "Conteudo Criado", // Conteúdo do arquivo
    (error) => { // Callback
        console.log(error)}) // Exibir mensagem do Callback
    

// Adicionar contedúdo dentro do arquivo "new-file.txt" da pasta "new-folder"
fs.appendFile( // appendFile - Adicionar Conteúdo
    path.join( // Modulo para diretorio
        __dirname, // Pasta "03_modulos-nativos"
        "new-folder", // Nome da pasta
        "new-file.txt"), // Nome do arquivo
        "\nConteudo Adicionado", // Conteúdo do arquivo adicionado
        (error) => {// Callback
            console.log(error)}) // Exibir mensagem do Callback

// Variável para guardar o resultado do conteúdo do arquivo
let fileContent = ""
// Ler o conteúdo de um arquivo
fs.readFile( // readFile - Ler arquivo
    path.join( // Modulo para diretorio
        __dirname, // Pasta "03_modulos-nativos"
        "new-folder", // Nome da pasta
        "new-file.txt"), // Nome do arquivo
        "utf-8", // Encoding - Para ler acentos/caracteres
        (error, data) => { // error(callback) | data(conteúdo do arquivo)
            fileContent = data // Conteúdo setado para a variável
            console.log("Conteúdo do arquivo:\n", fileContent)
        })
