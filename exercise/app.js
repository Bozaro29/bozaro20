let userInput = prompt("How much money do you have?");

let moneyAmount = Number (userInput);

if (moneyAmount === 0 || moneyAmount === null || Number.isNaN(moneyAmount)) {
    alert("Please input valid input");
  }  else if (moneyAmount <= 400) {
     alert ("SISTER YOU GETTING BROKEN!!!");
  }  else if (moneyAmount <= 1000); {
     alert ("Extra risk neded");
  }  if (moneyAmount < 1500); {
     alert ("Start saving girl");
  }  if (moneyAmount <= 2000); {
     alert ("Take a break");
  }
