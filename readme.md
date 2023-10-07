# Projeto cypress

## Casos de testes para alguns sites de lojas conhecidos.

---

### Instalação:

- Para verificar os testes é necessário instalar o cypress com o comando `yarn add cypress` estou utilizando a versão 13.3.
- Você pode rodar os testes com o comando `yarn test` e caso queira desabilitar a visualização do teste deve navegar na pasta do root procurando o arquivo package.json e remover a tag `--headed` no script do teste.

### Rodando Script:

- Com o comando `yarn test-run` o cypress vai rodar os testes automáticamente headless e mostrar os resultados no terminal.&nbsp;
- Com o comando `yarn test-open` irá habilitar o modo desenvolvedor do cypress onde é possível capturar os elementos e ver passo a passo dos testes.&nbsp;

Caso queira alterar os scripts do testes deve ir no arquivo `package.json` e alterar a parte onde estão os scripts.
