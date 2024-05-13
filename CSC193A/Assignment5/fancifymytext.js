document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("biggerBtn").onclick = makeBigger;
    document.getElementById("fancyShmancy").onchange = applyStyles;
    document.getElementById("boringBetty").onchange = applyStyles;
    document.getElementById("mooBtn").onclick = mooFunction;
});

function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyles() {
    var textInput = document.getElementById("textInput");
    if (document.getElementById("fancyShmancy").checked) {
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textInput.style.fontWeight = "normal";
        textInput.style.color = "black";
        textInput.style.textDecoration = "none";
    }
}

function mooFunction() {
    var textInput = document.getElementById("textInput");
    var sentences = textInput.value.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim() + "-Moo";
        }
    }
    textInput.value = sentences.join(". ").trim();
}
