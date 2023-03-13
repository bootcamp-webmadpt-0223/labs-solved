class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 10)
  }

  getMinutes() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0
    }

    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0
    }

    return Math.floor((this.currentTime % 6000) / 100)
  }

  getCentiseconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0
    }

    return Math.floor((this.currentTime % 6000) % 100)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value < 10 ? `0${value}` : `${value}`
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    const milliseconds = this.computeTwoDigitNumber(this.getCentiseconds())

    return `${minutes}:${seconds}.${milliseconds}`
  }
}
