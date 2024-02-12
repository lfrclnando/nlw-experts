const perguntas = [
  {
    pergunta: "Qual música dos Beatles ficou mais tempo no topo das paradas de sucesso nos anos 60?",
    respostas: [
      "Hey Jude",
      "Let It Be",
      "I Want to Hold Your Hand",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o cantor responsável pela icônica música 'Thriller' lançada nos anos 80?",
    respostas: [
      "Prince",
      "Michael Jackson",
      "Madonna",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a música mais conhecida de Elvis Presley?",
    respostas: [
      "Love Me Tender",
      "Jailhouse Rock",
      "Can't Help Falling in Love",
    ],
    correta: 2
  },
  {
    pergunta: "Quem cantou a famosa música 'Like a Rolling Stone' nos anos 60?",
    respostas: [
      "The Rolling Stones",
      "Bob Dylan",
      "The Beatles",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a música icônica de Queen lançada nos anos 70?",
    respostas: [
      "Bohemian Rhapsody",
      "We Will Rock You",
      "Somebody to Love",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é conhecido como o 'Rei do Pop' e lançou 'Billie Jean' nos anos 80?",
    respostas: [
      "Prince",
      "Michael Jackson",
      "Madonna",
    ],
    correta: 1
  },
  {
    pergunta: "Qual música dos Rolling Stones foi lançada nos anos 60 e se tornou um hino rock?",
    respostas: [
      "Paint It, Black",
      "Angie",
      "Sympathy for the Devil",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é a voz por trás da música 'What's Going On' lançada nos anos 70?",
    respostas: [
      "Marvin Gaye",
      "Stevie Wonder",
      "James Brown",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a música mais famosa dos Beach Boys lançada nos anos 60?",
    respostas: [
      "Good Vibrations",
      "California Girls",
      "Surfin' U.S.A.",
    ],
    correta: 0
  },
  {
    pergunta: "Quem cantou 'Imagine', uma das músicas mais icônicas dos anos 70?",
    respostas: [
      "John Lennon",
      "Paul McCartney",
      "George Harrison",
    ],
    correta: 0
  },
];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de respetição
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + 
        perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value ==  item.correta // true
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }  