const generatePasswordHandeler = () => {
  const length = parseInt(document.getElementById("length").value);
  const hasUppercase = document.getElementById("uppercase").checked;
  const hasLowercase = document.getElementById("lowercase").checked;
  const hasNumbers = document.getElementById("numbers").checked;
  const hasSymbols = document.getElementById("symbols").checked;

  const password = generatePassword(
    length,
    hasUppercase,
    hasLowercase,
    hasNumbers,
    hasSymbols
  );
  document.getElementById("password").value = password;
};

const generatePassword = (
  length,
  hasUppercase,
  hasLowercase,
  hasNumbers,
  hasSymbols
) => {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=";

  let allChars = "";

  if (hasUppercase) {
    allChars += upperCase;
  }
  if (hasLowercase) {
    allChars += lowerCase;
  }
  if (hasNumbers) {
    allChars += numbers;
  }
  if (hasSymbols) {
    allChars += symbols;
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomChar = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomChar);
  }
  return password;
};

const copyPassword = () => {
  const password = document.getElementById("password").value;
  if (password === "") {
    alert("Please generate a password first");
    return;
  }
  navigator.clipboard.writeText(password);
  alert("Password copied to clipboard successfully");
};
