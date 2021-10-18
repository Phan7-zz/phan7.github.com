var interval

function drawDice() {
    var random = parseInt(Math.random() * (7 - 1) + 1)
    return random
}

function showQuest(turn, area) {
    var question = getQuestion(area)
    var correct = question['correct']
    var layout = `
        <div>
            <h2 id="timer">30</h2>
            <h2>${question['quest']}</h2>
            <div style="display: flex; justify-content: center">
                <div>
                    <button class="answBtn" onclick="checkAnsw(${turn}, '${correct}', 'a')">A) ${question['a']}</button><br>
                    <button class="answBtn" onclick="checkAnsw(${turn}, '${correct}', 'b')">B) ${question['b']}</button><br>
                    <button class="answBtn" onclick="checkAnsw(${turn}, '${correct}', 'c')">C) ${question['c']}</button><br>
                    <button class="answBtn" onclick="checkAnsw(${turn}, '${correct}', 'd')">D) ${question['d']}</button>
                </div>
            </div>
        </div>
    `
    document.getElementById('questBox').innerHTML = layout
    var timer = document.getElementById('timer')

    interval = window.setInterval(function(){
        if (timer.innerHTML == 0) {
            clearInterval(interval)
            state3(turn, 3)
        }
        else {
            timer.innerHTML --
        }
    }, 1000)
    
}

function checkAnsw(turn, correct, answ) {
    clearInterval(interval)
    if (correct == answ) {
        state3(turn, 1)
    }
    else {
        state3(turn, 2)
    }
}

function state2(turn) {
    var random = drawDice() 
    if (updatePlayer(turn, random) != false) {
        return
    }
    if (random == 1) {
        random = 'uma casa'
    }
    else {
        random += ' casas'
    }

    var layout = `
    <h1>Vez de Jogador ${turn}</h1>
    <hr>
    <h1>Avance ${random}</h1>
    <div id="questBox"></div>
    <h3>Responda a pergunta acima. Se você acertar, fique onde está, mas se errar, volte uma quantidade determinada de casas.</h3>
    <script src="questions.js"></script>
    <script src="players.js"></script>
    <script src="state3.js"></script>
    <script src="state2.js"></script>
    <script src="state1.js"></script>
    `
    document.body.innerHTML = layout
    showQuest(turn, getPlayers(false)[turn - 1]['area']) 
}