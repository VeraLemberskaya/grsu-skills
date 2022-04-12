export class AuthorizationError extends Error {
  constructor(message) {
    message ? super(message) : super("Неверный логин или пароль.");
    this.name = this.constructor.name;
  }
}
