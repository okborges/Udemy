const h1 = document.querySelector('h1');
const data = new Date();

h1.innerHTML = data.toLocaleDateString('pt-br', { dateStyle: 'full', timeStyle: 'short' });
