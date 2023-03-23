
let table = document.createElement('table');

for (let i = 0; i < 3; i++) {
  let row = document.createElement('tr')
    for (let j = 0; j < 3; j++) {
      let cell = document.createElement('td');
      cell.setAttribute('id',`square${i * 3 + j + 1}`);
      row.append(cell);
    }
      table.append(row);
}

document.body.append(table)

let squares = document.querySelectorAll('td');
let message = document.querySelector('#message');
let reset = document.querySelector('#reset');
let currentPlayer = 'X';
let clickedSquares = [];


squares.forEach(function(square) {
  square.addEventListener('click', () => {
    if (!square.classList.contains('X') && !square.classList.contains('O')) {
      square.classList.add(currentPlayer);
      square.style.backgroundColor = "lightgreen";
      square.textContent = currentPlayer === 'X' ? 'X' : 'O'; 
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      clickedSquares.push(square);
      message.textContent = `${currentPlayer}'s turn`;
      const winner = checkWinners();
      if (winner) {
        message.textContent = `${winner} wins!`;
      }
    }
  })
});

reset.addEventListener('click', () => {
  reset.classList.add('button-clicked');
    setTimeout(() => {
    reset.classList.remove('button-clicked');
  }, 100);

  squares.forEach(function(square) {
    square.classList.remove('X','O');
    square.style.backgroundColor = '';
    square.textContent = '';
  });
  message.textContent = 'X\'s turn';
  currentPlayer = 'X';
});

const winningCombinations = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal from top-left
  [2, 4, 6], // Diagonal from top-right
];

function checkWinners() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      squares[a].textContent &&
      squares[a].textContent === squares[b].textContent &&
      squares[a].textContent === squares[c].textContent
    ) {
      const winner = squares[a].textContent;
      message.textContent = `${winner} wins!`;
      message.style.fontSize = "5em";
      message.style.fontWeight = "bold";
      message.style.color = "#f5487b";
      return winner;
    }
  }
  if (clickedSquares.length === 9) {
    message.textContent = 'Tie game!';
    return 'tie';
  }
  return null;
}

