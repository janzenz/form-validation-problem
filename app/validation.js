const validate = require('validate.js')
require('core-js/fn/object/assign')

const constraints = {
  email: {
    email: true,
    presence: true,
  },
  password: {
    length: {
      minimum: 8,
    },
    presence: true,
  },
  colour: {
    presence: true,
  },
}

function validateForm(form) {
  let errorMap = validate(form, constraints)

  if (form.animal.length < 2) {
    errorMap = Object.assign({}, errorMap, { animal: ['At least 2 animals should be chosen'] })
  }

  if (validate.contains(form.animal, 'tiger')) {
    const tigerTypeError = validate(form, { tiger_type: { presence: true } })

    errorMap = Object.assign({}, errorMap, tigerTypeError || {})
  }

  return errorMap
}

module.exports = { constraints, validateForm }
