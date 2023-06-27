const score = document.querySelectorAll('.score')
const totalScore = document.querySelectorAll('.total-score')
const rollBtn = document.querySelector('.btn')
const resetBtn = document.querySelector('.btn1')
const loading = document.querySelector('.loading')
const totalDisplay = document.querySelector('.total')

let count = 0
let totalScores = 0

const rollBall = () => {
  for (let i = 0; i < score.length; i++) {
    count++
  }

  let standingPins = 10
  const pinsHitFirst = getRandomPin(standingPins)
  standingPins = standingPins - pinsHitFirst
  const pinsHitSecond = getRandomPin(standingPins)
  const totalHits = pinsHitFirst + pinsHitSecond
  totalScores += totalHits

  if (count === 10) {
    score[0].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[0].innerHTML = totalHits
  } else if (count === 20) {
    score[1].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[1].innerHTML = totalScores
  } else if (count === 30) {
    score[2].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[2].innerHTML = totalScores
  } else if (count === 40) {
    score[3].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[3].innerHTML = totalScores
  } else if (count === 50) {
    score[4].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[4].innerHTML = totalScores
  } else if (count === 60) {
    score[5].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[5].innerHTML = totalScores
  } else if (count === 70) {
    score[6].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[6].innerHTML = totalScores
  } else if (count === 80) {
    score[7].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[7].innerHTML = totalScores
  } else if (count === 90) {
    score[8].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[8].innerHTML = totalScores
  } else if (count === 100) {
    score[9].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[9].innerHTML = totalScores
    totalDisplay.innerHTML = `Total Pins: ${totalScores}`
  } else {
    loading.innerHTML = 'You have exceeded the number of frames'
    loading.classList.add('active')
  }
}

function getRandomPin (remainingPins) {
  return Math.round(Math.random() * remainingPins)
}

resetBtn.addEventListener('click', () => window.location.reload())

rollBtn.addEventListener('click', () => {
  loading.classList.add('active')
  const min = 500
  const max = 1900

  const randomTimeLaps = Math.floor(Math.random() * (max - min + 1)) + min
  rollBtn.disabled = true

  setTimeout(() => {
    rollBall()
    loading.classList.remove('active')
    rollBtn.disabled = false
  }, randomTimeLaps)
})
