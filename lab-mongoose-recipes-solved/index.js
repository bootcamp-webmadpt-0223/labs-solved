const mongoose = require('mongoose')

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model')
// Import of the data from './data.json'
const data = require('./data')

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app'

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`)
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    return Recipe.create({
      title: 'Perico',
      level: 'Easy Peasy',
      ingredients: ['Eggs', 'Onion', 'Tomatoe'],
      cuisine: 'Colombian',
      image: 'https://www.196flavors.com/wp-content/uploads/2018/10/perico-2-FP.jpg',
      duration: 10
    })
  })
  .then(newRecipe => {
    console.log(newRecipe.title)
    return Recipe.insertMany(data)
  })
  .then(newRecipes => {
    newRecipes.forEach(elm => console.log(elm.title))
    return Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { duration: 100 })
  })
  .then(() => {
    console.log('Recipe successfully updated!')
    return Recipe.deleteOne({ title: 'Carrot Cake' })
  })
  .then(() => {
    console.log('Recipe successfully deleted!')
    mongoose.connection.close()
  })
  .catch(error => {
    console.error('Error connecting to the database', error)
  })
