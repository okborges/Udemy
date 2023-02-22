const pessoa = {
  nome: 'mario',
  sobrenome: 'silva',
  idade: 30,
  endereco: {
    rua: 'nove',
    numero: '123',
  },
};

//atribuição vai desconstrução
const { nome, idade, ...resto } = pessoa;
console.log(nome, idade, resto);
