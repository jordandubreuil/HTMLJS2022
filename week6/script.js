 // var myName = "Jordan" 
 var myButton = document.querySelector('button')

 myButton.addEventListener('click', dataPrompt)

 function dataPrompt(){
    // var firstName = prompt('Enter your first name', 'First Name')
    // var lastName = prompt('Enter your last name', 'Last Name')
     var firstNumber = prompt('Enter the first number', 'First Number')
     var secondNumber = prompt('Enter the second number', 'Second Number')
     var result = Number(firstNumber) + Number(secondNumber)
     //Regular String Concatonatation
     //alert("Hello World! " + firstName + " " + lastName)
     //example of using string literal
     //alert(`Hello World and Hello ${firstName} ${lastName}`)
     alert(`The Result is ${result}`)
     document.querySelector('span').innerHTML = `The Result is ${result}`
     console.log(`The Result is ${result}`)
 }

 //dataPrompt()