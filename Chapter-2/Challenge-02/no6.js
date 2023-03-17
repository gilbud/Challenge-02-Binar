function getAngkaTerbesarKedua(personName) {
  if (personName === undefined) {
    return "ERROR: Bro where the parameter";
  }
  if (!Array.isArray(personName)) {
    return "ERROR: Data must be array!";
  }

  const sorting = personName.sort((a, b) => b - a);

  let secondLarge = null;
  for (let i = 0; i < sorting.length; i++) {
    if (sorting[i] < sorting[0]) {
      secondLarge = sorting[i];
      break;
    }
  }

  if (secondLarge === null) {
    return null;
  }
  return secondLarge;
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));

console.log(getAngkaTerbesarKedua(0));

console.log(getAngkaTerbesarKedua());
