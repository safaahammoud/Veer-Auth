const hasDigit = (password: string): boolean => (/[0-9]/g).test(password.trim());

const hasMinChars = (password: string): boolean => password.trim().length >= 8;

const hasLowercase = (password: string): boolean => (/[a-z]/g).test(password.trim());

const hasUppercase = (password: string): boolean => (/[A-Z]/g).test(password.trim());

const hasSpecialChar = (password: string): boolean => (/(?!\s)[\W_]/g).test(password.trim());

const arePasswordsIdentical = (
  password: string | null,
  confirmPassword: string | null,
): boolean => (password?.trim() === confirmPassword?.trim());

export default {
  hasDigit,
  hasMinChars,
  hasLowercase,
  hasUppercase,
  hasSpecialChar,
  arePasswordsIdentical,
};