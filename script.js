// // Load previous count from local storage or set to 0
// let count = localStorage.getItem('clickcount');
// clickcount ? count : 0;

let count = parseInt(localStorage.getItem('clickcount')) || 0;

const display= document.getElementById('count')
const incrementBtn = document.getElementById('inc')
const decrementBtn = document.getElementById('dec')
const resetBtn = document.getElementById('res')

//show the count when page loads
display.textContent=count

// increment
incrementBtn.addEventListener('click',()=>{
    count++
    display.innerText=count
    localStorage.setItem('clickcount',count)
})

//Decrement
decrementBtn.addEventListener('click',()=>{
    count--
    display.innerText=count
    localStorage.setItem('clickcount',count)
})
//reset
resetBtn.addEventListener('click',()=>{
    count=0
    display.innerText=count
    localStorage.setItem('clickcount',count)
})

