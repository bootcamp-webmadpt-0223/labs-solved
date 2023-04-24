const itsMe = (id, current_id) => id === current_id
const isPM = user => user.role === 'PM'
const isStudent = user => user.role === 'STUDENT'
const isTA = user => user.role === 'TA'

module.exports = { isStudent, isPM, itsMe, isTA }
