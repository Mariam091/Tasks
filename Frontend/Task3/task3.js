const BTN = document.querySelector("btc")
let count = 0
console.log(count)

btc.addEventListener("click", function()  {
        count++
        document.querySelector("#result").innerHTML = count
})
