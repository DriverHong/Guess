//const 一旦声明必须马上初始化并且不能重新复制
window.onload = function () {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    const guesses = document.querySelector(".guesses");
    const lastResult = document.querySelector(".lastResult");
    const lowOrHi = document.querySelector(".lowOrHi");

    const guessSubmit = document.querySelector(".guessSubmit");
    const guessField = document.querySelector(".guessField");

    let guessCount = 1;
    let resetButton;

    function CheckGuess() {
        const userguess = Number(guessField.value);   //获取到用户输入的值，赋给userguess
        if (guessCount == 1) {
            guesses.textContent = '您猜的数：';
        }
        guesses.textContent += userguess + ' ';   //用户输入的数字显示到class为userguess的p标签
        if (userguess === randomNumber) {
            lastResult.textContent = 'Bingo！';
            lastResult.style.backgroundColor = 'green';
            lowOrHi.textContent = '';   //清空
            setGameOver();
        } else if (guessCount == 10) {
            lastResult.textContent = 'GameOver';
            setGameOver();
        } else {
            lastResult.textContent = 'Miss'
            lastResult.style.backgroundColor = 'red';
            if (userguess < randomNumber) {
                lowOrHi.textContent = '再往上猜！';
            } else if (userguess > randomNumber) {
                lowOrHi.textContent = '往下猜一下';
            }
        }
        guessCount++;
        guessField.value = '';
        guessField.focus();
    }
    guessSubmit.addEventListener('click', CheckGuess);

    function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = '开始新游戏';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
    }

    function resetGame() {
        guessCount = 1;
      
        const resetParas = document.querySelectorAll('.resultParas p');
        for (let i = 0 ; i < resetParas.length; i++) {
          resetParas[i].textContent = '';
        }
      
        resetButton.parentNode.removeChild(resetButton);
      
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
      
        lastResult.style.backgroundColor = 'white';
      
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }
}
