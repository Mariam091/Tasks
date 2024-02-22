const BTN_1 = document.querySelector(".btn-1")
const BTN_2 = document.querySelector(".btn-2")
const BTN_3 = document.querySelector(".btn-3")
const BODY = document.querySelector("body")
console.log(BTN_1)

const changeBtn1 = (color) => {
    BODY.style.backgroundColor = `#${color}`;
}

//function changeBtn1_ (color) {
//   BODY.style.backgroundColor = `#${color}`;
//}

BTN_1.addEventListener("click", () => {
    changeBtn1("944E63")
})
BTN_2.addEventListener("click", () => {
    changeBtn1("B47B84")
})
BTN_3.addEventListener("click", () => {
    changeBtn1("CAA6A6")
})
