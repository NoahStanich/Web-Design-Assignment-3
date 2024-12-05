// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

let submit = document.getElementById("submit-button");

function thankYou() {
    let message = document.body.innerHTML = "<p>Thank you for your message</p>";
    message.style.fontSize = "24px";
}

document.addEventListener("click", thankYou);

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
