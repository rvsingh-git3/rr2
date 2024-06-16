document.getElementById('yesButton').addEventListener('click', () => {
    const celebrationBlast = document.getElementById('celebrationBlast');
    celebrationBlast.style.display = 'block';
    const images = ['flower.png', 'ribbon.png', 'heart.png'];
    for (let i = 0; i < 100; i++) {
        const celebration = document.createElement('div');
        celebration.className = 'celebration';
        celebration.style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;
        celebration.style.left = Math.random() * 100 + 'vw';
        celebration.style.animationDelay = Math.random() * 2 + 's';
        celebrationBlast.appendChild(celebration);
    }
    setTimeout(() => {
        celebrationBlast.style.display = 'none';
        celebrationBlast.innerHTML = '';
        showPopup();
    }, 3000);
});

document.getElementById('noButton').addEventListener('click', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const message = document.querySelector('.message p:last-of-type');

    message.innerHTML += ' please';

    yesButton.style.transform = `scale(${1.2 + Math.random() * 0.3})`;
});

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

// Adding animated elements
const container = document.querySelector('.container');
const items = ['flower.png', 'chocolate.png', 'teddy.png'];
for (let i = 0; i < 10; i++) {
    const item = document.createElement('div');
    item.className = ['flower', 'chocolate', 'teddy'][Math.floor(Math.random() * 3)];
    item.style.backgroundImage = `url(${items[i % items.length]})`;
    item.style.left = Math.random() * 100 + 'vw';
    item.style.animationDelay = Math.random() * 20 + 's';
    container.appendChild(item);
}
