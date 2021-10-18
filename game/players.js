var amntPlayers = Number(document.cookie[8])
var p
var players = []

for (p = 1; p <= amntPlayers; p ++) {
    players.push(
        {
            'name': p,
            'position': 1,
            'area': 1,
            'color': 'rgb(255, 0, 0)'
        }
    )
}

function getStatus() {
    var statusHTML = ''
    var player
    for (player in Object.keys(players)) {
        statusHTML = statusHTML.concat(
            `<h1 style="color: ${players[player]['color']}">Jogador ${players[player]['name']}: Casa ${players[player]['position']}</h1>
        `
        )
    }
    return statusHTML
}

function getPlayers(change) {
    if (change == false) {
        return players
    }
    else {
        players = change
    }
}

function changeTurn(turn) {
    if (turn == amntPlayers) {
        return 1
    }
    else {
        return turn + 1
    }
}

function updatePlayer(p, n) {
    players = getPlayers(false)

    if ((players[p - 1]['position'] + n) < 0) {
        players[p - 1]['position'] = 1
    }
    else {
        players[p - 1]['position'] += n
    }

    if (players[p - 1]['position'] < 7) {
        players[p - 1]['color'] = 'rgb(255, 0, 0)'
        players[p - 1]['area'] = 1
    }
    else if (players[p - 1]['position'] < 13) {
        players[p - 1]['color'] = 'rgb(255, 166, 0)'
        players[p - 1]['area'] = 2
    }
    else if (players[p - 1]['position'] < 19) {
        players[p - 1]['color'] = 'rgb(255, 255, 0)'
        players[p - 1]['area'] = 3
    }
    else if (players[p - 1]['position'] < 25) {
        players[p - 1]['color'] = 'rgb(0, 126, 0)'
        players[p - 1]['area'] = 4
    }
    else {
        players[p - 1]['color'] = 'rgb(0, 0, 255)'
        players[p - 1]['area'] = 5
    }
    getPlayers(players)

    var player
    for (player in Object.keys(players)) {
        if (players[player]['position'] >= 30) {
            return gameEnded(players[player]['name'])
        }
    }

    return false
}

function gameEnded(winner) {
    var layout = `
    <h1>Jogador ${winner} ganhou!</h1>
    <h2>Parabéns a todos os jogadores</h2>
    <hr>
    ${getStatus()}
    <h2>Clique no botão abaixo para iniciar um novo jogo</h2>
    <div style="display: flex;justify-content: center">
        <button id="menuBtn" onclick=menu()>Menu</button>
    </div>
    <script src="questions.js"></script>
    <script src="status.js"></script>
    <script src="state3.js"></script>
    <script src="state2.js"></script>
    <script src="state1.js"></script>
    `
    document.body.innerHTML = layout
}

function menu() {
    window.location.href = window.origin
}