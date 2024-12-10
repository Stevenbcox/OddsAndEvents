const form = document.querySelector("form");
const addNumber = document.querySelector("#number");
const numberBankNumbers = document.querySelector("#numberBank output");
const sortOne = document.querySelector("#sortOne")
const sortAll = document.querySelector("#sortAll")
const odds = document.querySelector("#odds output")
const evens = document.querySelector("#evens output")

let numbers = [];
let oddsArray = [];
let evensArray = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const inputValue = addNumber.value.trim();
    const number = Number(inputValue);
    numbers.push(number);
  
    updateNumberBank();
    addNumber.value = "";
  });

const updateNumberBank = () => {
  numberBankNumbers.innerHTML = "";
  numberBankNumbers.textContent = numbers.join(", ");
}
const updateSortNumbers = () => {
    odds.textContent = oddsArray.join(", ")
    evens.textContent = evensArray.join(", ")

}

sortOne.addEventListener("click", () => {
   if (numbers.length > 0) {
    const firstNumber = numbers.shift()
    if (firstNumber % 2 === 0){
        evensArray.push(firstNumber)
    }
    else {
        oddsArray.push(firstNumber)
    }
    updateNumberBank();
    updateSortNumbers()
   }
})

sortAll.addEventListener("click", () => {
    while (numbers.length > 0) {
        const number = numbers.shift()
        if (number % 2 === 0){
            evensArray.push(number)
        }
        else {
            oddsArray.push(number)
        }
        updateNumberBank()
        updateSortNumbers()
    }
})
