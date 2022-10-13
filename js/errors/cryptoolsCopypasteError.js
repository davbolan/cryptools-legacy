export default class CryptoolsCopypasteError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CryptoolsCopypasteError';
  }
}
