class CryptoolsJsonError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CryptoolsJsonError';
  }
}
