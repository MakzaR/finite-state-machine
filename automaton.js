class User {
    static currency = 100;

    static addOneHundred() {
        User.currency += 100;
    }
}

class Automaton {
    constructor() {
        this.currency = 0;
    }

    handChange() {
        User.currency += this.currency;
        this.currency = 0;
    }

    addFiveRub() {
        if (User.currency >= 5) {
            if (this.currency < 15) {
                User.currency -= 5;
                this.currency += 5;
            }
        }
    }

    addTenRub() {
        if (User.currency >= 10) {
            if (this.currency <= 5) {
                User.currency -= 10;
                this.currency += 10;
            } else if (this.currency === 10) {
                User.currency -= 5;
                this.currency += 5;
            }
        }
    }

    pourDrinkForTen() {
        if (this.currency >= 10) {
            this.currency -= 10;
        }
    }

    pourDrinkForFifteen() {
        if (this.currency >= 15) {
            this.currency -= 15;
        }
    }

    showMessage() {
        if (this.currency >= 15) {
            return "Я не принимаю больше 15 рублей";
        } else if (this.currency < 15) {
            return "Ожадию действия пользователя...";
        }
    }
}

let automaton = new Automaton();

let buttons = {
    addOneHundredButton: document.getElementById('addOneHundred'),
    addFiveRublesButton: document.getElementById('addFiveRubles'),
    addTenRublesButton: document.getElementById('addTenRubles'),
    pourFirstDrinkButton: document.getElementById('pourFirstDrink'),
    pourSecondDrinkButton: document.getElementById('pourSecondDrink'),
    handChangeButton: document.getElementById('handChange')
}

addListeners(buttons);

function addListeners() {
    const userCurrency = document.getElementById("userCurrency");
    const automatonCurrency = document.getElementById("automatonCurrency");
    const automatonStatus = document.getElementById("automatonStatus");

    buttons.addOneHundredButton
        .addEventListener('click', function () {
            User.addOneHundred();
            userCurrency.innerHTML = String(User.currency);
        });

    buttons.addFiveRublesButton
        .addEventListener('click', function () {
            automatonStatus.innerHTML = automaton.showMessage();
            automaton.addFiveRub();
            userCurrency.innerHTML = String(User.currency);
            automatonCurrency.innerHTML = automaton.currency;
        });

    buttons.addTenRublesButton
        .addEventListener('click', function () {
            automatonStatus.innerHTML = automaton.showMessage();
            automaton.addTenRub();
            userCurrency.innerHTML = String(User.currency);
            automatonCurrency.innerHTML = automaton.currency;
        });

    buttons.pourFirstDrinkButton
        .addEventListener('click', function () {
            automaton.pourDrinkForTen();
            userCurrency.innerHTML = String(User.currency);
            automatonCurrency.innerHTML = automaton.currency;
            automatonStatus.innerHTML = automaton.showMessage();
        });

    buttons.pourSecondDrinkButton
        .addEventListener('click', function () {
            automaton.pourDrinkForFifteen();
            userCurrency.innerHTML = String(User.currency);
            automatonCurrency.innerHTML = automaton.currency;
            automatonStatus.innerHTML = automaton.showMessage();
        });

    buttons.handChangeButton
        .addEventListener('click', function () {
            automaton.handChange();
            userCurrency.innerHTML = String(User.currency);
            automatonCurrency.innerHTML = automaton.currency;
            automatonStatus.innerHTML = automaton.showMessage();
        });
}
