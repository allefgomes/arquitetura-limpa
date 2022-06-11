export class Email {
  static validate(email: string): boolean {
    if (Boolean(email)) return true

    return false
  }
}