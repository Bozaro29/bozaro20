console.log("Script is online");

// exercise //

function calculateAge(birthYear, currentYear) {
  let age = currentYear - birthYear;
  console.log("You are " + age + " years old");
}

let birthYear = 2003;
let currentYear = 2023;
calculateAge(birthYear, currentYear);

// HomeWork 1//

function checkType(value) {
  let type = typeof value;
  console.log("Type of", value, "is", type);
}

checkType({});
checkType(true);
checkType(21);
checkType("How are you");
checkType(undefined);

// HomeWork 2//

function dogYearCalc(years, type) {
  let humanYearResult = years / 7;
  let dogYearResult = years / 7;
  if (type === "dog") {
    console.log("This is your dog years:${dogYearResult}");
  } else if (type === "human")
    console.log("This is your human years:${humanYearResult}");
  return;
}

dogYearCalc(50, "human");
dogYearCalc(7, "dog");
