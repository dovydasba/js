// Skaičius, sudarytas iš trijų skaitmenų, vadinamas Armstrongo skaičiumi, 
// jei jo skaitmenų, pakeltų 3 - uoju laipsniu, suma lygi pačiam skaičiui.
// Raskite visus Amstrongo skaičius esančius intervale nuo 100 iki 999. 

for (let i = 100; i <= 999; i++) {
    let sum = 0;
    let temp = i;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** 3;
        temp = parseInt(temp / 10);
    }
    if (sum === i) {
        console.log(i);
    }
}