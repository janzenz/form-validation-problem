const validation = require('../app/validation')
const expect = require('chai').expect

describe('Check validation form', () => {
  it('expect to pass the valid form', () => {
    const form = {
      email: 'jason@bourne.com',
      password: 'atleast8',
      colour: 'Blue',
      animal: ['bear', 'donkey'],
      tiger_type: 'lion',
    }

    expect(validation.validateForm(form)).to.be.empty
  })

  it('expect to pass the valid form with tiger type', () => {
    const form = {
      email: 'jason@bourne.com',
      password: 'atleast8',
      colour: 'Blue',
      animal: ['bear', 'tiger'],
      tiger_type: 'lion',
    }

    expect(validation.validateForm(form)).to.be.empty
  })
})

describe('Confirm failing tests', () => {
  it('expect to fail when everything is empty', () => {
    const form = {
      email: '',
      password: '',
      colour: '',
      animal: [],
      tiger_type: '',
    }

    expect(validation.validateForm(form))
      .to.have.all.keys(['email', 'password', 'colour', 'animal'])
  })

  it('expect to FAIL when the tiger type is empty', () => {
    const form = {
      email: 'jason@bourne.com',
      password: 'atleast8',
      colour: 'Blue',
      animal: ['bear', 'tiger'],
      tiger_type: '',
    }

    expect(validation.validateForm(form)).to.have.property('tiger_type')
  })

  it('expect to fail when email invalid', () => {
    const form = {
      email: 'jason@.com',
      password: 'atleast8',
      colour: 'Blue',
      animal: [],
      tiger_type: 'lion',
    }

    expect(validation.validateForm(form)).to.have.property('email').that.is.an('array')
  })

  it('expect to fail when animal is empty', () => {
    const form = {
      email: 'jason@bourne.com',
      password: 'atleast8',
      colour: 'Blue',
      animal: [],
      tiger_type: 'lion',
    }

    expect(validation.validateForm(form)).to.have.property('animal')
  })
})
