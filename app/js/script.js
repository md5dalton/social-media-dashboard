
const setTheme = theme => {
    
    localStorage.setItem("theme", theme)
            
    document.body.classList.add(theme)

}

const getTheme = () => localStorage.getItem("theme")

const toggleTheme = (st) => {

    const theme = getTheme()
    
    document.body.classList.remove(theme)

    setTheme(st ? "dark" : "light")

}

window.onload = () => {

    const toggleButton = document.querySelector(".toggle input")

    const theme = getTheme()

    const body = document.body

    body.classList.add(theme || "light")

    if (theme == "dark") toggleButton.checked = true
    
    toggleButton.onchange = () => toggleTheme(toggleButton.checked)

}

window.matchMedia("(prefers-color-scheme: dark)").onchange = evt => {

    if (evt.matches) {// dark mode

        setTheme("dark")
        
    } else {// light mode
        
        setTheme("light")

    }

}