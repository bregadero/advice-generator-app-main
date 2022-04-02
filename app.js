const fetchAdvice = async () => {
    const res = await fetch("https://allugofrases.herokuapp.com/frases/random")
    const data = await res.json()

    document.querySelector(".number").innerHTML = `ADVICE #${data.slip.id}`
    document.querySelector(".advice").innerHTML = `"${data.slip.advice}"`
}

fetchAdvice()
