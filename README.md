# Desafio do curso FullCycle, no módulo de DevOps, trabalhando com Docker.

## Descrição do desafio
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. 

1. Quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. 
2. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
3. O retorno da aplicação node.js para o nginx deverá ser:

    ```html
    <h1>Full Cycle Rocks!</h1>

    - Lista de nomes cadastrada no banco de dados.
    ```

4. A linguagem de programação para este desafio é Node/JavaScript.
5. Toda a aplicação deve estar disponível na porta 8080.

  
## Para rodar
```sh
git clone https://github.com/uiratan/fullcycle-challanges-docker-nginx-node-mysql.git

cd fullcycle-challanges-docker-nginx-node-mysql

docker-compose up [-d]
```
