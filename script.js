const texts = {
    "hello-there": {
        "hi": "नमस्ते",
        "kn": "ನಮಸ್ಕಾರ",
        "bn": "নমস্কার",
        "te": "హలో",
        "mr": "नमस्कार",
        "ta": "வணக்கம்",
        "gu": "નમસ્તે", 
        "ml": "ഹലോ",
        "pa": "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
        "or": "ନମସ୍କାର"
    }
};

function synchronizedTypeWriter(texts, speed = 100, pause = 2000) {
    let elements = {
        "hello-there": document.getElementById("hello-there")
    };
    let textKeys = Object.keys(texts["hello-there"]);
    let textIndex = 0;
    let charIndices = {"hello-there": 0};
    let isOpeningBracketAdded = {"hello-there": false};
    let isClosingBracketAdded = {"hello-there": false};

    function type() {
        let allDone = true;
        for (let key in elements) {
            if (!isOpeningBracketAdded[key]) {
                elements[key].textContent = "(";
                isOpeningBracketAdded[key] = true;
            }
            if (charIndices[key] < texts[key][textKeys[textIndex]].length) {
                elements[key].textContent += texts[key][textKeys[textIndex]].charAt(charIndices[key]);
                charIndices[key]++;
                allDone = false;
            } else if (!isClosingBracketAdded[key]) {
                elements[key].textContent += ")";
                isClosingBracketAdded[key] = true;
            }
        }

        if (!allDone) {
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                for (let key in elements) {
                    elements[key].textContent = "";
                    charIndices[key] = 0;
                    isOpeningBracketAdded[key] = false;
                    isClosingBracketAdded[key] = false;
                }
                textIndex = (textIndex + 1) % textKeys.length;
                type();
            }, pause);
        }
    }

    type();
}

document.addEventListener("DOMContentLoaded", () => {
    synchronizedTypeWriter(texts, 100, 2000);
});
