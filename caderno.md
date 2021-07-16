> 💡 Pergunta: Por definição, o que é o TypeScript? Quais os benefícios em utilizá-lo no projeto?

Responda aqui:<br/>
Typescript é um conjunto de tipagens feita para o Javascript pela Microsoft e mantido em opensource.<br/>

Alguns do benefício de se utilizar:<br/>

- Produtuvidade maior
- Maior legibilidade no código
- Consigo unir o melhor dos dois mundo Tipagem + vantagens do JS
- Consigo misturar TS com JS


> 💡 Pergunta: Ao executar o arquivo `server.ts` diretamente com o `node`, é disparado um erro, por qual motivo isso acontece? Como podemos resolver?

Responda aqui<br/>

O Node não entende nativamente o Typescript. Ele entende apenas Javascript, ou seja, para funcionar precisamos converte Typescript para Javascript, um processo chamado "Transpilar". Para isso rodo o comando abaixo, com o executável tsc instalado (global ou local):

```bash
yarn tsc
```