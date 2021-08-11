function notation(input) {
    convert_input = Number(input)
    console.log("Convert input to number : ", convert_input)
    new_number = Math.round(convert_input)
    console.log("Round input : ", new_number)
    if (new_number % 2 == 0) {
        return "Angka nomer 2 Genap"
    } else {
        return "Angka nomer 2 Ganjil"
    }
}

module.exports = {
    notation
}