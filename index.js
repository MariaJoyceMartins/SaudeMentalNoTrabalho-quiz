   //Dados das perguntas
   const perguntas = [
    {
      pergunta: 'Em um ambiente de trabalho ideal para promover a saúde mental, qual desses elementos seria menos relevante?',
      respostas: [
        'Oferecer espaço para descanso e relaxamento',
        'Promover uma cultura de competição extrema',
        'Fornecer treinamento em habilidades de enfrentamento do estresse',
      ],
      correta: 1
    },
    {
        pergunta: 'Qual é o papel da liderança na promoção da saúde mental no local de trabalho?',
      respostas: [
        'Promover uma cultura de apoio e respeito',
        'Ignorar os sinais de estresse dos funcionários',
        'Aumentar a pressão e a competitividade',
      ],
      correta: 0
    },
    {
      pergunta: 'Como a integração de atividades sociais no local de trabalho pode beneficiar a saúde mental dos colaboradores?',
      respostas: [
        'Isolando os funcionários para que foquem apenas no trabalho',
        'Criando um ambiente de apoio',
        'Aumentando a competição entre colegas',
      ],
      correta: 1
    },
    {
      pergunta: 'Quais são os possíveis efeitos de uma comunicação aberta e transparente no ambiente de trabalho?',
      respostas: [
        'Aumento da confiança e conflitos',
        'Aumento da competição e individualismo',
        'Fomento da colaboração e resolução de problemas',
      ],
      correta: 2
    },
    {
      pergunta: 'Qual desses fatores pode contribuir para um ambiente de trabalho mais inclusivo e saudável?',
      respostas: [
        'Promover apenas uma perspectiva única e dominante',
        'Valorizar a diversidade de pensamento e experiência',
        'Excluir qualquer voz discordante',
      ],
      correta: 1
    },
    {
      pergunta: 'Como a implementação de programas de mindfulness pode impactar a saúde mental no trabalho?',
      respostas: [
        'Aumentando o estresse e ansiedade dos funcionários',
        'Desestimulando a autoconsciência e o autocuidado',
        'Fornecendo ferramentas para lidar com desafios e pressões',
      ],
      correta: 2
    },
    {
      pergunta: 'Qual é uma forma eficaz de lidar com o conflito no local de trabalho para promover a saúde mental?',
      respostas: [
        'Ignorar o conflito e esperar que ele se resolva',
        'Encorajar a comunicação aberta e a resolução colaborativa',
        'Promover a competição entre os colegas',
      ],
      correta: 1
    },
  ];

// Coloca 1 perguntas na tela
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const quizItem = template.content.cloneNode(true)
quiz.appendChild(quizItem)

//Calcula o valor de respostas certas
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop das perguntas
for(const item of perguntas) {
const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.pergunta

// Opções de resposta
for(let resposta of item.respostas ) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
dt.querySelector('span').textContent = resposta

//Código para botão de opções de resposta
dt.querySelector('input').setAttribute('name', 'pergunta-' + 
perguntas.indexOf(item))

//Atribuir valor a respostas
dt.querySelector('input').value = item.respostas.indexOf(resposta)

//Código para atribuir 'certo' ou 'errado' a uma resposta
dt.querySelector('input').onchange = (event) => {
 const estaCorreta = event.target.value == item.correta

 corretas.delete(item)
 if(estaCorreta){
  corretas.add(item) 
 }

mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
}

quizItem.querySelector('dl').appendChild(dt)
}

//Remoção do ''A'' como opção
quizItem.querySelector('dl dt').remove()

//Coloca a pergunta na tela
quiz.appendChild(quizItem)

}