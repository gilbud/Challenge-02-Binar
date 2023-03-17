function getSplitName(personName) {
  if (typeof personName === "string") {
    const getSplitName = personName.split(" ");
    if (getSplitName.length > 3) {
      return "ERROR: This function in only for 3 characters name";
    }
    const result = {};
    result.firstName = getSplitName[0];

    result.middleName = getSplitName[1];
    result.lastName = getSplitName[2];

    return result;
  } else {
    return "ERROR: Bro wrong parameter";
  }
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Dara"));
console.log(getSplitName(0));
