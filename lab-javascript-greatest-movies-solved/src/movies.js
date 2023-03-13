// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(eachDirector => eachDirector.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const moviesFilter = moviesArray.filter(eachFilm => eachFilm.director === 'Steven Spielberg' && eachFilm.genre.includes('Drama'))
  return moviesFilter.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0
  }
  const scoreSum = moviesArray.reduce((acc, eachFilm) => acc + (eachFilm.score || 0), 0)
  return Number((scoreSum / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(eachFilm => eachFilm.genre.includes('Drama'))
  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = JSON.parse(JSON.stringify(moviesArray))

  moviesCopy.sort((a, b) => {
    if (a.title < b.title) {
      return -1
    }
    return a.year - b.year
  })

  return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesCopy = JSON.parse(JSON.stringify(moviesArray))
  moviesCopy.sort((a, b) => {
    if (a.title < b.title) {
      return -1
    }
  })
  const titlesOnly = moviesCopy.map(eachTitle => eachTitle.title)
  const onlyTwenty = titlesOnly.slice(0, 20)

  return onlyTwenty
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const hours = moviesArray.map(eachTime => eachTime.duration.slice(0, 1) * 60)
  const getMins = moviesArray.map(eachMinute => eachMinute.duration.slice(3, -3))
  const totalMins = hours.map((num, index) => num + Number(getMins[index]))

  return moviesArray.map((eachFilm, index) => {
    return {
      ...eachFilm,
      duration: totalMins[index]
    }
  })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) {
    return null
  }

  const yearScores = {}

  moviesArray.forEach(movie => {
    if (!yearScores[movie.year]) {
      yearScores[movie.year] = { score: 0, count: 0 }
    }
    yearScores[movie.year].score += movie.score
    yearScores[movie.year].count++
  })

  let bestYear = 0
  let bestRate = 0

  Object.keys(yearScores).forEach(year => {
    const rate = yearScores[year].score / yearScores[year].count
    if (rate > bestRate) {
      bestYear = year
      bestRate = rate
    }
  })

  return `The best year was ${bestYear} with an average score of ${+bestRate.toFixed(1)}`
}
