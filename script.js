const inputElement = document.getElementById("input");
const submitBtn = document.getElementById("submit-btn")
const outputElement = document.getElementById("output")

const vowels = ["a", "e", "i", "o", "u"]

// take input from user
submitBtn.addEventListener("click", () => {
    const input = inputElement.value
    const vowels = countVowels(input)
    outputElement.textContent = `number of vowels=${vowels}`
})

function countVowels(input) {
    const inputArr = input.split("")

    let numberOfVowels = 0

    for (const letter of inputArr) {
        if (vowels.includes(letter)) {
            numberOfVowels++
        }
    }

    return numberOfVowels
}
