const perguntas = [
  {
    pergunta: 'Em um ambiente de trabalho ideal para promover a saúde mental, qual desses elementos seria menos relevante?',
    respostas: [
      'Oferecer espaço para descanso e relaxamento',
      'Promover uma cultura de competição extrema',
      'Fornecer treinamento em habilidades de enfrentamento do estresse',
    ],
    correta: 1,
  },
  // ... outras perguntas
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

// Controle das respostas
let corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

// Loop para exibir as perguntas
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector('h3').textContent = item.pergunta;

  // Loop para exibir as opções de resposta
  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('span').textContent = resposta;

    // Atributos do input
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
    dt.querySelector('input').value = item.respostas.indexOf(resposta);

    // Atualização das respostas
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;

      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
    };

    quizItem.querySelector('dl').appendChild(dt);
  }

  // Remoção da primeira opção (apenas para corrigir a ordem)
  quizItem.querySelector('dl dt:first-child').remove();

  // Exibição da pergunta
  quiz.appendChild(quizItem);
}
