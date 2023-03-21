let squares = document.querySelectorAll('td');
let resetButton = document.querySelector('#reset');
let message = document.querySelector('#message');
let currentPlayer = 'red';

squares.forEach((square) => {
  square.addEventListener('click', () => {
    if (square.getAttribute('data-clicked') !== 'true') {
      square.setAttribute('data-clicked', 'true');
      square.classList.add(currentPlayer);
      currentPlayer = currentPlayer === 'red' ? 'blue' : 'red';
      message.textContent = `${currentPlayer}'s turn`;
    }
  });
});

resetButton.addEventListener('click', () => {
  squares.forEach((square) => {
    square.removeAttribute('data-clicked');
    square.classList.remove('red', 'blue');
  });
  message.textContent = 'Red\'s turn';
  currentPlayer = 'red';
});
