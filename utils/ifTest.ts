export const ifTest = <T>(path: T): T | undefined =>
  process.env.APP_ENV === 'test' ? path : undefined;

export default ifTest;
