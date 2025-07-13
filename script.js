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
    },
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
      },
      {
        quote: '"Leave me alone, I know what I’m doing."',
        correct: 'Kimi Räikkönen',
        options: ['Kimi Räikkönen', 'Valtteri Bottas', 'Lewis Hamilton']
      },
      {
        quote: '"Fernando is faster than you."',
        correct: 'Rob Smedley',
        options: ['Rob Smedley', 'Felipe Massa', 'Fernando Alonso']
      },
      {
        quote: '"It’s called a motor race, Toto."',
        correct: 'Michael Masi',
        options: ['Christian Horner', 'Michael Masi', 'Toto Wolff']
      },
      {
        quote: '"I want to win, but not like this."',
        correct: 'Lewis Hamilton',
        options: ['Lewis Hamilton', 'Sebastian Vettel', 'George Russell']
      },
      {
        quote: '"I’m not here to finish second or third."',
        correct: 'Max Verstappen',
        options: ['Max Verstappen', 'Nico Rosberg', 'Lando Norris']
      },
      {
        quote: '"F***ing Fernando, this guy is a joke."',
        correct: 'Kevin Magnussen',
        options: ['Lewis Hamilton', 'Kevin Magnussen', 'Yuki Tsunoda']
      },
      {
        quote: '"They gave me black and orange again, what a joke."',
        correct: 'Haas Engineer (sobre Magnussen)',
        options: ['Magnussen', 'Haas Engineer', 'Guenther Steiner']
      },
      {
        quote: '"We were looking like clowns out there."',
        correct: 'Carlos Sainz',
        options: ['Carlos Sainz', 'Charles Leclerc', 'George Russell']
      },
      {
        quote: '"It’s not my job to decide the penalties."',
        correct: 'Sebastian Vettel',
        options: ['Max Verstappen', 'Sebastian Vettel', 'Lance Stroll']
      },
      {
        quote: '"Tell Esteban to defend like a lion!"',
        correct: 'Alonso',
        options: ['Gasly', 'Alonso', 'Otmar Szafnauer']
      },
      {
        quote: '"More power, baby!"',
        correct: 'Daniel Ricciardo',
        options: ['Carlos Sainz', 'Lando Norris', 'Daniel Ricciardo']
      },
      {
        quote: '"Box, box, box!"',
        correct: 'Engineer (genérico)',
        options: ['Engineer', 'Lewis Hamilton', 'Toto Wolff']
      },
      {
        quote: '"It’s lights out and away we go!"',
        correct: 'David Croft',
        options: ['David Croft', 'Martin Brundle', 'James Hunt']
      },
      {
        quote: '"For what?! He turned into me!"',
        correct: 'Sebastian Vettel',
        options: ['Lewis Hamilton', 'Sebastian Vettel', 'Valtteri Bottas']
      },
      {
        quote: '"OK, I need more silence on the radio."',
        correct: 'Max Verstappen',
        options: ['Sergio Pérez', 'Max Verstappen', 'Kimi Räikkönen']
      },
      {
        quote: '"Guenther, this car is a f***ing joke!"',
        correct: 'Romain Grosjean',
        options: ['Mick Schumacher', 'Romain Grosjean', 'Kevin Magnussen']
      },
      {
        quote: '"We look like amateurs."',
        correct: 'George Russell',
        options: ['George Russell', 'Esteban Ocon', 'Lance Stroll']
      },
      {
        quote: '"If he doesn’t move, I will crash into him!"',
        correct: 'Yuki Tsunoda',
        options: ['Yuki Tsunoda', 'Fernando Alonso', 'Charles Leclerc']
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
  