var turn = 1

function state1(turn) {
    var status = getStatus()
    var layout = `
    <h1>Vez de Jogador ${turn}</h1>
    <hr>
    <h2>Gire o dado para continuar</h2>
    <div id="drawBox">
        <button id="drawBtn" onclick=state2(${turn})>Girar Dado</button>
    </div>
    ${status}
    <script src="questions.js"></script>
    <script src="status.js"></script>
    <script src="state3.js"></script>
    <script src="state2.js"></script>
    <script src="state1.js"></script>
    `
    document.body.innerHTML = layout
}

state1(turn)