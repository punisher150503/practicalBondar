let language;
do {
    language = prompt("Виберіть мову: \"ua\" або \"en\"").toLowerCase();
    if (language !== "ua" && language !== "en") {
        alert("Неправильне значення. Спробуйте ще раз.");
    }
} while (language !== "ua" && language !== "en");
let dayNumber;
do {
    dayNumber = prompt(language === "ua" ? "Введіть номер дня неділі від 1 до 7?" : "Enter the day number of the week (from 1 to 7)?");
    if (dayNumber < 1 || dayNumber > 7 || isNaN(dayNumber)) {
        alert("Неправильне значення. Спробуйте ще раз.");
    }
} while (dayNumber < 1 || dayNumber > 7 || isNaN(dayNumber));

const daysOfWeek = {
    "ua": [
        "Понеділок",
        "Вівторок",
        "Середа",
        "Четвер",
        "П'ятниця",
        "Субота",
        "Неділя"
    ],
    "en": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]
};

const dayOfWeek = daysOfWeek[language][dayNumber - 1];
alert(dayOfWeek);
