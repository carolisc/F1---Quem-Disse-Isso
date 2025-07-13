const quotes = [
    {
      quote: '"No, Mikey! No! This is so not right!"',
      correct: 'Toto Wolff',
      options: ['Sebastian Vettel', 'Toto Wolff', 'Lewis Hamilton']
    },
    {
      quote: '"Honestly, what are we doing here?"',
      correct: 'Sebastian Vettel',
      options: ['Max Verstappen', 'Sebastian Vettel', 'Fernando Alonso']
    },
    {
      quote: '"I am stupid. I am stupid."',
      correct: 'Charles Leclerc',
      options: ['Carlos Sainz', 'Charles Leclerc', 'Daniel Ricciardo']
    }
  ];
  
  let current = 0;
  let score = 0;
  
  function loadNext() {
    if (current >= quotes.length) {
      document.getElementById('quote').innerText = "Fim do jogo!";
      document.querySelector('.options').innerHTML = "";
      document.getElementById('nextBtn').style.display = 'none';
      return;
    }
  
    const q = quotes[current];
    document.getElementById('quote').innerText = q.quote;
    const optionsDiv = document.querySelector('.options');
    optionsDiv.innerHTML = "";
  
    // Embaralhar as opções
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    shuffled.forEach(option => {
      const btn = document.createElement("button");
      btn.innerText = option;
      btn.onclick = () => checkAnswer(btn);
      optionsDiv.appendChild(btn);
    });
  
    document.getElementById('result').innerText = "";
  }
  
  function checkAnswer(button) {
    const chosen = button.innerText;
    const correct = quotes[current].correct;
  
    if (chosen === correct) {
      document.getElementById('result').innerText = "✅ Acertou!";
      score++;
      document.getElementById('score').innerText = score;
    } else {
      document.getElementById('result').innerText = `❌ Errou! Era: ${correct}`;
    }
  
    current++;
    setTimeout(loadNext, 1500);
  }
  
  window.onload = loadNext;
  