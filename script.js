var amountPlayers = document.getElementById('amountPlayers')

function addPlayer() {
    if (parseInt(amountPlayers.innerText) < 5) {
        amountPlayers.innerHTML = parseInt(amountPlayers.innerText) + 1
    }
}

function rmPlayer() {
    if (parseInt(amountPlayers.innerText) > 2) {
        amountPlayers.innerHTML = parseInt(amountPlayers.innerText) - 1
    }
}

function newGame() {
    document.cookie = 'players=' + amountPlayers.innerText + '; path=/game; '
    window.location.href = window.location.origin + '/game/index.html'
}
