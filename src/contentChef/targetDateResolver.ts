// targetDateResolver.js

export class TargetDateResolver {
  getTargetDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return Promise.resolve(tomorrow.toISOString());
  }
}
