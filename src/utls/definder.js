const defineGrade = (number) => {

    switch (true) {
        case number >= 1 && number <= 3:
            return "bad";
        case number >= 4 && number <= 6:
            return "normal";
        case number >= 7 && number <= 9:
            return "good";
        case number == 10:
            return "excellent";
        default: 
            return "bad";
    }
} 

export { defineGrade } 