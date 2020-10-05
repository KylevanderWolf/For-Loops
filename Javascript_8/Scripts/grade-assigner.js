function assignGrade() {
    for (score = 60; score <= 100; score++) {
        if (score > 90) {
            console.log("voor " + score + " punten, krijg je een A")
        } else if (score > 80) {
            console.log("voor " + score + " punten, krijg je een B")
        } else if (score > 70) {
            console.log("voor " + score + " punten, krijg je een C")
        } else if (score > 65) {
            console.log("voor " + score + " punten, krijg je een D")
        } else {
            console.log("voor " + score + " punten, krijg je een F")
        }
    }
}

console.log(assignGrade())