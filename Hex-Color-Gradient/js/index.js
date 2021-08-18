
document.getElementById("submit").addEventListener("click", () => {

    var hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var hex1 = "";
    var hex2 = "";
    var hex3 = "";
    var hex4 = "";
    var random_index = 0;

    for (let i = 0; i < 6; i++) {
        random_index = Math.floor(Math.random() * 16);
        hex1 += hex_numbers[random_index];
        random_index = Math.floor(Math.random() * 16);
        hex2 += hex_numbers[random_index];
    }

    for (let i = 0; i < 6; i++) {
        random_index = Math.floor(Math.random() * 16);
        hex3 += hex_numbers[random_index];
        random_index = Math.floor(Math.random() * 16);
        hex4 += hex_numbers[random_index];
    }

    document.body.style.background = `linear-gradient(to right, #${hex1}, #${hex2})`;
    document.querySelector("button").style.background = `linear-gradient(to right, #${hex3}, #${hex4})`;

    document.getElementById("hex1").textContent = hex1;
    document.getElementById("hex2").textContent = hex2;

});