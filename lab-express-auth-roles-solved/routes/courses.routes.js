const router = require('express').Router()
const { checkRole, isLoggedIn } = require('../middleware/route-guard')
const Course = require('../models/Course.model')
const User = require('../models/User.model')
const { isTA } = require('../utils')

router.get('/', isLoggedIn, (req, res, next) => {
  Course.find()
    .then(courses => {
      const fomartedCourses = courses.map(course => {
        const startDate = course.startDate.toISOString().split('T')[0]
        const endDate = course.endDate.toISOString().split('T')[0]

        return { ...course._doc, startDate, endDate }
      })

      res.render('courses/courses-list-page', { fomartedCourses, isTA: isTA(req.session.currentUser) })
    })
    .catch(error => {
      res.status(404).render('not-found')
      console.error(error)
    })
})

router.get('/create', isLoggedIn, checkRole('TA'), (req, res, next) => {
  User.find()
    .then(users => {
      const teachers = users.filter(user => user.role === 'LEAD')
      const ta = users.filter(user => user.role === 'TA')
      const students = users.filter(user => user.role === 'STUDENT')

      res.render('courses/new-course', { teachers, ta, students })
    })
    .catch(error => {
      res.status(404).render('not-found')
      console.error(error)
    })
})

router.post('/create', isLoggedIn, checkRole('TA'), (req, res, next) => {
  const { title, leadTeacher, startDate, endDate, ta, courseImg, description, status, students } = req.body

  Course.create({ title, leadTeacher, startDate, endDate, ta, courseImg, description, status, students })
    .then(() => res.redirect('/courses'))
    .catch(error => {
      res.status(404).render('not-found')
      console.error(error)
    })
})

router.get('/:id', isLoggedIn, (req, res, next) => {
  const { id } = req.params

  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Course.findById(id)
      .populate('leadTeacher ta students')
      .then(course => {
        const startDate = course.startDate.toISOString().split('T')[0]
        const endDate = course.endDate.toISOString().split('T')[0]
        const currentUser = req.session.currentUser._id
        const formatedCourse = { ...course._doc, startDate, endDate, isTA: isTA(req.session.currentUser) }

        res.render('courses/course-details', { formatedCourse, currentUser })
      })
      .catch(error => {
        res.status(404).render('not-found')
        console.error(error)
      })
  } else {
    res.status(404).render('not-found')
  }
})

router.get('/:id/edit', isLoggedIn, checkRole('TA'), async (req, res, next) => {
  const { id } = req.params

  try {
    const course = await Course.findById(id).populate('leadTeacher ta students')
    const users = await User.find()

    const teachers = users.filter(user => user.role === 'LEAD')
    const ta = users.filter(user => user.role === 'TA')
    const students = users.filter(user => user.role === 'STUDENT')

    res.render('courses/edit-course', { course, teachers, ta, students })
  } catch (err) {
    res.status(404).render('not-found')
    console.error(error)
  }
})

router.post('/:id/edit', isLoggedIn, checkRole('TA'), (req, res, next) => {
  const { id } = req.params

  const { title, leadTeacher, startDate, endDate, ta, courseImg, description, status, students } = req.body

  Course.findByIdAndUpdate(id, { title, leadTeacher, startDate, endDate, ta, courseImg, description, status, students })
    .then(() => res.redirect(`/courses/${id}`))
    .catch(error => {
      res.status(404).render('not-found')
      console.error(error)
    })
})

router.post('/:id/delete', isLoggedIn, checkRole('TA'), (req, res, next) => {
  const { id } = req.params

  Course.findByIdAndDelete(id)
    .then(() => res.redirect('/courses'))
    .catch(error => {
      res.status(404).render('not-found')
      console.error(error)
    })
})

router.post('/:id/join', isLoggedIn, (req, res, next) => {
  const { id } = req.params

  Course.findByIdAndUpdate(id, { $push: { students: req.session.currentUser._id } })
    .then(() => res.redirect(`/courses/${id}`))
    .catch(error => {
      res.status(404).render('not-found')
      console.error(error)
    })
})

router.post('/:id/leave', isLoggedIn, (req, res, next) => {
  const { id } = req.params

  Course.findByIdAndUpdate(id, { $pull: { students: req.session.currentUser._id } })
    .then(() => res.redirect(`/courses/${id}`))
    .catch(error => {
      res.status(404).render('not-found')
      console.error(error)
    })
})

module.exports = router
