// eslint-disable-next-line
export const checkIsValidPassword = (password: string): boolean | never => {
  const hasWeired = /[^~!@#$%^&*?0-9a-zA-Z]/.test(password);
  if (hasWeired) throw new Error();

  const hasSym = /[~!@#$%^&*?]/.test(password);
  const hasNum = /[0-9]/.test(password);
  const hasChar = /[a-zA-Z]/.test(password);

  if (!hasSym || !hasNum || !hasChar) throw new Error();
  return true;
};
