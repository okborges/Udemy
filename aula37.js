const nome = ['rafael', 'ana', 'gu'];
for (let valor of nome) {
  console.log(valor);
}

console.log('######');

nome.forEach((valor, i) => {
  console.log(valor, i);
});

console.log('######');

var text = 'uololooo';

[...text].forEach((caractere) => console.log(caractere));
