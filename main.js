const gridButton = document.querySelector(".grid")
const container = document.querySelector(".container")
gridButton.addEventListener('click', () => {
    const input = prompt("What size grid do you need");
    if (typeof input === 'number') {
        console.log("Is a number");
    } else {
        console.log("Is not a number");
    }
})

