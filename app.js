const displayScreen = document.querySelector(".displayScreen")
const contentCircleValues = document.querySelectorAll(".contentCirle")

contentCircleValues.forEach(element => {
    element.addEventListener('click', ()=>{
        if(element.innerHTML === '='){
            if(currVal){
            let splittedNUmbers =  splitString(currVal)

            num1 = splittedNUmbers[0]
            num2 = splittedNUmbers[1]
        
            let ans = operate(op,num1,num2)
            displayScreen.textContent = ans
            currVal = `${ans}`
            }
        }else if(element.innerHTML === 'C'){
            currVal = ''
            displayScreen.textContent = ''
        }
        else if(!Number.isInteger(parseInt(element.innerHTML))){
            splitStringAndCompute(element)
      }else{
        populateScreen(element)
        currVal += element.innerHTML
      }
    })
})

let num1,num2,op

let currVal = ''

function splitStringAndCompute(element){

    if(checkStringOperator(currVal)){
        let splittedNUmbers =  splitString(currVal)

        num1 = splittedNUmbers[0]
        num2 = splittedNUmbers[1]
    
        let ans = operate(op,num1,num2)
        displayScreen.textContent = `${ans}${element.innerHTML}`
        currVal = `${ans}${element.innerHTML}`
        console.log(ans)
    }
    else{
        populateScreen(element)
        currVal += element.innerHTML
    }
   
}

function checkStringOperator(str){
    let opArr = str.split("")
    console.log(opArr)
    for(i=0;i<opArr.length;i++){
        console.log(parseInt(opArr[i]))
        if(!Number.isInteger(parseInt(opArr[i]))) return true
    }   
    return false
}

function add(num1,num2){
    return num1+num2
}

function subtract(num1,num2){
    return num1-num2
}

function multiply(num1,num2){
    return num1*num2
}

function divide(num1,num2){
    return num1/num2
}

function splitString(str){
    if(str.includes("+")) op = '+'
    if(str.includes("-")) op = '-'
    if(str.includes("*")) op = '*'
    if(str.includes("/")) op = '/'

    return str.split(`${op}`)
}

function operate(op,num1,num2){

    num1 = parseInt(num1)
    num2 = parseInt(num2)

    let ans = null

    if(op === '+'){
        ans = add(num1,num2)
    }
    if(op === '-'){
        ans = subtract(num1,num2)
    }
    if(op === '*'){
        ans = multiply(num1,num2)
    }
    if(op === '/'){
        ans = divide(num1,num2)
    }

    return ans
}

function populateScreen(element){
    displayScreen.textContent += element.innerHTML
}