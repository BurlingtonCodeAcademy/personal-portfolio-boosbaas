let player = null
let playOne = "cheese"
let playTwo = "mouse"
let turn = 0;
function takeTurns(player) {
    player = playOne;
   
    while (turn<10) {
        if (player === playOne) {
            player = playTwo;
        } else {
            player = playOne;
        }
        console.log(player + ''+ turn)
        
        turn++
    }
    console.log(player + '' + turn)
}
takeTurns()