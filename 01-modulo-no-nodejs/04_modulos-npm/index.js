/* 
Comando para excluir pasta
    rm -rf node_modules
-----------------------------
npm instal - instala todas as dependências com atualizações. Exemplo: "^3" não passando da versão 3
npm ci - instala todas as dependências com a versão exatamente do "package-lock.json"
-----------------------------
Usando Script - npm run start:dev ("start": "nodemon index.js")
    npm - pacotes do node
    rum - executar um script
    start:dev - nome do script
-----------------------------
Sem usar Script - npx nodemon index.js
    npx - Buscar biblioteca
    nodemon - nome da biblioteca
    index.js - nome do arquivo
-----------------------------
Instalar dependências em modo
de desenvolvimento - npm install --save-dev | npm install -D nodemon
-----------------------------
Instalar apenas dependências de produção - npm install --production
-----------------------------
Remover dependências - npm remove [nome]
-----------------------------
Instalar dependências Globais - npm install -g nodemon  
    Não aparece no package.json
    Recomendado somente para ferramentas que usam para criar projetos
*/

const uuid = require("uuid")

console.log(`ID gereado: ${uuid.v4()}`)