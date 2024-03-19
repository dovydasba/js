// Sukurkite programą trikampio plotui rasti.Trikampio kraštinės įvedamos klaviatūra, o programa turi išvesti rezultatą.
// Duomenys įvedami kaip parametrai: a, b ir c.

function calculateTriangleArea(a, b, c) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

const sideA = Number(process.argv[2]);
const sideB = Number(process.argv[3]);
const sideC = Number(process.argv[4]);

const triangleArea = calculateTriangleArea(sideA, sideB, sideC);
console.log(`Trikampio plotas: ${triangleArea}`);