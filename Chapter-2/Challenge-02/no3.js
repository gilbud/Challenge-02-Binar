const { checkTypeNumber } = require("./no2");

function checkEmail(email) {
  const regex = /[\w-\.]/; // string
  const regexSign = /@([\w-])/; // @
  const regexCom = /\.+[\w-]{2,4}$/; // domain

  if (email === undefined || "") {
    return "Error: Bro where the parameter";
  } else if (
    regex.test(email) &&
    regexSign.test(email) &&
    regexCom.test(email)
  ) {
    return "VALID";
  } else if (regex.test(email) && regexSign.test(email)) {
    return "INVALID";
  } else {
    return "Error: Email harus lengkap (@ dan domain)";
  }
}

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata"));

console.log(checkTypeNumber(checkEmail(3322)));
console.log(checkEmail());
