export default function getEnvVariable(key: string): string {
  const value = process.env[key];
  if (typeof value === 'undefined') {
    throw new Error(`${key} is not defined`);
  }
  return value;
}
