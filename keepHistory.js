
var waitForLastBurst = null;
var repeatAfterLastBurstAddedToHistory = null;
var burstsHistory = [];
var timeHistoryOfBursts = [];
var lastBurst = "-";

window.onload = function () {
    console.log("window loaded");
    waitForLastBurst = setInterval(myTimer, 1000);
}

function myTimer() {
    try {
        lastBurst = document.getElementsByClassName("crash-row")[0].children[0].innerHTML;
        console.log(lastBurst);
        if (lastBurst != "-") {
            console.log("Now Added: ", lastBurst);
            SetVariablesAndMakeDecitions(lastBurst);
            clearInterval(waitForLastBurst);
        }
    }
    catch (error) {
        console.log("Error: ", error);
    }
    // finally {
    //     clearInterval(waitForLastBurst);
    // }
}

function SetVariablesAndMakeDecitions(lastBurst) {
    burstsHistory.push(lastBurst);
    document.getElementsByClassName("game-amount")[0].value = 50;
    document.getElementsByClassName("cashout-amount")[0].value =3.00;
    
}

