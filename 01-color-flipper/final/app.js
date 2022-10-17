
// Initialize colors array 
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Retrive button and span element 
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//Event Listener
btn.addEventListener("click", function () {
  //accesing random number functions below
  const randomNumber = getRandomNumber();

  //Targeting body of DOM using document.body
  //Update body using style.backgroundColor
  // accesing arrays using colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
  // updating content of color DOM 
  color.textContent = colors[randomNumber];
});

// function for to have randomnumber
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
