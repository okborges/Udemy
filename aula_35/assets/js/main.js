const elementos = [
  { tag: 'p', texto: 'Frase 1' },
  { tag: 'div', texto: 'Frase 2' },
  { tag: 'footer', texto: 'Frase 3' },
  { tag: 'section', texto: 'Frase 4' },
];

const container = document.querySelector('.container');
const fragment = document.createDocumentFragment();

elementos.forEach(({ tag, texto }) => {
  const criarTag = document.createElement(tag);
  criarTag.textContent = texto;
  fragment.appendChild(criarTag);
});

container.appendChild(fragment);
