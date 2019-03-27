function sum(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function generateRandomInt(min, max) {
  const maxRandom = sum(subtract(max, min), 1)
  return Math.floor(
    sum(
      multiply(Math.random(), maxRandom),
      min
    )
  )
}
