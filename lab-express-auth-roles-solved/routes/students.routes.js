const router = require('express').Router()
const { isLoggedIn } = require('../middleware/route-guard')
const User = require('../models/User.model')
const { isPM, itsMe } = require('../utils')

router.get('/', isLoggedIn, (req, res, next) => {
  User.find()
    .then(users => res.render('users/users-list-page', { users }))
    .catch(error => {
      res.status(404).render('not-found')
      console.error(error)
    })
})

// Students profile

router.get('/:id', isLoggedIn, (req, res, next) => {
  const { id } = req.params
  const currentUser = req.session.currentUser

  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    User.findById(id)
      .then(users => {
        res.render('users/student-profile', {
          users,
          isAllowed: isPM(currentUser),
          isStudent: itsMe(id, currentUser._id)
        })
      })
      .catch(error => {
        res.status(404).render('not-found')
        console.error(error)
      })
  } else {
    res.status(404).render('not-found')
  }
})

// Delete student (PM)
router.post('/:id/delete', isLoggedIn, (req, res, next) => {
  const { id } = req.params

  User.findByIdAndDelete(id)
    .then(() => res.redirect('/students'))
    .catch(error => {
      res.status(404).render('not-found')
      console.error(error)
    })
})

// Edit student (PM)

router.get('/:id/edit', isLoggedIn, (req, res, next) => {
  const { id } = req.params
  const currentUser = req.session.currentUser

  if (itsMe(id, currentUser._id) || isPM(currentUser)) {
    User.findById(id)
      .then(users => {
        res.render('users/student-edit-page', {
          users,
          isAllowed: isPM(currentUser),
          isStudent: itsMe(id, currentUser._id)
        })
      })
      .catch(error => {
        res.status(404).render('not-found')
        console.error(error)
      })
  }
})

router.post('/:id/edit', isLoggedIn, (req, res, next) => {
  const { id } = req.params
  const currentUser = req.session.currentUser

  if (itsMe(id, currentUser._id) || isPM(currentUser)) {
    User.findByIdAndUpdate(id, req.body)
      .then(() => res.redirect(`/students/${id}`))
      .catch(error => {
        res.status(404).render('not-found')
        console.error(error)
      })
  }
})

module.exports = router
