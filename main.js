const userInput = document.querySelector("#userInput");
var submit = document.querySelector("#submit");
const botChat = document.querySelector("#botChat");
const user = document.querySelector("#user");

const greetingList = ["Hello", "Hi", "Hey there"];
const greeting = Math.floor(Math.random() * greetingList.length); // array for hellos

alert("Dear user, please refrain from using capital letters. To answer a question use yes or no. Scroll up and down the page to change background. Thank you") // instructions for use

submit.addEventListener("click", response); // submit button


window.onload = function question () {
    botChat.textContent = "What is your name?" // means that this question is the first question to show when the page is opened
}

userInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("submit").click();
    }
  }); // enter keycode, sourced from MDN

function response() {
        while(botChat.textContent == "What is your name?") {
            botChat.innerHTML = greetingList[greeting] + " " + userInput.value;
            user.innerHTML = userInput.value;
            setTimeout(() => {botChat.innerHTML = "Are you feeling stressed about NCEA?" }, 2000);;
            userInput.value = null; // says hello to the user and asks the 2nd question
        } 
        
        while(botChat.textContent == "Are you feeling stressed about NCEA?") {
            if (userInput.value == "yes") {
                botChat.innerHTML = "Its okay you, got this." // response if the user says yes
            }
            else if (userInput.value == "no") {
                botChat.textContent = "Thats wonderful"; // if the user says no
            }
            else {
                botChat.textContent = "Please type yes or no.";
                setTimeout(() => {botChat.innerHTML = "Are you feeling stressed about NCEA?" }, 2000);; // if the user enters a unknown response
            }
            setTimeout(() => {botChat.innerHTML = "Have you considered hwo much time each task will take?" }, 2000);; // next question
            userInput.value = null;} // cleans the user input

        while(botChat.textContent == "Do you have UE - 14 credits in 3, level 3 subjects?") {
        if (userInput.value == "yes") {
        botChat.innerHTML = "Thats great.";
        userInput.value = null;}
    
        else if (userInput.value == "no") {
        botChat.textContent = "A to do list is the best for time management :)";
        userInput.value = null;}
      
        else {
        botChat.textContent = "Please type yes or no.";
                setTimeout(() => {botChat.innerHTML = "Have you considered hwo much time each task will take?" }, 2000);;

        userInput.value = null;}
        
        setTimeout(() => {botChat.innerHTML = "Are you balancing more work than required?" }, 2000);; // next question
        userInput.value = null;} // cleans the user input
        
        while(botChat.textContent == "Are you balancing more work than required?") {
            if (userInput.value == "yes") {
                botChat.innerHTML = "Sweet as, Good luck " + user.innerHTML + ". Im rooting for you :)";
                userInput.value = null;}
            
                else if (userInput.value == "no") {
                botChat.textContent = "I think its best to talk to your teachers to reduce your workload to a managable amount!";
                userInput.value = null;}
                else {
                    botChat.textContent = "Please type yes or no.";
                            setTimeout(() => {botChat.innerHTML = "Are you balancing more work than required?" }, 2000);;
            
                    userInput.value = null;}}}