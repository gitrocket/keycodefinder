window.addEventListener('keydown', getCodes);
const keys = document.querySelector('.keys');

function getCodes(event) {
    keys.innerHTML = `<div class="key-container">
                <small>event.key</small>
                <div class="key">${event.key === " " ? 'Space' : event.key}</div>
            </div>
            <div class="key-container">
                <small>event.keyCode</small>
                <div class="key">${event.keyCode}</div>
            </div>
            <div class="key-container">
                <small>event.code</small>
                <div class="key">${event.code}</div>
            </div>`
    
}