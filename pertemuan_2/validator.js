function validation(input) {
    if (typeof input == "string") {
        console.log("tipe data string")
        return true
    } else if (typeof input == "number") {
        console.log("tipe data number")
        return true
    } else if (typeof input == "boolean") {
        console.log("tipe data boolean")
        return true
    } else {
        return false
    }
}

module.exports = {
    validation
}