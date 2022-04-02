const fetchAdvice = async () => {
    const res = await fetch("https://allugofrases.herokuapp.com/frases/random")
    const data = await res.json()

    document.querySelector(".number").innerHTML = `ADVICE #${data.autor}`
    document.querySelector(".advice").innerHTML = `"${data.frase}"`
}

fetchAdvice()
