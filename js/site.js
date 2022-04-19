//Step ONE - controller accept requests
function getMessage() {

    let msg = document.getElementById("txtMessage").value;

    //check if the uesr entered a string
    if (msg == "") {
        Swal.fire("Oops!","Please enter text.");
    } else {

        msg = msg.toUpperCase();

        const regex = /[^a-z0-9]/gi;
        msg = msg.replace(regex, "");

        let palinObj = reverseMessageB(msg);
        displayMessage(palinObj);
    }

}

function reverseMessageA(msg) {
    let revMessage = "";

    //decrimenting loop
    for (let i = msg.length - 1; i >= 0; i--) {

        let char = msg[i];
        revMessage += char;

    }

    return revMessage;
}

function reverseMessageB(originalWord) {

    let revWord = "";

<<<<<<< HEAD


    return revMessage;
=======
    let returnObj = {};
>>>>>>> 75bf962b4db5a2c78b97116f173528b997f148c6

    revWord = originalWord.split("").reverse().join("");

    if (revWord == originalWord) {
        returnObj.message = `The word/phrase is a palindrome!`;
        returnObj.IsPalindrome = true;
    } else {
        returnObj.message = `The word/phrase is not a palindrome :(`;
        returnObj.IsPalindrome = false;
    }

    returnObj.originalWord = originalWord;
    returnObj.reversedWord = revWord;

    // IsPalindrome
    // originalWord
    // the reversed word
    // the message

    return returnObj;
}

//Final Step - view
<<<<<<< HEAD
function displayMessage(message) {

    //first get the ol element from the page
    element = document.getElementById("results");
    element.innerHTML = message;



=======
function displayMessage(palinObj) {

    //first get the ol element from the page
    element = document.getElementById("results");
    element.innerHTML = `${palinObj.message} - ${palinObj.originalWord}`;
>>>>>>> 75bf962b4db5a2c78b97116f173528b997f148c6
}