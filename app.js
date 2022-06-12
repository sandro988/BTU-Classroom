
/* მობილურისთვის და ტაბლეტებისთვის მენიუ */

function menu() {
    const nav = document.getElementById("nav");
    const items = document.getElementById("right-nav");
    if (items.classList.contains("visible")) {
        items.classList.remove("visible");
        nav.classList.remove("column-nav");
    } else {
        items.classList.add("visible");
        nav.classList.add("column-nav");
    }
}

/* თანხის ღილაკზე დაჭერისას რაც უნდა გნხორციელდეს*/

function priceDropdown() {
    let popupCheck = document.getElementById("popup");
    let overlayChcek = document.getElementById("overlay");
    
    if (popupCheck !== null && overlayChcek !== null) {
        document.body.removeChild(popupCheck);
        document.body.removeChild(overlayChcek);
    }

    let overlay = document.createElement("div");
    let popup = document.createElement("div");
    let popupInner = document.createElement("div");
    let cancel = document.createElement("div");
    let message = document.createElement("h3");
    let btn = document.createElement("button");

    popup.id = "popup";
    overlay.id = "overlay";

    btn.className = "popup-button1";
    message.className = "popup-message";
    popup.className = "popup";
    popupInner.className = "popupInner";
    cancel.className = "cancel";
    overlay.className = "overlay";

    cancel.innerHTML = "X";
    btn.innerHTML = "გადახდის გრაფიკი";
    message.innerHTML = "ფინანსური ინფორმაცია";

    cancel.onclick = function (e) {
        popup.parentNode.removeChild(popup);
        overlay.parentNode.removeChild(overlay);
    };

    popupInner.appendChild(message);
    popupInner.appendChild(cancel);
    popup.appendChild(popupInner);
    popup.appendChild(btn);
    document.body.appendChild(popup);
    document.body.appendChild(overlay);
}

/* რეგისტრაციასთან დაკავშირებული ინფორმაციის შემოწმება 
    checkEmail ამოწმებს მეილის სისწორეს
    checkPasswordsMatch ამოწმებს პაროლის სიძლიერეს
*/

function checkEmail(email) {

    /* 
    ეს ფუნქცია იღებს ჩემს მიერ შემოყვანილ იმეილს
    და ამოწმებს შეიცავს თუ არა იგი ძაღლუკას, ძაღლუკას 
    შემეგ წერტილს და წერტილს შემდეგ ორ სიმბოლოზე მეტს
    */


    let containsAtSign = false; // იგულისხმება ძაღლუკა @
    let containsDot = false; // იგულისხმება წერტილი .
    let moreThanTwoSymbolsAfterDot = false

    for (let i = 0; i < email.length; i++) {
        
        if (email[i] === '@') {
            containsAtSign = true; 

            if (email.substring(i, email.length).includes('.')) {
                containsDot = true;
                
                if ((email.slice(i+2, email.length)).length >= 2) {
                    moreThanTwoSymbolsAfterDot = true
                } else moreThanTwoSymbolsAfterDot = false

            } 

        } 
    }

    if (containsAtSign !== true || containsDot !== true || moreThanTwoSymbolsAfterDot !== true) return 'invalid email'
    else return 'valid email'
}

function checkPasswordsMatch(password1, password2) {

    let specialSymbols = '#$%&!*^'
    let lowerCaseLetters = false;
    let UpperCaseLetters = false;
    let Numbers = false;
    let OtherSymbols = false;
    let verdict = '';

    if (password1 === password2 && password1.length >= 8) {

        for (let i = 0; i < password1.length; i++) {
            if (password1[i].charCodeAt(0) >= 65 && password1[i].charCodeAt(0) <= 90) UpperCaseLetters = true;
            else if (password1[i].charCodeAt(0) >= 97 && password1[i].charCodeAt(0) <= 122) lowerCaseLetters = true;
            else if (password1[i].charCodeAt(0) >= 48 && password1[i].charCodeAt(0) <= 57) Numbers = true;
            else if (specialSymbols.includes(password1[i])) OtherSymbols = true;
        }

        
        // შეიცავს მხოლოდ ინგლისურ სიმბოლოებს
        if ((lowerCaseLetters === true || UpperCaseLetters === true) && Numbers === false && OtherSymbols === false) verdict = 'Weak Password';
        else if (lowerCaseLetters === true && UpperCaseLetters === false && Numbers === true && OtherSymbols === false) verdict = 'Medium Password';
        else if (lowerCaseLetters === false && UpperCaseLetters === true && Numbers === true && OtherSymbols === false) verdict = 'Medium Password';
        else if (lowerCaseLetters === true && UpperCaseLetters === true && Numbers === true && OtherSymbols === false) verdict = 'Strong Password';
        else if (lowerCaseLetters === true && UpperCaseLetters === true && Numbers === true && OtherSymbols === true) verdict = 'Very Strong Password';
        else return 'Unidentified';

    } else if (password1 === password2 && password1.length < 8) {
        verdict = 'Password should be at least 8 symbols';
    } else if (password1 !== password2) {
        verdict = "Passwords dont't match, try again";
    }


    return verdict
}

/* ფოფაფ ფანჯარა რომელიც რეგისტრაციის დორს გამოჩნდება */

function raisePopup(errorText) {
    let popupCheck = document.getElementById("popup");
    let overlayChcek = document.getElementById("overlay");
    
    if (popupCheck !== null && overlayChcek !== null) {
        document.body.removeChild(popupCheck);
        document.body.removeChild(overlayChcek);
    }

    let overlay = document.createElement("div");
    let popup = document.createElement("div");
    let popupInner = document.createElement("div");
    let message = document.createElement("h4");
    let btn = document.createElement("button");

    popup.id = "popup";
    overlay.id = "overlay";

    btn.className = "popup-button1";
    message.className = "popup-message-register";
    popup.className = "popup";
    popup.classList.add("popup-register")
    popupInner.className = "popupInner";
    overlay.className = "overlay";

    btn.innerHTML = "უკან დაბრუნება";
    message.innerHTML = errorText;

    btn.onclick = function (e) {
        popup.parentNode.removeChild(popup);
        overlay.parentNode.removeChild(overlay);
    };

    popupInner.appendChild(message);
    popup.appendChild(popupInner);
    popup.appendChild(btn);
    document.body.appendChild(popup);
    document.body.appendChild(overlay);

}

function checkAuth() {
    let email = document.getElementById('email-register');
    let password1 = document.getElementById('password1');
    let password2 = document.getElementById('password2');
    console.log(email.value)
    if (checkEmail(email.value) === 'invalid email') {
        return raisePopup("მეილი არასწორია, ის უნდა შეიცავდეს @-ს, @-ს შემდეგ წერტილს და წერტილის შემდეგ მინიმუმ ორ სიმბოლოს.");
    }

    if (checkPasswordsMatch(password1.value, password2.value) === 'Weak Password') return raisePopup('ეს პაროლი ძალიან მარტივია, ჯობია თუ სხვა პაროლს აირჩევ.');
    else if (checkPasswordsMatch(password1.value, password2.value) === 'Medium Password') return raisePopup('ეს პაროლი საშუალოა, ჯობია თუ სხვა სიმბოლოებსაც შეურევ.');
    else if (checkPasswordsMatch(password1.value, password2.value) === 'Strong Password') return raisePopup('ეს პაროლი ძლიერია, მაგრამ ჯობია თუ სხვა ასეთ სიმბოლოებსაც შეურევ: %!#$%^*&.');
    else if (checkPasswordsMatch(password1.value, password2.value) === 'Very Strong Password') raisePopup('ძალიან კარგი პაროლია.');
    else if (checkPasswordsMatch(password1.value, password2.value) === 'Unidentified') raisePopup('ამის შესაბამისი პირობა არ იყო მოცემული ფინალურის ინსტრუქციაში.');
    else if (checkPasswordsMatch(password1.value, password2.value) === 'Password should be at least 8 symbols') raisePopup('პაროლი უნდა შედგებოდეს რვა ან მეტი სიმბოლოსგან');
    else if (checkPasswordsMatch(password1.value, password2.value) === "Passwords dont't match, try again") raisePopup('პაროლები არ ემთხვევა ერთმანეთს, ცადეთ თავიდან');

}

/* თარიღად უთითებს ამჟამინდელ თარიღს, რეგისტრაციის ფორმაშI */

function setDefaultDate(){
    let myDate = document.getElementById('date');
    let today = new Date();
    myDate.value = today.toISOString().slice(0, 10);
}

setDefaultDate()