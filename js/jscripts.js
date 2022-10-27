const ccNumber = "4102080880435620";
const ccArray = ccNumber.split("");
const newArray = [];

function validateCc(ccArray){
  for (let i = ccArray.length - 1; i >= 0; i--) {
    if(i % 2 !== 0){
      if (ccArray[i]*2 < 10){
      newArray.push(ccArray[i]*2);
      } else if (parseInt(ccArray[i])*2 > 10) {
        const multiplied = (parseInt(ccArray[i])*2).toString();
        const added = parseInt(multiplied[0]) + parseInt(multiplied[1]);
        newArray.push(added);
      }
    } else {
      newArray.push(parseInt(ccArray[i]));
    }
  }
};

validateCc(ccArray);

const initialValue = 0;
const sumWithInitial = newArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

function remainderOfSum (sum) {
  if (sum % 10 === 0){
    console.log("The credit card is valid!")
  } else {
    console.log("The credit card is INvalid!")
  }
}

function remainderOfSum (sumWithInitial);

function validateFirstDig (ccArray) {
  if (ccArray[0] === "3") {
    if (ccArray[1] === "4" || ccArray[1] === "7") {
      return "Your card is American Express";
    }
    return "Your card is invalid."
  }
  else if (ccArray[0] === "4") {
    return "Your card is Visa";
  }
  else if (ccArray[0] === "5") {
    return "Your card is Mastercard";
  }
  else if (ccArray[0] === "6") {
    return "Your card is Discover card"
  }
  return "Your card is invalid"
}