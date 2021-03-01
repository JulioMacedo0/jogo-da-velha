let turn = 0;
let gameOver = false
let x = [];
let o = [];
let game = [
    ["1", "2", "3"],
    ["1", "5", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["4", "5", "6"],
    ["3", "5", "7"],
    ["3", "6", "9"],
    ["7", "8", "9"],
]

function win() {
    if (turn == 1) {
        console.log('O Player X venceu!')
        gameOver = true
    } else if (turn == 0) {
        console.log('O player O venceu!')
        gameOver = true
    }
}

function compareArray(player, gameRules) {
    let win = false;
  
    let count = 0;
  
    gameRules.forEach((arrayRule) => {
      count = 0;
  
      player.forEach((v) => {
        const include = arrayRule.includes(v);
        if (include) count++;
      });
  
      if (count === 3) {
        win = true;
      }
    });
  
    return win;
  }

function InsertImage(id) {
if(!gameOver){
    let dad = document.getElementById(id);
    let img = document.createElement("img");
    img.id = "img"
    let filho = dad.querySelector('#img')
  
    img.width = 118;
    if (!filho) {
        if (turn == 1) {
            turn = 0
        } else {
            turn = 1
        }
        if (turn == 1) {
            img.src = "imagem/X.png";
            x.push(id)
           const result = compareArray(x, game)
           if(result){
               win()
           }
        }
        if (turn == 0) {
            img.src = "imagem/O.png";
            o.push(id)
           const result = compareArray(o, game)
           if(result){
               win()
           }
    
        }
     dad.appendChild(img);
    } else { console.log("Você já marcou este campo!.") }
    if (x.length + o.length == 9) {
        console.log('DEU VELHA!')
        // Reset()
    }
}
}
function Reset() {
    turn = 0
    gameOver = false
    x = []
    o = []
    document.getElementById("1").innerHTML = ""
    document.getElementById("2").innerHTML = ""
    document.getElementById("3").innerHTML = ""
    document.getElementById("4").innerHTML = ""
    document.getElementById("5").innerHTML = ""
    document.getElementById("6").innerHTML = ""
    document.getElementById("7").innerHTML = ""
    document.getElementById("8").innerHTML = ""
    document.getElementById("9").innerHTML = ""

}


