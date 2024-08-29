const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",",
"|",":",";","<",">",".","?","/"];

let password1 = []
let password2 = []

let pass1 = document.getElementById("pwd1")
let pass2 = document.getElementById("pwd2")

function generatePwd(){
    pass1.textContent = ""
    pass2.textContent = ""
    for(let i=0; i<15; i++){
        let x = Math.floor(Math.random()*characters.length)
        let y = Math.floor(Math.random()*characters.length)
        pass1.textContent += characters[x]
        pass2.textContent += characters[y]
    }
}