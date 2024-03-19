// Elektroninis laikrodis rodo laiką: valandas, minutes ir sekindes(įvedami skaičiai h, m, s).
// Kiek laiko laikrodis rodys po sekundės ? (Išveskite h, m, ir s). Visi skaičiai įvedami kkaip parametrai(h, m, s).

let h = Number(process.argv[2]);
let m = Number(process.argv[3]);
let s = Number(process.argv[4]);
s++
if (s === 60) {
    m++
    s = 0;
}
if (m === 60) {
    h++
    m = 0;
}
if (h == 24) {
    h = 0
}
console.log(`po sekundes: ${h}h:${m}min:${s}s`);