let panjangPassword = document.getElementById("inputPanjangPassword5")
let password = document.getElementById("inputPassword5")
let saveButton = document.getElementById("saveButton")

function generatePassword(len) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const specialChar = "!@#$%^&*()_+-={}:<>?"

    const allChar = lowerAlphabet + upperAlphabet + numbers + specialChar
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += allChar[~~(Math.random() * allChar.length)];
    }
    return generator
}

const getPassword = () => {
    const newPassword = generatePassword(panjangPassword.value)
    password.value = newPassword
    setTimeout(() => {
        alert('Password Has Been Generated')
    }, 100)

}

const savePassword = () => {
    document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf--8,' + encodeURIComponent(`password saya: ${document.title}`))
    saveButton.setAttribute('download', 'MyPassword.txt')
    setTimeout(() => {
        alert('Password Has Been Saved')
    }, 100)
}