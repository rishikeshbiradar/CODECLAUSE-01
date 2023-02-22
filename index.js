let captcha;

// Function For Creating The Captcha
function createCaptcha()
{
    let randomCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    captcha = "";
    // Creating Captcha Of 5 Characters
    for (let i = 0; i < 5; i++)
    {
        captcha = captcha + randomCharacter.charAt(Math.random() * randomCharacter.length);
    }
    var showCaptcha = document.getElementById("showCaptcha");
    showCaptcha.innerHTML = captcha;
}

// Calling The CreateCaptcha Funtion
createCaptcha();

// Funtion For Checking The Entered Captcha And Given Captcha is Correct or Not
function check()
{
    const userInput = document.getElementById("printCaptcha").value
    if (userInput == captcha)
    {
        document.getElementById("checkbox").checked=true
    }
    else
    {
        alert("InCorrect Captcha. Please Write Correct Captcha")
        document.getElementById("printCaptcha").value = "";
        document.getElementById("checkbox").checked=false
        createCaptcha();
    }
}

function formSubmit()
{
    const userInput = document.getElementById("printCaptcha").value
    if (userInput == captcha)
    {
        alert("The Contact Form Submitted Successfully.")
    }
    else
    {
        alert("Please Fill The Complete Details Present In The Form")
        document.getElementById("printCaptcha").value = "";
        createCaptcha();
    }
}