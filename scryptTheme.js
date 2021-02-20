const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => {
    window.getComputedStyle(element).getPropertyValue(style)
}

const lightColors = {
    white: getStyle(html, "--white"),
    bg: getStyle(html, "--bg-color"),
    darkBlue: getStyle(html, "--dark-blue"),
    lightBlue: getStyle(html, "--light-blue"),
    green: getStyle(html, "--green"),
    lightGreen: getStyle(html, "--light-green"),
    red: getStyle(html, "--red"),
    redDark: getStyle(html, "--red-dark"),
}

const dark = {
    white: ,
    bg: ,
    darkBlue: ,
    lightBlue: ,
    green: ,
    lightGreen: ,
    red: ,
    redDark: ,
}

const changeColors = (colors) => {

}

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors() : changeColors()
})