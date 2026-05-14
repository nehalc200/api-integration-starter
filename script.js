// STEP 1: Select the button and dog container from the HTML
const dogButton = document.getElementById("dogButton");
const dogContainer = document.getElementById("dogContainer");

// STEP 2: This is the API URL we will use
const dogApiUrl = "https://dog.ceo/api/breeds/image/random";

// STEP 3: Create an async function to get data from the API
async function getRandomDog() {
  // We will write our API code here during the workshop
}

// STEP 4: Run getRandomDog when the button is clicked
dogButton.addEventListener("click", getRandomDog);