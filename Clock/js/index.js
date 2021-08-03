
let toggleClass = document.querySelector('.toggleClass');

toggleClass.addEventListener("click", togglClass);

function togglClass() {
    console.log("clicked");
    const body = document.querySelector('body');
    body.classList.toggle('light');
}

const deg = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log(day[0]);

setInterval(() => {

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    let hh1 = day.getHours();
    let mm1 = day.getMinutes();
    let ss1 = day.getSeconds();

    let tnum = day.getDay();
    let tday = day.getDate();
    let tmonth = day.getMonth();
    let tyear = day.getFullYear();

    if(hh1 > 11){
        document.getElementById("period").innerHTML = "PM";
    }

    // console.log(tnum);
    document.getElementById("day").innerHTML = days[tnum] + ",";
    document.getElementById("month").innerHTML = months[tmonth];
    document.getElementById("num").innerHTML = tday + ",";
    document.getElementById("year").innerHTML = tyear;

    document.getElementById("hours").innerHTML = hh1 + " :";
    document.getElementById("mins").innerHTML = mm1 + " :";
    document.getElementById("secs").innerHTML = ss1;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

});
