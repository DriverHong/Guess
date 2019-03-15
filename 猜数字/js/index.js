//const 一旦声明必须马上初始化并且不能重新复制
window.onload = function () {
    /* floot()函数返回一个小于或等于的x的最大正数（去除小数部分）
    由于将一个 0 和 1 之间的随机小数的小数部分舍弃，返回的整数一定为 0，
    因此在此基础上加 1 之后返回值一定为 1。要在舍弃小数部分之前将它乘以100。
    便可得到 0 到 99 之间的随机数
    */
    let randomNumber = Math.floor(Math.random() * 100)+1;
    const guesses = document.querySelector(".guesses");
    const lastResult = document.querySelector(".lastResult");
    const lowOrHi = document.querySelector(".lowOrHi");

    const guessSubmit = document.querySelector(".guessSubmit");
    const guessField = document.querySelector(".guessField");

    let guessCount = 1;
    let resetButton;
    /* 判断函数 */
   guessSubmit.onclick= function CheckGuess() {
        //获取到用户输入的值，赋给userguess
        const userguess = Number(guessField.value);
        if (guessCount == 1) {
            guesses.textContent = '您猜的数：';
        }
        //用户输入的数字显示到class为userguess的p标签
        guesses.textContent += userguess + ' ';
        if (userguess === randomNumber) {
            lastResult.textContent = 'Bingo！';
            lastResult.style.backgroundColor = 'green';
            lowOrHi.textContent = '';
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
        /* 猜完一次之后文本框清空 */
        guessField.value = '';
        /* 光标自动选中文本框 */
        guessField.focus();
    }
    /* 添加事件监听 */
   /*  guessSubmit.addEventListener('click', CheckGuess); */

    /* 游戏结束函数 */
    function setGameOver() {
        //游戏结束后通过disabled属性设置true来禁用文本框和按钮
        guessField.disabled = true;
        guessSubmit.disabled = true;
        /* 创建一个按钮 */
        resetButton = document.createElement('button');
        /* 设置按钮名称 */
        resetButton.textContent = '开始新游戏';
        /* 向末端添加button */
        document.body.appendChild(resetButton);
        /* 添加事件监听 */
        resetButton.addEventListener('click', resetGame);
    }
    /* 游戏重新开始函数 */
    function resetGame() {
        guessCount = 1;
        /* 清空所有段落信息 */
        const resetParas = document.querySelectorAll('.resultParas p');
        for (let i = 0; i < resetParas.length; i++) {
            resetParas[i].textContent = '';
        }
        /* 删除重置按钮 */
        resetButton.parentNode.removeChild(resetButton);
        /* 文本框可用，按钮可用，并且光标自动选中文本框 */
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        /* 清空lastResult背景颜色 */
        lastResult.style.backgroundColor = 'white';
        /* 重新生成一个随机数 */
        randomNumber = Math.floor(Math.random() * 100) + 1;
    }
}
