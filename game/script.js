// Setting important variables
var gameTitle = document.getElementById('gameTitle')
var gameBox = document.getElementById('gameBox')
var interval
var turn = -1

// Getting the amount of players
var cookies = document.cookie.split(';')
var amountPlayers = Number(cookies[0].split('=')[1])

// Adding players to a list
var players = []
for (addPlayer = 2; addPlayer < amountPlayers + 2; addPlayer++) {
    players.push(
        {
            'name': `Jogador ${addPlayer - 1}`,
            'position': 0,
        }
    )
}

// This list above is all the game questions
var questions = {
    0: [ // História
        {
            'quest': 'Em que período da pré-história o fogo foi descoberto?',
            'a': 'Neolítico',
            'b': 'Paleolítico',
            'c': 'Idade dos Metais',
            'd': 'Idade Média',
            'correct': 'b'
        },
        {
            'quest': 'Quem é o autor de “O Príncipe”?',
            'a': 'Maquiavel',
            'b': 'Montesquieu',
            'c': 'Thomas Hobbes',
            'd': 'Rousseau',
            'correct': 'a'
        },
        {
            'quest': 'De quem é a famosa frase “Penso, logo existo”?',
            'a': 'Platão',
            'b': 'Galileu Galilei',
            'c': 'Descartes',
            'd': 'Sócrates',
            'correct': 'c'
        },
        {
            'quest': 'Qual foi o recurso utilizado inicialmente pelo homem para explicar a origem das coisas?',
            'a': 'A Filosofia',
            'b': 'A Biologia',
            'c': 'A Matemática',
            'd': 'A Mitologia',
            'correct': 'd'
        },
        {
            'quest': 'Que líder mundial ficou conhecida como “Dama de Ferro”?',
            'a': 'Dilma Rousseff',
            'b': 'Margaret Thatcher',
            'c': 'Angela Merkel',
            'd': 'Hillary Clinton',
            'correct': 'b'
        },
        {
            'quest': 'Em que século o continente europeu foi devastado pela peste bubônica?',
            'a': 'No século X',
            'b': 'No século XIV',
            'c': 'No século XII',
            'd': 'No século XI',
            'correct': 'b'
        },
        {
            'quest': 'Qual evento marca o início da Idade Antiga?',
            'a': 'A invenção da escrita',
            'b': 'A descoberta do fogo',
            'c': 'As grandes navegações',
            'd': 'A invensão da roda',
            'correct': 'a' 
        },
        {
            'quest': 'Quem assinou a Lei Áurea no Brasil em 1888?',
            'a': 'Princesa Maria',
            'b': 'Rainha Francisca',
            'c': 'Princesa Isabel',
            'd': 'Princesa Vitória',
            'correct': 'c'
        },
        {
            'quest': 'Quantos anos durou a Guerra dos Cem Anos?',
            'a': '90',
            'b': '99',
            'c': '101',
            'd': '116',
            'correct': 'd'
        },
        {
            'quest': 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',    
            'a': 'Jânio Quadros',
            'b': 'Jacinto Anjos',
            'c': 'Getúlio Vargas',
            'd': 'João Figueiredoe) João Goulart',
            'correct': 'd'
        },
        {
            'quest': 'Quais as duas datas que são comemoradas em novembro?',
            'a': 'Independência do Brasil e Dia da Bandeira',
            'b': 'Proclamação da República e Dia Nacional da Consciência Negra',
            'c': 'Dia do Médico e Dia de São Lucas',
            'd': 'Dia de Finados e Dia Nacional do Livro',
            'correct': 'b'
        },
        {
            'quest': 'Qual era o nome de Aleijadinho?',
            'a': 'Alexandrino Francisco Lisboa',
            'b': 'Manuel Francisco Lisboa',
            'c': 'Alex Francisco Lisboa',
            'd': 'Antônio Francisco Lisboa',
            'correct': 'd'
        },
        {
            'quest': 'Nome do navegador português que, conforme a lenda oficial, descobriu o Brasil.',
            'a': 'Américo Vespúcio',
            'b': 'Vasco da Gama',
            'c': 'Pedro Álvares Cabral',
            'd': 'Dom João VI',
            'correct': 'c'
        },
        {
            'quest': 'Quem pintou "Guernica"?',
            'a': 'Paul Cézanne',
            'b': 'Pablo Picasso',
            'c': 'Diego Rivera',
            'd': 'Tarsila do Amaral',
            'correct': 'c'
        },
//
    ],
    1: [ // Geografia
        {
            'quest': 'Qual a montanha mais alta do Brasil?',
            'a': 'Pico da Neblina',
            'b': 'Pico Paraná',
            'c': 'Monte Roraima',
            'd': 'Pico Maior de Friburgo',
            'correct': 'a'
        },
        {
            'quest': 'Qual destes países é transcontinental?',
            'a': 'Rússia',
            'b': 'Filipinas',
            'c': 'Istambul',
            'd': 'Groenlândia',
            'correct': 'a'
        },{
            'quest': 'Em que estado australiano fica situada a cidade de Sydney?',
            'a': 'Nova Gales do Sul',
            'b': 'Victoria',
            'c': 'Tasmânia',
            'd': 'Queensland',
            'correct': 'a'
        },
        {
            'quest': 'Em que oceano fica Madagascar?',
            'a': 'Oceano Índico',
            'b': 'Oceano Antártico',
            'c': 'Oceano Atlântico',
            'd': 'Oceano Pacífico',
            'correct': 'a'
        },
        {
            'quest': 'O Brasil faz parte de qual continente?',
            'a': 'Eurapa',
            'b': 'Africa',
            'c': 'América',
            'd': 'Ásia',
            'correct': 'c'
        },
        {
            'quest': 'Qual o menor país do mundo?',
            'a': 'China',
            'b': 'Vaticano',
            'c': 'Rússia',
            'd': 'Índia',
            'correct': 'b'
        },
        {
            'quest': 'Qual país tem como a capital Lisboa?',
            'a': 'Portugal',
            'b': 'Chile',
            'c': 'Argentina',
            'd': 'Espanha',
            'correct': 'd'
        },
        {
            'quest': 'Em quantas regiões é dividido o país?',
            'a': '2',
            'b': '3',
            'c': '5',
            'd': '7',
            'correct': 'c'
        },
        {
            'quest': 'O movimento de rotação, ou seja, o movimento realizado pela Terra em torno do seu próprio eixo ocorre na direção',
            'a': 'Oeste para Leste',
            'b': 'Norte para Sul',
            'c': 'Leste para Oeste',
            'd': 'Nordeste para Sudeste',
            'correct': 'a'
        },
        {
            'quest': 'O movimento de rotação tem uma duração aproximada de 24 horas. Esse movimento é responsável pelo',
            'a': 'Processo de sucessão de anos',
            'b': 'Movimento aparente do Sol',
            'c': 'Aumento das marés',
            'd': 'Horário de verão',
            'correct': 'b'
        },
        {
            'quest': 'Quais os países que têm a maior e a menor expectativa de vida do mundo?',    'a': 'Japão e Serra Leoa',
            'b': 'Austrália e Afeganistão',
            'c': 'Itália e Chade',
            'd': 'Brasil e Congo',
            'correct': 'a'
        },
        {
            'quest': 'Em qual local da Ásia o português é língua oficial?',
            'a': 'Índia',
            'b': 'Filipinas',
            'c': 'Moçambique',
            'd': 'Macau',
            'correct': 'd'
        },
        {
            'quest': 'Cidade brasileira onde está o Rio Tietê.',
            'a': 'Manaus',
            'b': 'São Paulo',
            'c': 'Rio de Janeiro',
            'd': 'Porto Alegre',
            'correct': 'b'
        },
        {
            'quest': 'Nome que se dá a uma porção de terra cercada de água por todos os lados.',
            'a': 'Montanha',
            'b': 'Lagoa',
            'c': 'Istmo',
            'd': 'Ilha',
            'correct': 'd'
        },
        {
            'quest': 'Cidade da Europa onde está localizada a Torre Eiffel.',
            'a': 'Madri',
            'b': 'Roma',
            'c': 'Londres',
            'd': 'Paris',
            'correct': 'd'
        },
        {
            'quest': 'Cidade brasileira conhecida como "A Cidade Maravilhosa".',
            'a': 'Rio de Janeiro',
            'b': 'Campos do Jordão',
            'c': 'Brasília',
            'd': 'Manaus',
            'correct': 'a'
        },
        {
            'quest': 'Estação do ano que antecede a Primavera.',
            'a': 'Outono',
            'b': 'Ventos Elíseos',
            'c': 'Inverno',
            'd': 'Estação da seca',
            'correct': 'c'
        },
    ],
    2: [ // Biologia
        {
            'quest': 'As pessoas de qual tipo sanguíneo são consideradas doadores universais?',
            'a': 'Tipo A',
            'b': 'Tipo ABO',
            'c': 'Tipo AB',
            'd': 'Tipo O',
            'correct': 'd'
        },
        {
            'quest': 'Quais são os cromossomos que determinam o sexo masculino?',
            'a': 'Os V',
            'b': 'Os X',
            'c': 'Os W',
            'd': 'Os Y',
            'correct': 'd'
        },
        {
            'quest': 'Como se chamam os vasos que transportam sangue do coração para a periferia do corpo?',
            'a': 'Veias',
            'b': 'Átrios',
            'c': 'Ventrículos',
            'd': 'Artérias',
            'correct': 'd'
        },
        {
            'quest': 'Que substância é absorvida pelas plantas e expirada por todos os seres vivos?',
            'a': 'Oxigênio',
            'b': 'Dióxido de Carbono',
            'c': 'Nitrogênio',
            'd': 'Nitrato de Sódio',
            'correct': 'b'
        },
        {
            'quest': 'Qual o metal cujo símbolo químico é o Au?',
            'a': 'Cobre',
            'b': 'Ferro',
            'c': 'Manganês',
            'd': 'Ouro',
            'correct': 'd'
        },
        {
            'quest': 'Qual o maior órgão do corpo humano?',
            'a': 'Pulmão',
            'b': 'Coração',
            'c': 'Fígado',
            'd': 'Pele',
            'correct': 'd'
        },
        {
            'quest': 'De qual reino o ser humano faz parte',
            'a': 'Platae',
            'b': 'Animalia',
            'c': 'Monera',
            'd': 'Protista',
            'correct': 'b'
        },
        {
            'quest': 'Qual desses animais não é um aracnídeo',
            'a': 'Aranha',
            'b': 'Escorpião',
            'c': 'Carrapato',
            'd': 'Centopeia',
            'correct': 'd'
        },
        {
            'quest': 'Qual das estruturas relacionadas a seguir está presente tanto em células procariontes como em células eucariontes?',
            'a': 'Lisossomo',
            'b': 'Ribossomo',
            'c': 'Peroxissomo',
            'd': 'Mitocôndria',
            'correct': 'b'
        },
        {
            'quest': 'De acordo com a teoria celular, quais dos organismos a seguir não poderiam ser considerados seres vivos:',
            'a': 'Bactérias',
            'b': 'Protozoários',
            'c': 'Algas',
            'd': 'Virus',
            'correct': 'd'
        },
        {
            'quest': 'Qual o maior animal terrestre?',
            'a': 'Baleia Azul',
            'b': 'Dinossauro',
            'c': 'Elefante africano',
            'd': 'Tubarão Branco',
            'correct': 'a'
        },
        {
            'quest': 'De acordo com a teoria celular, quais dos organismos a seguir não poderiam ser considerados seres vivos:',
            'a': 'Bactérias',
            'b': 'Protozoários',
            'c': 'Algas',
            'd': 'Vírus',
            'correct': 'd'
        },
        {
            'quest': 'Analise atentamente as alternativas seguintes e marque aquela que indica a função do nucléolo',
            'a': 'Controlar todas as atividades celulares',
            'b': 'Promover a secreção de substâncias',
            'c': 'Garantir a síntese de lipídios',
            'd': 'Formar as subunidades ribossomaise) Realizar a fotossíntese',
            'correct': 'a'
        },
    ],
    3: [ // Matamática
        {
            'quest': 'Quantas casas decimais tem o número pi?',
            'a': 'Duas',
            'b': 'Milhares',
            'c': 'Centenas',
            'd': 'Infinitas',
            'correct': 'd'
        },
        {
            'quest': 'Quantos graus são necessários para que dois ângulos sejam complementares?',
            'a': '45',
            'b': '35',
            'c': '180',
            'd': '90',
            'correct': 'd'
        },
        {
            'quest': 'Quantos segundos tem 1h?',
            'a': '2800',
            'b': '3600',
            'c': '12570',
            'd': '9990',
            'correct': 'b'
        },
        {
            'quest': 'Um quilômetro são quantos metros?',
            'a': '1',
            'b': '10',
            'c': '100',
            'd': '1000',
            'correct': 'd'
        },
        {
            'quest': 'Quantos anos tem um século?',
            'a': '10',
            'b': '50',
            'c': '100',
            'd': '500',
            'correct': 'c'
        },
        {
            'quest': 'Eu comprei 500 balas comi 305 e dei 120 para meu irmão. Com quantas balas eu fiquei?',
            'a': '85',
            'b': '75 ',
            'c': '70',
            'd': '65',
            'correct': 'b'
        },
        {
            'quest': 'Se 1 pato tem 2 patas. Quanto patas tem 35 patos?',
            'a': '50',
            'b': '60',
            'c': '70 ',
            'd': '20',
            'correct': 'c'
        },
        {
            'quest': 'Quanto é 5% de 200,00 reais?',
            'a': '10 ',
            'b': '5',
            'c': '20',
            'd': '200',
            'correct': 'a'
        },
        {
            'quest': 'Minha vizinha está morando aqui há 5 anos. Há quantos dias ela está morando aqui? (Atenção: um ano desses é bissexto)',
            'a': '1827',
            'b': '1836',
            'c': '1826 ',
            'd': '1900',
            'correct': 'c'
        },
        {
            'quest': 'Qual número certo de pi?',
            'a': '3,14157... ',
            'b': '3,14158... ',
            'c': '3,14159... ',
            'd': '3,14160...',
            'correct': 'c'
        },
    ],
    4: [ // Geral
        {
            'quest': 'O que a palavra <i>legend</i> significa em português?',
            'a': 'Legenda',
            'b': 'Conto',
            'c': 'História',
            'd': 'Lenda',
            'correct': 'd'
        },
        {
            'quest': 'Qual o número mínimo de jogadores numa partida de futebol?',
            'a': '7',
            'b': '8',
            'c': '11',
            'd': '10',
            'correct': 'a'
        },
        {
            'quest': 'Quanto tempo a luz do Sol demora para chegar à Terra?',
            'a': '12 minutos',
            'b': '1 dia',
            'c': '8 minutos',
            'd': '8 segundos',
            'correct': 'c'
        },
        {
            'quest': 'Segundo a mitologia grega, quem era Poseidon?',
            'a': 'Deus dos mares',
            'b': 'Deus da música',
            'c': 'Deus da sabedoria',
            'd': 'Deus da guerra',
            'correct': 'a'
        },
        {
            'quest': 'As cores azul e vermelho, quando misturadas, formam:',
            'a': 'Laranja',
            'b': 'Rosa',
            'c': 'Roxo',
            'd': 'Marrom',
            'correct': 'c'
        },
        {
            'quest': 'De onde é a invenção do chuveiro elétrico?',
            'a': 'França',
            'b': 'Inglaterra',
            'c': 'Brasil ',
            'd': 'Austrália',
            'correct': 'c'
        },
        {
            'quest': 'Atualmente, quantos elementos químicos a tabela periódica possui?',
            'a': '113',
            'b': '109',
            'c': '108',
            'd': '118 ',
            'correct': 'd'
        },
        {
            'quest': 'Qual a altura da rede de vôlei nos jogos masculino e feminino?',
            'a': '2,4 para ambos',
            'b': '2,5m e 2,0m',
            'c': '1,8m e 1,5m',
            'd': '2,45m e 2,15me) 2,43m e 2,24m ',
            'correct': 'd'
        },
        {
            'quest': 'Qual a velocidade da luz?',
            'a': '300 000 000 metros por segundo (m/s) ',
            'b': '150 000 000 metros por segundo (m/s)',
            'c': '199 792 458 metros por segundo (m/s)',
            'd': '299 792 458 metros por segundo (m/s) ',
            'correct': 'd'
        },
        {
            'quest': 'Metal precioso de cor amarela, muito usado no fabrico de alianças, anéis, brincos, e até moedas.',
            'a': 'Prata',
            'b': 'Ouro ',
            'c': 'Aço Inoxidável',
            'd': 'Cobre',
            'correct': 'b'
        },
        {
            'quest': 'Nome do brasileiro conhecido como "O Pai da Aviação".',
            'a': 'Castro Alves',
            'b': 'José de Alencar',
            'c': 'Osvaldo Cruz',
            'd': 'Alberto Santos Dumont ',
            'correct': 'd'
        },
    ],
}

// This function above gets the player's area and the color of the area 
function getArea(position) {
    if (position <=6) {
        return [0, '#ff0000']
    }
    else if (position <= 12) {
        return [1, '#ffa500']
    }
    else if (position <= 18) {
        return [2, '#ffff00']
    }
    else if (position <= 24) {
        return [3, '#008000']
    }
    else if (position <= 30) {
        return [4, '#0000ff']
    }
}

// This function gets the status of the game
function getStatus() {
    var status = ''
    for (player in Object.keys(players)) {
        status = status.concat(`
            <h1>${players[player]['name']} - Casa: ${players[player]['position']}</h1>
        `)
    }
    return status
}

// Thsi functions gets a random number between the numbers given
function randomChoice(max, min, change) {
    var result = parseInt(Math.random() * (max - min) + min)

    // If change is true, it will show the number in tthe screen
    if (change == true) {
        document.getElementById('randomBox').remove()
        document.getElementById('statusBox').remove()
        players[turn]['position'] += result
        
        // Check if player has won
        if (players[turn]['position'] >= 30) {
            players[turn]['position'] = 30
            gameBox.innerHTML = `
                <h1>Parabéns ${players[turn]['name']}, você ganhou!</h1>
                <h2>Parabéns à todos os outros jogadores também, o status final de cada um de vocês foi:</h2>
                ${getStatus()}`
        }
        else if (result == 1) {
            document.getElementById('randomResult').innerHTML = `Ande 1 casa`
            phase2()
        }
        else {
            document.getElementById('randomResult').innerHTML = `Ande ${result} casas`
            phase2()
        }
    }
    else {
        return result
    }
}

// THis function gets a random question baseed on the player's area
function getQuestion() {
    var randomQuest = randomChoice(questions[getArea(players[turn]['position'])[0]].length - 1, 0, false)
    var quest = questions[getArea(players[turn]['position'])[0]][randomQuest]
    var questHtml = `
        <h1 id="timer" style="text-align: center">40</h1>
        <h1 style="font-size: 20px;text-align: center">${quest['quest']}</h1>
        <button onclick="checkAnswer(${randomQuest}, 'a')" class="answer">A) ${quest['a']}</button><br>
        <button onclick="checkAnswer(${randomQuest}, 'b')" class="answer">B) ${quest['b']}</button><br>
        <button onclick="checkAnswer(${randomQuest}, 'c')" class="answer">C) ${quest['c']}</button><br>
        <button onclick="checkAnswer(${randomQuest}, 'd')" class="answer">D) ${quest['d']}</button>`
    return questHtml
}

function checkAnswer(quest, answered) {
    question = questions[getArea(players[turn]['position'])[0]][quest]
    answer = question['correct']
    if (answer == answered) {
        gameBox.innerHTML = `
            <h1>Resposta Correta!</h1>
            <div style="display: flex;justify-content: center;">
                <button style="width: 110px;height: 40px;font-size: 25px;text-align: center" onclick=phase1()>Próximo</button>
            </div>
            <hr style="margin-top: 20px">
            <h2>Status</h2>
            ${getStatus()}`
    }
    else {
        var goBack = randomChoice(6, 2, false)
        if (players[turn]['position'] < goBack) {
            players[turn]['position'] = 0
        }
        else {
            players[turn]['position'] -= goBack
        }
        gameBox.innerHTML = `
            <h1>Resposta Errada!</h1>
            <p style="text-align: center">Resposta correta: ${question['correct']}</p>
            <h1>Volte ${goBack} casas</h2>
            <div style="display: flex;justify-content: center;">
                <button style="width: 110px;height: 40px;font-size: 25px;text-align: center" onclick=phase1()>Próximo</button>
            </div>
            <hr style="margin-top: 20px">
            <h1>Status</h1>
            ${getStatus()}`
    }
}

function timeOver() {
    clearInterval(interval)
    var muchBack = randomChoice(7, 2, false)
    if (players[turn]['position'] <= muchBack) {
        players[turn]['position'] = 0
    }
    else {
        players[turn]['position'] -= muchBack
    }
    gameBox.innerHTML = `
        <h1>O tempo acabou!</h1>
        <h1>${players[turn]['name']}, volte ${muchBack} casas</h1>
        <div style="display: flex;justify-content: center">
            <button onclick=phase1() id="continueBtn">Continuar</button>
        </div>`
}

function phase1() {
    if (turn == cookies[0].split('=')[1] - 1) {
        turn = 0
    }
    else {
        turn ++
    }

    gameTitle.innerHTML = 'Vez de ' + players[turn]['name']
    gameBox.innerHTML = `
        <div id="randomBox">
            <button id="randomBtn" onclick="randomChoice(7, 1, 1)">Girar<br>Dado</button>
        </div>
            <h2 id="randomResult"></h2>
            <div id="statusBox">
                <hr style="margin-top: 20px">
                <h1>Status</h1>
                ${getStatus()}
            </div>
        </div>`
}

function phase2() {
    gameBox.innerHTML += `
        <div id="cardBox">
            <button id="card" style="background-color: ${getArea(players[turn]['position'])[1]}" onclick=phase3()>Revelar Pergunta</button>
        </div>`
}

function phase3() {
    document.getElementById('card').remove()
    gameBox.innerHTML = `
        <div align="center">
            <div align="center">
                ${getQuestion()}
            </div>
        </div>`
    var timer = document.getElementById("timer")
    interval = setInterval(function () {if (timer.innerHTML == 0) {timeOver()} else{timer.innerHTML = Number(timer.innerHTML - 1)}}, 1000)
}

phase1()
