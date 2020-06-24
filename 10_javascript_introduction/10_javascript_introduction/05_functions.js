function sum(x, y) {
    let ergebnis = x + y;
    return ergebnis;
}

sum(10, 2);
console.log("Ergebnis = " + sum(2, 3));
/*
AUFGABE:
1) Funktion anlegen für Subtraktion oder Multiplikation oder Division
2) Aufruf dieser Funktion
*/

function one(x, y) {
    let ergebnis = x - y;
    return ergebnis;
}
console.log("Ergebnis = " + one(10, 3));

function two(x, y) {
    let ergebnis = x / y;
    return ergebnis;

}
console.log("Ergegnis = " + two(10, 2))

function three(x, y) {
    let ergebnis = x * y;
    return ergebnis;
}
console.log("Ergebnis = " + three(2, 5));