import { Email } from './email';

describe('Email Validation', () => {
  test('should not accept null strings', () => {
    const email = null
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept undefined', () => {
    const email: string = undefined
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty strings', () => {
    const email = ''
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should accept valid email', () => {
    const email = 'any@email.com'
    expect(Email.validate(email)).toBeTruthy()
  })

  test('should not accept local part larger than 64 chars', () => {
    const email = 'l'.repeat(65) + '@mail.com'

    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept email larger than 320 chars', () => {
    const email = 'c'.repeat(64) + '@' + 'd'.repeat(128) + '.' + 'd'.repeat(127)

    expect(Email.validate(email)).toBeFalsy()
  })
})