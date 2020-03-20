1- Ao subir arquivos de produção para o sentry, é necessário observar primeiramente a organização, depois o nome do projeto e a release.

2- A release é basicamente o NomeDoProjeto@NomeDaVersao, pois ao clicar na release dentro do sentry, vai observar a versão que aquela release foi estipulada.

3- Ao tentar subir uma build sem trocar a versão, isso gera inconsistencia, pois entra em conflito com a release antiga que por sua vez está na mesma versão, logo, é necessário deletar a release antiga, e realizar novamente o processo de Upload do Sourcemaps.

4- Foi necessário 2 Pacotes obrigatorios e 1 opcional, 
  - Sentry/browser para identificar os erros, inserir a dsn e o nome do release.
  - Sentry/cli para utilizar a linha de comando e inserir informacoes para o sourcemaps
  - Sentry/files, que é um pacote opcional, serve para automatizar o upload do sourcemaps.

5- Se for o caso de não utilizar o pacote opcional, é possivel utiizar o sourcemaps manual, onde coloquei o comando no package.json. É necessario inserir as informacoes de autenticacao pelo comando 'sentry-cli login' e inserir o Token de acesso, também é necessário ter o '.sentryclirc' e as variaveis de ambiente '.env' atualizados com as informacoes do projeto, pois as configuracoes do sentry.init estão localizadas em .src/config/sentryConfig.js e são injetadas diretamente no .src/index.js