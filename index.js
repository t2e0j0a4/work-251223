let time = document.querySelector('#time');
let initialTime = 10;
let interval = setInterval(() => {
    time.innerHTML === '0' ? (clearInterval(interval), alert('Hey Developer')) : time.textContent = initialTime;
    initialTime = initialTime - 1;
}, 1000);