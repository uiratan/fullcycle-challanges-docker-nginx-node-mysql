FROM node:18

# instalações na imagem que será refletida no container
# RUN apt-get update && apt-get install python3 -y

# caso precise alterar o id do usuario
# RUN usermod -u 501 node

# para igualar às permissões do usuário no container com o host
USER node

WORKDIR /usr/src/app

# COPY ./package*.json /usr/src/app/

# RUN npm install

# não é obrigatório, apenas informativo, mas é boa pratica
EXPOSE 3000

# CMD [ "node", "index.js" ]