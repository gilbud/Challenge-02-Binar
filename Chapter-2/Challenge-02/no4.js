function isValidPassword(email) {
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (email === undefined) {
    return "ERROR: Bro where the parameter!";
  } else if (typeof email !== "string") {
    return "ERROR: Broo wrong parameter";
  } else if (regexPassword.test(email)) {
    // return "Password tidak lengkap (8 huruf, ada huruf kapital, ada huruf kecil, dan ada angka)";
    return true;
  } else {
    return false;
  }
}

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());
