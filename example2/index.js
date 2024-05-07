
let texto = "Un chat capaz de escribir ciencia ficción en versos sheckspirianos 🦾​🫂​🦾​🤖​👾​👽​👻​🤡​🤠​🥴"
const parrafo = document.getElementById("textCreated")
const pinguino = "🐧​"

for (let i = 0; i < texto.length; i++) {
    setTimeout(() => {
        parrafo.innerHTML += texto[i]
    }, 60 * i)
  
}