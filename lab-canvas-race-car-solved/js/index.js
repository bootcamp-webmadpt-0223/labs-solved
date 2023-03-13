window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame()
  }

  function startGame() {
    const carApp = {
      appName: "Don't crash the car",
      author: 'Peepo',
      version: 'Beta 0.0.1',
      gameSize: { w: 500, h: 700 },
      ctx: undefined,
      obstacles: [],
      background: undefined,
      car: undefined,
      count: 0,
      points: 0,
      intervalId: undefined,

      init() {
        this.setContext()
        this.createBackground()
        this.createCar()
        this.drawAll()
        this.setEventHandlers()
        this.createObstacles()
        this.setCollisionsObs()
        this.setCollisionsLines()
        this.gamePoint()
      },
      setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
      },
      createBackground() {
        this.background = new Background(this.ctx)
      },
      createCar() {
        this.car = new Car(this.ctx, (this.gameSize.w / 2) - 50, 500, 100)
      },
      createObstacles() {
        this.obstacles.push(new Obstacles(this.ctx, 100))
      },
      clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
      },
      setEventHandlers() {
        document.addEventListener('keydown', event => {
          const { key } = event
          key === 'ArrowRight' ? this.car.moveRight() : null
          key === 'ArrowLeft' ? this.car.moveLeft() : null
        })
      },
      setCollisionsObs() {

        this.obstacles.map(eachElm => {
          if (eachElm.pos.x < this.car.pos.x + this.car.carSize.w &&
            eachElm.pos.x + eachElm.obsSize.w > this.car.pos.x &&
            eachElm.pos.y < this.car.pos.y + this.car.carSize.h &&
            eachElm.obsSize.h + eachElm.pos.y > this.car.pos.y) { // Detect collision
            this.endGame()
          }

          // Add points when obstacles touches bottom
          if (eachElm.pos.y === 630) {
            this.points++
          }
        })
      },
      setCollisionsLines() {
        // Left line
        if (0 < this.car.pos.x + this.car.carSize.w &&
          0 + 50 > this.car.pos.x &&
          500 < this.car.pos.y + this.car.carSize.h &&
          100 + 500 > this.car.pos.y) { // Detect collision
          this.endGame()
        }

        // Right line
        if (450 < this.car.pos.x + this.car.carSize.w &&
          450 + 20 > this.car.pos.x &&
          500 < this.car.pos.y + this.car.carSize.h &&
          100 + 500 > this.car.pos.y) { // Detect collision
          this.endGame()
        }
      },
      gamePoint() {
        this.ctx.font = '30px Arial'
        this.ctx.fillStyle = 'White'
        this.ctx.fillText(`Score: ${this.points}`, 70, 30)
      },
      endGame() {
        clearInterval(this.intervalId)
        this.obstacles = []
        this.ctx.fillStyle = 'Black'
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
        this.ctx.font = '35px Arial'
        this.ctx.fillStyle = 'Red'
        this.ctx.fillText('Game Over!', 100, 200)
        this.ctx.font = '40px Arial'
        this.ctx.fillStyle = 'White'
        this.ctx.fillText(`Total Score: ${this.points}`, 100, 300)
        this.ctx.font = '25px Arial'
        this.ctx.fillStyle = 'White'
        this.ctx.fillText('Reload the page to play again.', 100, 400)
      },
      drawAll() {
        this.intervalId = setInterval(() => {
          this.count++
          this.count % 80 === 0 ? this.createObstacles() : null
          this.clearAll()
          this.background.draw()
          this.gamePoint()
          this.car.draw()
          this.setCollisionsObs()
          this.setCollisionsLines()
          this.obstacles.forEach(elm => {
            elm.move()
            elm.drawObs()
          })
        }, 40)
      },
    }
    return carApp.init()
  }
}
