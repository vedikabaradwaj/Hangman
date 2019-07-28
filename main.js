var words = ["laptop", "hello", "nail", "stationery", "eyelash"]
words.length
var currentguess = ""
var guessno = 10
var secretwordarray = []
var userguessarray = []
var secretword=""
var currentguesstext = document.getElementById("currentAns")
var guesstext = document.getElementById("guessnumber")

function setup(){
    guessno=10
    secretwordarray=[]
    userguessarray=[]
    currentguess = ""
    var count = words.length
    var randomindex = Math.floor(Math.random() * count)
     secretword = (words[randomindex])
    for (let index = 0; index < secretword.length; index++) {
        currentguess = currentguess + " _ "
        secretwordarray[index] = secretword[index]
        userguessarray[index] = " _ "
    }
    guesstext.innerText = guessno + " Lives left"
    currentguesstext.innerText = currentguess
}
setup()
guesstext.innerText = guessno + " Lives left"
currentguesstext.innerText = currentguess
var userguessinput = document.getElementById("userguess")
userguessinput.onkeydown=function(e){
    if(e.keyCode==13){
        playGame()
    }
}
console.log(userguessarray)
function checkGuess(guess) {
    var found=false 
    for (let index = 0; index < secretword.length; index++) {
        if (guess == secretword[index]) {
            userguessarray[index] = guess;
            found=true 
        }
    }
    return found
}

function listToWord(){
    var word = ""
    for (let index = 0; index < secretword.length; index++){
word=word+userguessarray[index];
    }
return word;
}
console.log(secretwordarray);
function playGame() {
    if(userguessinput.value.trim()==""){
        return
    }
    if(checkGuess(userguessinput.value.toLowerCase().trim())){
        currentguesstext.innerText = listToWord();
        if(listToWord()==secretword){
            alert( "YOU WON!")
            setup()
        }
    }else {guessno=guessno - 1;
    guesstext.innerText = guessno + " Lives left"}
    userguessinput.value=""
    if(guessno==0){
        alert("YOU'RE DEAD! The right answer was "+secretword)
        setup()
    }
}
