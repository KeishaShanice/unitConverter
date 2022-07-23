//connect html elements
let input = document.getElementById("inputAmount-el")
let convertButton = document.getElementById("convertButton-el")
let darkButton = document.getElementById("darkButton-el")
let length = document.getElementById("length-el")
let volume = document.getElementById("volume-el")
let mass = document.getElementById("mass-el")

//variables to hold measurements
let meter = 0
let feet = 0
let liters = 0
let gallons = 0
let kilograms = 0
let pounds = 0

//click event for button
convertButton.addEventListener('click', convert)
darkButton.addEventListener('click', goDark)

//function for conversions
function convert(num){
    num = Number(input.value)
    meter = (num * 0.3048).toFixed(3)
    feet = (num * 3.28084).toFixed(3)
    liters = (num * 3.7854).toFixed(3)
    gallons = (num * 0.264).toFixed(3)
    kilograms = (num / 2.204).toFixed(3)
    pounds = (num * 2.204).toFixed(3)

    //show on page
    length.innerHTML = ` ${num} meters = ${feet} feet <span class="border"> ${num}  <span>feet = ${meter} meters`
    volume.innerHTML = ` ${num} liters = ${gallons} gallons <span class="border"> ${num}  <span>gallons = ${liters} liters`
    mass.innerHTML = ` ${num} kilos= ${pounds} pounds <span class="border"> ${num}  <span>pounds= ${kilograms} kilos`

    //clear text field
    clear()
}

//function for dark mode
function goDark() {
    let element = document.querySelector(".container")
    element.classList.toggle("dark-mode")
    let conversions = document.querySelector(".conversions")
    conversions.classList.toggle("almostDark-mode")
    let volumeCon = document.querySelector(".volume")
    volumeCon.classList.toggle("almostDark-mode")
    let massCon = document.querySelector(".mass")
    massCon.classList.toggle("almostDark-mode")

    let lengthTitle = document.querySelector("#lengthTitle")
    lengthTitle.classList.toggle("darkTitle")
    let volumeTitle = document.querySelector("#volumeTitle")
    volumeTitle.classList.toggle("darkTitle")
    let massTitle = document.querySelector("#massTitle")
    massTitle.classList.toggle("darkTitle")

    length.classList.toggle("darkWords")
    volume.classList.toggle("darkWords")
    mass.classList.toggle("darkWords")
}

//function to clear input field
function clear(){
    input.value = ""
}