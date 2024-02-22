const INPUT = document.querySelector("input")
const BTN  = document.querySelector("button")
const DIV  = document.querySelector(".new")

let text = ""

INPUT.addEventListener("change", (e) => {
    text = e.target.value
})

const p = document.createElement("p")

BTN.addEventListener("click", () => {
  p.innerHTML = text
  DIV.appendChild(p)
  INPUT.value = ""
})
