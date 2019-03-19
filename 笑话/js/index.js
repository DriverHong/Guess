document.getElementById('cn').onclick = () => {
    document.title = '笑话生成器';
    document.getElementById('lbl-customname').textContent = '请输入自定义的名字：';
    document.getElementById('lbl-cn').textContent = '中国';
    document.getElementById('lbl-us').textContent = '美国';
    document.getElementById('lbl-uk').textContent = '英国';
    document.getElementById('customname').placeholder = '李雷';
    document.querySelector('.randomize').textContent = '随机生成笑话';
};

document.getElementById('us').onclick =
    document.getElementById('uk').onclick = () => {
        document.title = 'Silly story generator';
        document.getElementById('lbl-customname').textContent = 'Enter custom name:';
        document.getElementById('lbl-cn').textContent = 'CN';
        document.getElementById('lbl-us').textContent = 'US';
        document.getElementById('lbl-uk').textContent = 'UK';
        document.getElementById('customname').placeholder = 'Bob';
        document.querySelector('.randomize').textContent = 'Generate random story';
    };

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = 'Willy the GoblinBig DaddyFather Christmas';
const insertY = 'the soup kitchenDisneylandthe White House';
const insertZ = 'spontaneously combustedmelted into a puddle on the sidewalkturned into a slug and crawled away';

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

randomize.addEventListener('click', result);

function result() {
    var newStory,xItem,yItem,zItem,name;
    if (customName.value !== '') {
        var name = customName.value;
        
    }

    if (document.getElementById("uk").checked) {
        var weight = Math.round(300);
        var temperature = Math.round(94);

    }

    story.textContent = '';
    story.style.visibility = 'visible';
}