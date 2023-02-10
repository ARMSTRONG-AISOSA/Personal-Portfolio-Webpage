










function typeWriterEffect() {

    // Declare variables

    const words = ["Web Developer", "Business Developer", "Consultant"]

    // Both variables below act as counters for the index of the "words" array and the index of the word we are currently on.
    // NB: Let/Var is used so we can change the variables latter.

    let wordCount = 0;
    let letterCount = 0;


    // "currentText" holds the current text beingdisplayed on the screen on the screen and "currentWord" holds the current word  getting built-up or deleted.  
    let currentText = "";
    let currentWord = "";


    // Sources the amount of time we want for the timeOut
    let timeOut = 400;

    // A boolean that indicate if we are currently writing or deleting the word
    let isDeleting = false;

    // actual type effect

    function type() {

        // NB: If our wordCount is equal to our Words.Length array that means we have reached the end of the array and have to begin with the first element again. The If statement checks for this condition and resets the WordCount back to zero.

        if (wordCount === words.length) {
            wordCount = 0;
        }

        // Next we are building the word or deleting it
        currentWord = words[wordCount];


        // If we are deleting word the statement use a decrement of 1 to delete words and if we are building words the (so that the isDeleting if false) statement builds words with an increment of 1.
        if (isDeleting) {
            currentText = currentWord.slice(0, --letterCount);
        } else {
            currentText = currentWord.slice(0, ++letterCount)
        }

        // This updates the text content of the actual document element.
        document.querySelector('.typewrite').textContent = currentText;

        // Ternary operator; shorthand if statement
        // '?' ---> if
        // ':' ---> else
        // The ternary determines the speend of the effect depending if we are writing or deleting
        timeOut = isDeleting ? 110 : 160;

        // Alternate(Longhand)
        // if (isDeleting) {
        //     timeOut = 110;
        // } else {
        //     timeOut = 160;
        // }



        // This if statement check is the word is fully displayed and changes the timeOut to 2sec to have it displayed for 2 sec before deleting starts and isDeleting becomes true so deleting starts

        // Else checks if the currentText has a length of zero, that means we just finished deleting the word and the timeout changes to 1 sec before isDeleting changes to false to start writing the next word and increament the word count by 1
        if (!isDeleting && currentText.length === currentWord.length) {
            timeOut = 2000;
            isDeleting = true;
        } else if (isDeleting && currentText.length === 0) {
            timeOut = 1000;
            isDeleting = false;
            wordCount++;
        }
        setTimeout(type, timeOut)
    }
    // The type function being called
    type();
}
// The typeWriterEffect function being called
typeWriterEffect();




// ======== Dark/Light Theme

const icon_id = document.querySelector('#icon');

icon_id.onclick = function () {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        icon_id.src = "Assets/moon.png";
    } else {
        icon_id.src = "Assets/sun.png"
    }
}

// JavaScript classList is a DOM property of JavaScript that allows for styling the CSS classes of an element. The classList property returns the CSS classnames of an element.




// ======== OnClick Tabs/CVs

// Runs throught all the ".tab-links" as an array
const tablinks = document.querySelectorAll(".tab-links");

// Runs throught all the ".tab-links" as an array
const tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        // This removes the active-link
        tablink.classList.remove("active-link")
        console.log('works');
    }
    for (tabcontent of tabcontents) {
        // This removes the active-tab
        tabcontent.classList.remove("active-tab")
        console.log('works 2');
    }
    // This add the active-link to the click element
    event.currentTarget.classList.add("active-link");
    console.log('works 3');

    // This add the active-link to the click element
    // When clicked the "skills/experience/education" would be sent to replace the argueent "tabname" in the function.
    document.getElementById(tabname).classList.add("active-tab");
    console.log('works 4');
}




// ======== OnClick Menu icons

const sidemeu = document.querySelector("#sidemenu");

function openmenu() {
    sidemeu.style.right = "-45px";
}

function closemenu() {
    sidemeu.style.right = "-245px";
}





//Form Submit


const scriptURL = 'https://script.google.com/macros/s/AKfycbxJfJ88PG1IOVeK44uwUqt3se7fbE1RRV2qTfX2RfV389Nw_DeSmMzmcIsB6MQzXug/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector('#msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        // .then(response => console.log('Success!', response))
        .then(response => {
            msg.innerHTML = "Message Sent successfully"
            setTimeout(function() {
                msg.innerHTML = ""
            }, 5000)
        form.reset()        })
        .catch(error => console.error('Error!', error.message))
})








