<div class="wrapper">
    <h1>stop watch</h1>
    <p><span id="seconds">00</span>:<span id="seconds">00</span></p>
    <button id="button-start">start</button>
    <button id="button-stop">stop</button>
    <button id="button-reset">reset</button>
</div>
window.onload = function () {
    var seconds = 00;
    var milliseconds = 00;
    var appendmilliseconds = document.getElementById("milliseconds");
    var appendseconds = document.getElementById("seconds");
    var buttonstart = document.getElementById("button-start");
    var buttonstop = document.getElementById("button-stop");
    var buttonreset = document.getElementById("button-reset");
    var interval = document.getElementById("interval");
    buttonstart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(starttimer, 10);
    }
    buttonstop.onclick = function () {
        clearInterval(Interval);
    }
    buttonreset.onclick = function () {
        clearInterval(Interval);
        milliseconds = "00",
            seconds = "00",
            appendmilliseconds.innerHTML = milliseconds
        appendseconds.innerHTML = seconds
    }
}