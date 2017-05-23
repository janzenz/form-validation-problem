const validate = require('validate.js')
const validation = require('./validation')
require('core-js/fn/object/entries')

function resetClass(form) {
  Object.entries(form).forEach(([key, value]) => {
    document.getElementsByName(key)[0].parentNode.className = ''
  })
}

function applyClass(errorMap) {
  if (Object.keys(errorMap).length !== 0) {
    Object.entries(errorMap).forEach(([key, value]) => {
      document.getElementsByName(key)[0].parentNode.className = 'error'
    })
  }
}

function onSubmit(event) {
  event.preventDefault()

  const colourInput = document.getElementsByName('colour')[0]

  const form = {
    email: document.getElementsByName('email')[0].value,
    password: document.getElementsByName('password')[0].value,
    colour: colourInput.options[colourInput.selectedIndex].value,
    animal: [].filter.call(document.getElementsByName('animal'), animal => animal.checked).map(animal => animal.value),
    tiger_type: document.getElementsByName('tiger_type')[0].value,
  }

  resetClass(form)
  const errorMap = validation.validateForm(form)

  if (!validate.isEmpty(errorMap)) {
    applyClass(errorMap)
  } else {
    alert('Successful!')
    // document.getElementById('validate-form').submit()
  }
}

document.forms[0].addEventListener('submit', onSubmit)
