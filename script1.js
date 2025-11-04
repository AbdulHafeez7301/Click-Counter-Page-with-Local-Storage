let count= localStorage.getItem('click-count')
count ? parseInt(count) : 0

const display = document.getElementById('count')
const increment = document.getElementById('inc')
const decrement = document.getElementById('dec')
const reset = document.getElementById('res')

//display
display.textContent=count

//increment
increment.addEventListener('click',()=>{
    count++
    display.innerText=count
    localStorage.setItem('click-count',count)

})
//decrement
decrement.addEventListener('click',()=>{
    count--
    display.innerText=count
    localStorage.setItem('click-count',count)
})
//reset
reset.addEventListener('click',()=>{
    count=0
    display.innerText=count
    localStorage.setItem('click-count',count)
})