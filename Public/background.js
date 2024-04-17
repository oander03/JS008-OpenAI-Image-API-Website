// const circle = document.getElementById('circle');

// document.addEventListener('mousemove', (e) => {
//     const height = circle.offsetHeight;
//     const width = circle.offsetWidth;
//     setTimeout(() => { 
//         circle.style.left = `${e.pageX - width/2}px`;
//         circle.style.top = `${e.pageY - height/2}px`;
//     }, 200);
// });

document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.getElementById('glow');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 30;
        curY += (tgY - curY) / 30;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.getElementById('circle');
    let timeout;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 10;
        curY += (tgY - curY) / 10;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener('mousemove', (e) => {
        tgX = e.clientX;
        tgY = e.clientY;
        interBubble.classList.remove('small');

        if (e.target.tagName === 'P' ||
        e.target.tagName === 'A' ||
        e.target.tagName === 'SELECT' ||
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'IMG' ||
        e.target.parentNode.tagName === 'IMG') {
        interBubble.classList.add('big');
    } else {
        interBubble.classList.remove('big');   
    }
    });

    move();
});

document.addEventListener("mouseout", () => {
    const outOfScreen = document.getElementById('circle');
    outOfScreen.classList.add('small');
});
