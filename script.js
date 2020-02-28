//JS

//Prompt variables
let Psize = prompt('choose a length of at least 8 characters and no more than 128 characters')
let l = confirm('would you like lowercase characters?')
let u = confirm('would you like uppercase characters?')
let s = confirm('would you like symbol characters?')
let n = confirm('would you like numeric characters?')

//Libraries
let up = [ 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
let low = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
let sym = [ "#", "$", "%", "&", "(",")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//Function Variables 
let pass = [];
let Q

//Functions
        
function Rdm(arr){
    if (arr == low){
        return Math.floor(Math.random() * low.length)
    }
    else if (arr == up) {
      return Math.floor(Math.random() * up.length)
    }
    else if (arr == num) {
      return Math.floor(Math.random() * num.length)
    }
    else {
      return Math.floor(Math.random() * sym.length)
    }
}

//Program
// all 4
if (l === true & u === true & s === true & n === true){
    Q = Psize / 4
    Q = Math.ceil(Q)
    for (let i = 0; i < Q; i++) {
        pass = pass + low[Rdm(low)]
        pass = pass + up[Rdm(up)]
        pass = pass + sym[Rdm(sym)]
        pass = pass + num[Rdm(num)]
        //pass.push(low[Rdm(low)])
        //pass.push(up[Rdm(up)])
        //pass.push(sym[Rdm(sym)])
        //pass.push(num[Rdm(num)])
    }
}
// 3
else if (l === true & u === true & s === true & n === false){
    Q = Psize / 3
    Q = Math.ceil(Q)
    for (let i = 0; i < Q; i++) {
        pass = pass + low[Rdm(low)]
        pass = pass + up[Rdm(up)]
        pass = pass + sym[Rdm(sym)]
        
    }
}
else if (l === false & u === true & s === true & n === true){
    Q = Psize / 3
    Q = Math.ceil(Q)
    for (let i = 0; i < Q; i++) {
        
        pass = pass + up[Rdm(up)]
        pass = pass + sym[Rdm(sym)]
        pass = pass + num[Rdm(num)]
    }
}
else if (l === true & u === false & s === true & n === true){
    Q = Psize / 3
    Q = Math.ceil(Q)
    for (let i = 0; i < Q; i++) {
        
        pass = pass + low[Rdm(low)]
        
        pass = pass + sym[Rdm(sym)]
        pass = pass + num[Rdm(num)]
    }
}
else if (l === true & u === true & s === false & n === true){
    Q = Psize / 3
    Q = Math.ceil(Q)
    for (let i = 0; i < Q; i++) {

        pass = pass + low[Rdm(low)]
        pass = pass + up[Rdm(up)]
        
        pass = pass + num[Rdm(num)]
    }
}
// 2
else if (l === false & u === false & s === true & n === true){
    Q = Psize / 2
    Q = Math.ceil(Q)
    for (let i = 0; i < Q; i++) {
        
        pass = pass + sym[Rdm(sym)]
        pass = pass + num[Rdm(num)]
    }
}
else if (l === true & u === true & s === false & n === false){
    Q = Psize / 2
    Q = Math.ceil(Q)
    for (let i = 0; i < Q; i++) {
        pass = pass + low[Rdm(low)]
        pass = pass + up[Rdm(up)]
        
    }
}
else if (l === false & u === true & s === false & n === true){
    Q = Psize / 2
    Q = Math.ceil(Q)
    for (let i = 0; i < Q; i++) {
        
        pass = pass + up[Rdm(up)]
        
        pass = pass + num[Rdm(num)]
    }
}
else if (l === true & u === false & s === true & n === false){
    Q = Psize / 2
    Q = Math.ceil(Q)
    for (let i = 0; i < Q; i++) {
        
        pass = pass + low[Rdm(low)]
        
        pass = pass + sym[Rdm(sym)]
       
    }
}
else if (l === false & u === true & s === true & n === false){
    Q = Psize / 2
    Q = Math.ceil(Q)
    for (let i = 0; i < Q; i++) {
        
        
        pass = pass + up[Rdm(up)]
        pass = pass + sym[Rdm(sym)]
        
    }
}
else if (l === true & u === false & s === false & n === true){
    Q = Psize / 2
    Q = Math.ceil(Q)
    for (let i = 0; i < Q; i++) {
        
        pass = pass + low[Rdm(low)]
        
        pass = pass + num[Rdm(num)]
    }
}

// 1
else if (l === true & u === false & s === false & n === false){
    Q = Psize / 1
    Q = Math.ceil(Q)
    for (let i = 0; i < Q; i++) {
        pass = pass + low[Rdm(low)]
        
    }
}



else if (l === false & u === true & s === false & n === false){
    Q = Psize / 1
    Q = Math.ceil(Q)
    for (let i = 0; i < Q; i++) {
        
        pass = pass + up[Rdm(up)]
        
    }
}



else if (l === false & u === false & s === true & n === false){
    Q = Psize / 1
    Q = Math.ceil(Q)
    for (let i = 0; i < Q; i++) {
        
        pass = pass + sym[Rdm(sym)]
        
    }
}


else if (l === false & u === false & s === false & n === true){
    Q = Psize / 1
    Q = Math.ceil(Q)
    for (let i = 0; i < Q; i++) {
        
        
        pass = pass + num[Rdm(num)]
    }
}
// 0
else {
    alert('invalid input')
}
//part 2
let Q2 = pass.length - Psize
pass = pass.substr(0, (pass.length - Q2))



//print to screen test
//document.write(pass)





//document.write(Rdm(pass))
//document.write(Rdm(up) + ' ')
//document.write(Rdm(sym) + ' ')
//document.write(Rdm(num) + ' ')
//document.write(Rdm(low) + ' ')
//document.write(l + ' ' + Q)
//document.write(' ' + low[Rdm(low)] + sym[Rdm(sym)])



// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = pass;
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
