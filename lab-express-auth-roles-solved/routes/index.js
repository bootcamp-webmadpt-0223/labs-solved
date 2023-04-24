module.exports = app => {
  // Base routes
  app.use('/', require('./index.routes'))

  // Auth routes
  app.use('/', require('./auth.routes'))

  // Students
  app.use('/students', require('./students.routes'))

  // Courses
  app.use('/courses', require('./courses.routes'))
}
