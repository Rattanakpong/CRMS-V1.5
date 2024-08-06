document.addEventListener("DOMContentLoaded", function() {
    const selectedLang = document.getElementById("selected-lang");
    const langList = document.getElementById("lang-list");
    const selectedText = document.getElementById("selected-text");
    const selectedFlag = document.getElementById("selected-flag");

    selectedLang.addEventListener("click", function() {
        langList.style.display = langList.style.display === "none" || langList.style.display === "" ? "block" : "none";
    });

    langList.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            const newLang = event.target.textContent;
            const langCode = event.target.getAttribute("data-lang");
            const flagSrc = event.target.getAttribute("data-flag");

            selectedText.textContent = newLang;
            selectedFlag.src = flagSrc;
            langList.style.display = "none";
            translatePage(langCode);
        }
    });

    document.addEventListener("click", function(event) {
        if (!document.querySelector(".lang-menu").contains(event.target)) {
            langList.style.display = "none";
        }
    });

    function translatePage(langCode) {
        const googleTranslateElement = document.createElement('script');
        googleTranslateElement.type = 'text/javascript';
        googleTranslateElement.async = true;
        googleTranslateElement.src = `//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
        document.body.appendChild(googleTranslateElement);

        window.googleTranslateElementInit = function() {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: langCode,
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        };
    }
});
