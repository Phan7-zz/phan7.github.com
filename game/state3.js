function random() {
    var random = parseInt(Math.random() * (7 - 1) + 1)

    if (random == 1) {
        var random2 = 'uma casa'
    }
    else {
        var random2 = random +' casas'
    }

    var result = [random, random2]

    return result
}

function state3(turn, result) {
    var rnd

    if (result == 1) {
        var layout = `
        <h1>Vez de Jogador ${turn}</h1>
        <hr>
        <h1>Parabéns, você acertou!</h1>
        <h2>Fique onde está, e clique em "continuar" para passar a vez</h2>
        <div style="display: flex; justify-content: center">
            <button id="continueBtn" onclick=state1(${changeTurn(turn)})>Continuar</button>
        </div>
        ${getStatus()}
        <script src="questions.js"></script>
        <script src="players.js"></script>
        <script src="state3.js"></script>
        <script src="state2.js"></script>
        <script src="state1.js"></script>
        `
    }
    else if (result == 2) {
        rnd = random()
        updatePlayer(turn, -rnd[0])

        var layout = `
        <h1>Vez de Jogador ${turn}</h1>
        <hr>
        <h1>Resposta errada!</h1>
        <h2>Volte ${rnd[1]}, e clique em "continuar" para passar a vez</h2>
        <div style="display: flex; justify-content: center">
            <button id="continueBtn" onclick=state1(${changeTurn(turn)})>Continuar</button>
        </div>
        ${getStatus()}
        <script src="questions.js"></script>
        <script src="players.js"></script>
        <script src="state3.js"></script>
        <script src="state2.js"></script>
        <script src="state1.js"></script>
        `
    }
    else {
        rnd = random()
        updatePlayer(turn, -rnd[0])

        var layout = `
        <h1>Vez de Jogador ${turn}</h1>
        <hr>
        <h1>O tempo acabou!</h1>
        <h2>Volte ${rnd[1]}, e clique em "continuar" para passar a vez</h2>
        <div style="display: flex; justify-content: center">
            <button id="continueBtn" onclick=state1(${changeTurn(turn)})>Continuar</button>
        </div>
        ${getStatus()}
        <script src="questions.js"></script>
        <script src="players.js"></script>
        <script src="state3.js"></script>
        <script src="state2.js"></script>
        <script src="state1.js"></script>
        `
    }

    document.body.innerHTML = layout
}
