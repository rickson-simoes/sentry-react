1- Ao subir arquivos de produção para o sentry, é necessário observar primeiramente a organização, depois o nome do projeto e a release.

2- A release é basicamente o NomeDoProjeto@NomeDaVersao, pois ao clicar na release dentro do sentry, vai observar a versão que aquela release foi estipulada.

3- Por esquecimento, pode acontecer de tentar subir uma build sem trocar a versão, isso gera inconsistencia, pois entra em conflito com a release antiga que por sua vez está na mesma versão, logo, é necessário deletar a release antiga, e realizar novamente o processo de Upload do Sourcemaps.