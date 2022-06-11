export class Email {
  static validate(email: string): boolean {
    if (!Boolean(email)) return false

    if (email.length > 320) return false

    const [local, _domain] = email.split('@')
    if (local.length > 64) return false

    return true
  }
}
