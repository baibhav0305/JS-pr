
let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";

for (item of buttons) {

    item.addEventListener("click", (event) => {

        buttonText = event.target.innerText;
        // console.log(buttonText);
        // console.log(buttons);

        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "Back") {
            // console.log("backspace");
            screenValue = screenValue.slice(0, screenValue.length - 1);
            // console.log(screenValue);
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            let answer = eval(screenValue);
            console.log(answer);
            screen.value = answer;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        // console.log(screen.value);
    })
}