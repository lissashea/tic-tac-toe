
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
      square.textContent = currentPlayer === 'X' ? 'X' : 'O'; 
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      clickedSquares.push(square);
      message.textContent = `${currentPlayer}'s turn`;
    }
  })
});

reset.addEventListener('click', () => {
  squares.forEach(function(square) {
    square.classList.remove('X','O');
    square.style.backgroundColor = '';
    square.textContent = '';
  });
  message.textContent = 'X\'s turn';
  currentPlayer = 'X';
  });
