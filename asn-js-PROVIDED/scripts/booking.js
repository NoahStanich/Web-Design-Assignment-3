/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let cost = document.getElementById("calculated-cost");
let dayCounter;
let dailyRate = 35;
let mondayButton = document.getElementById("monday");
let tuesdayButton = document.getElementById("tuesday");
let wednesdayButton = document.getElementById("wednesday");
let thursdayButton = document.getElementById("thursday");
let fridayButton = document.getElementById("friday");
let halfDay = document.getElementById("half-day");
let fullDay = document.getElementById("full-day");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

document.addEventListener("click", function clicked() {
    dayCounter = dayCounter + 1;
    mondayButton.classList.add("clicked");
    calculate();
});

document.addEventListener("click", function clicked() {
    dayCounter = dayCounter + 1;
    tuesdayButton.classList.add("clicked");
    calculate();
});

document.addEventListener("click", function clicked() {
    dayCounter = dayCounter + 1;
    wednesdayButton.classList.add("clicked");
    calculate();
});

document.addEventListener("click", function clicked() {
    dayCounter = dayCounter + 1;
    thursdayButton.classList.add("clicked");
    calculate();
});

document.addEventListener("click", function clicked() {
    dayCounter = dayCounter + 1;
    fridayButton.classList.add("clicked");
    calculate();
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearDays = document.getElementById("clear-button");

if (clearDays == true) {
    document.addEventListener("click", function cleared() {
        mondayButton.classList.remove("clicked");
    });
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function changeRate() {
    if (dailyRate == 35) {
        dailyRate = 20;
        halfDay.classList.add("clicked");
        fullDay.classList.remove("clicked");
    } else if (dailyRate == 20) {
        dailyRate = 35;
        fullDay.classList.add("clicked");
        halfDay.classList.add("clicked");
    }
}

document.addEventListener("click", changeRate);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    cost = dayCounter * dailyRate;
    cost.innerHTML = cost;
}