function checkTypeNumber(givenNumber) {
  if (typeof givenNumber === "number") {
    if (givenNumber % 2 === 0) {
      return "GENAP";
    } else {
      return "GANJIL";
    }
  } else if (typeof givenNumber === "undefined") {
    return "Error: Bro where is the paramater?";
  } else {
    return "Error: Invalid data Type";
  }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

exports.checkTypeNumber = checkTypeNumber;
