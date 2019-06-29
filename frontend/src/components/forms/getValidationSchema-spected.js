import { MIN_PASSWORD_LENGTH } from './const'

export default function getSpectedValidationSchema(values) {
  return {
    email: [
      [value => !isEmpty(value), 'E-mail is required!'],
      [value => isEmail(value), 'E-mail is not valid!'],
    ],
    firstName: [
      [value => !isEmpty(value), 'First name is required!']
    ],
    lastName: [
      [value => !isEmpty(value), 'Last name is required!']
    ],
    password: [
      [value => !isEmpty(value), 'Password is required!'],
      [
        value => value.length >= MIN_PASSWORD_LENGTH, 
        `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!` 
      ],
      [value => hasUCLetter(value), 'Password must have one upper-case letter.'],
      [value => hasLCLetter(value), 'Password must have one lower-case letter.'],
      [value => hasNumber(value), 'Password must have one number.'],
    ],
    passwordConfirmation: [
      [value => !isEmpty(value), 'Password confirmation is required!'],
      [value => value === values.password, 'The passwords do not match!'],
    ],
    consent: [
      [value => value === true, 'You have to agree with our Terms and Conditions!'],
    ]
  }
}

function isEmpty(value) {
  return !value || !value.trim()
}

function isEmail(value) {
  const EMAIL_REGEXP = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/
  return EMAIL_REGEXP.test(value)
}

function hasUCLetter(value) {
  const UC_LETTER_REGEXP = /([A-Z])/
  return UC_LETTER_REGEXP.test(value)
}

function hasLCLetter(value) {
  const LC_LETTER_REGEXP = /([a-z])/
  return LC_LETTER_REGEXP.test(value)
}

function hasNumber(value) {
  const NUMBER_REGEXP = /([0-9])/
  return NUMBER_REGEXP.test(value)
}

// function notMatching(value) {
//   var MATCHING_EXP = '/^((?!' + value + ').)*$/'
//   return MATCHING_EXP.text(value)
// }


