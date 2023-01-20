function getScore(conceito) {
  let NOTAA = conceito >= 89
  let NOTAB = conceito >= 80 && conceito <= 89
  let NOTAC = conceito >= 70 && conceito <= 79
  let NOTAD = conceito >= 60 && conceito <= 69
  let NOTAF = conceito < 60

  if (NOTAA) {
    conceito = `A`
  } else if (NOTAB) {
    conceito = `B`
  } else if (NOTAC) {
    conceito = `C`
  } else if (NOTAD) {
    conceito = `D`
  } else if (NOTAF) {
    conceito = `F`
  } else {
    conceito = `Nota inválida`
  }
  return conceito
}

console.log(getScore(-1))
console.log(getScore(60))
console.log(getScore(75))
console.log(getScore(89))
console.log(getScore(100))
console.log(getScore(101))
