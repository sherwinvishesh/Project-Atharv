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
    },
    "select-language": {
        "hi": "भाषा चुनें",
        "kn": "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",
        "bn": "ভাষা নির্বাচন করুন",
        "te": "భాష ఎంచుకోండి",
        "mr": "भाषा निवडा",
        "ta": "மொழியைத் தேர்ந்தெடு",
        "gu": "ભાષા પસંદ કરો",
        "ml": "ഭാഷ തിരഞ്ഞെടുക്കുക",
        "pa": "ਭਾਸ਼ਾ ਚੁਣੋ",
        "or": "ଭାଷା ଚୟନ କରନ୍ତୁ"
    },
    "enter-pin-code": {
        "hi": "पिन कोड दर्ज करें",
        "kn": "ಪಿನ್ ಕೋಡ್ ನಮೂದಿಸಿ",
        "bn": "পিন কোড লিখুন",
        "te": "పిన్ కోడ్ నమోదు చేయండి",
        "mr": "पिन कोड टाका",
        "ta": "பின் கோடை உள்ளிடுங்கள்",
        "gu": "પિન કોડ દાખલ કરો",
        "ml": "പിൻ കോഡ് നൽകുക",
        "pa": "ਪਿਨ ਕੋਡ ਦਰਜ ਕਰੋ",
        "or": "ପିନ୍ କୋଡ୍ ଏଣ୍ଟର କରନ୍ତୁ"
    }
};


        function synchronizedTypeWriter(texts, speed = 100, pause = 2000) {
    let elements = {
        "hello-there": document.getElementById("hello-there"),
        "select-language": document.getElementById("select-language"),
        "enter-pin-code": document.getElementById("enter-pin-code")
    };
    let textKeys = Object.keys(texts["hello-there"]); // Assuming all elements have the same language keys
    let textIndex = 0;
    let charIndices = {"hello-there": 0, "select-language": 0, "enter-pin-code": 0};
    let isOpeningBracketAdded = {"hello-there": false, "select-language": false, "enter-pin-code": false};
    let isClosingBracketAdded = {"hello-there": false, "select-language": false, "enter-pin-code": false};

    function type() {
        let allDone = true;
        for (let key in elements) {
            if (!isOpeningBracketAdded[key]) {
                elements[key].textContent = "(";  // Start with an opening parenthesis for the dynamic part
                isOpeningBracketAdded[key] = true;
            }
            if (charIndices[key] < texts[key][textKeys[textIndex]].length) {
                elements[key].textContent += texts[key][textKeys[textIndex]].charAt(charIndices[key]);
                charIndices[key]++;
                allDone = false;
            } else if (!isClosingBracketAdded[key]) {
                elements[key].textContent += ")";  // Close the parentheses after finishing typing
                isClosingBracketAdded[key] = true;
            }
        }

        if (!allDone) {
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                for (let key in elements) {
                    elements[key].textContent = "";  // Clear the text for the next language
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




        document.addEventListener("DOMContentLoaded", () => {
            typeWriter("hello-there", texts["hello-there"]);
            typeWriter("select-language", texts["select-language"]);
            typeWriter("enter-pin-code", texts["enter-pin-code"]);
        });


		  document.addEventListener('DOMContentLoaded', function() {
    const scroller = document.querySelector('.image-scroll');
    scroller.addEventListener('animationiteration', () => {
        scroller.style.animation = 'none';
        requestAnimationFrame(() => {
            scroller.style.animation = '';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const startForm = document.getElementById('start-form');
    const startButton = document.getElementById('start-button');
    const loadingSpinner = document.getElementById('loading-spinner-start');

    startForm.addEventListener('submit', function(event) {
        startButton.style.display = 'none';
        loadingSpinner.style.display = 'inline-block';
    });
});
