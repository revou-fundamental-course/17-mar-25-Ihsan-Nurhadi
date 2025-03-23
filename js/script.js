function toggleButton() {
    const side = document.getElementById('side').value;
    const button = document.getElementById('calculateButton');
    button.disabled = !side; // Enable button if side is not empty
}
function toggleCircumferenceButton() {
    const side = document.getElementById('sideCircumference').value;
    const button = document.getElementById('calculateCircumferenceButton');
    button.disabled = !side; // Enable button if side is not empty
}
function calculateArea() {
    const side = document.getElementById('side').value;
    const area = side * side;
    document.getElementById('result').innerText = 
    `Luas = S X S\n` +
    `Luas = ${side} X ${side}\n` +
    `Luas = ${area} satuan²`;
}

function calculateCircumference() {
    const side = document.getElementById('sideCircumference').value;
    const circumference = side * 4; // Menghitung keliling
    document.getElementById('resultCircumference').innerText = 
    `Keliling = 4 X S\n` +
    `Keliling = 4 X ${side}\n` +
    `Keliling = ${circumference} satuan`;
}
function triggerbutton() {
    const panjang = document.getElementById('panjang').value;
    const lebar = document.getElementById('lebar').value;
    const button = document.getElementById('hitungluas');
    // Enable button if both panjang and lebar are not empty
    button.disabled = !(panjang && lebar);
}
function triggerbutton2() {
    const panjang = document.getElementById('panjang2').value;
    const lebar = document.getElementById('lebar2').value;
    const button = document.getElementById('hitungkeliling');
    // Enable button if both panjang and lebar are not empty
    button.disabled = !(panjang && lebar);
}
function menghitungluas() {
    const panjang = document.getElementById('panjang').value;
    const lebar = document.getElementById('lebar').value;
    const luas = panjang * lebar; // Menghitung luas persegi panjang
    document.getElementById('hasilluas').innerText = 
    `Luas = P X L\n` +
    `Luas = ${panjang} X ${lebar}\n` +
    `Luas = ${luas} satuan²`;
}
function menghitungkeliling() {
    const panjang = document.getElementById('panjang2').value;
    const lebar = document.getElementById('lebar2').value;
    const keliling = 2 * panjang + 2 * lebar;
    document.getElementById('hasilkeliling').innerText = 
    `Keliling = 2 X (P + l)\n` +
    `Keliling = 2 X (${panjang}+${lebar})\n` +
    `Keliling = ${keliling} satuan`;
}