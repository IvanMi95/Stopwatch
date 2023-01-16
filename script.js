window.onload = function () {
  const minutes = document.querySelector("[data-minutes]")
  const seconds = document.querySelector("[data-seconds]")
  const stops = document.getElementById("stop")
  const reset = document.getElementById("reset")
  const start = document.getElementById("start")
  start.addEventListener("click", startWatch)
  stops.addEventListener("click", stopWatch)
  reset.addEventListener("click", resetWatch)

  let myInterval
  let minute = 0
  let second = 0
  let decSecond = 0

  function startWatch() {
    clearInterval(myInterval);
    myInterval = setInterval(startCounting, 10);
  }

  function stopWatch() {
    clearInterval(myInterval);
  }

  function resetWatch() {
    clearInterval(myInterval);
    second = 0
    minute = 0
    minutes.innerText = "00"
    seconds.innerText = "00"
  }

  function startCounting() {
    second++



    if (second < 10) {
      seconds.innerText = `0${second}`
    } else if (second < 20) {
      let x = second - 10
      seconds.innerText = `1${x}`
    } else if (second < 30) {
      let x = second - 20
      seconds.innerText = `2${x}`
    } else if (second < 40) {
      let x = second - 30
      seconds.innerText = `3${x}`
    } else if (second < 50) {
      let x = second - 40
      seconds.innerText = `4${x}`
    } else if (second < 60) {
      let x = second - 50
      seconds.innerText = `5${x}`
    } else {
      second = 0
      minute++
    }


    if (minute < 10) {
      minutes.innerText = `0${minute}`
    } else {
      minutes.innerText = minute
    }
  }

}




