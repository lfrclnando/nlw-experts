const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "toFixed()",
        "parseFloat()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara valores e tipos de dados",
        "Compara apenas valores",
        "Atribuição de valores",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "print()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'map()' faz em um array em JavaScript?",
      respostas: [
        "Remove elementos do array",
        "Transforma cada elemento do array",
        "Adiciona elementos ao array",
      ],
      correta: 1
    },
    {
      pergunta: "Como se chama a prática de combinar duas strings em JavaScript?",
      respostas: [
        "Concatenação",
        "Interpolação",
        "Merge",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de declarar uma função em JavaScript?",
      respostas: [
        "function: minhaFuncao() {}",
        "let minhaFuncao = function() {}",
        "function minhaFuncao() {}",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Diretório de Operações Múltiplas",
        "Document Object Model",
        "Dynamic Operation Module",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
      respostas: [
        "for (i <= 5; i++) {}",
        "for (let i = 0; i < 5; i++) {}",
        "loop.for (i = 0; i < 5; i++) {}",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'filter()' faz em um array em JavaScript?",
      respostas: [
        "Remove elementos do array",
        "Cria um novo array com elementos filtrados",
        "Inverte a ordem dos elementos no array",
      ],
      correta: 1
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