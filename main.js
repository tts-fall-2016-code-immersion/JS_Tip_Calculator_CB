var bill_before_tip = prompt('What is your current bill?');
var tip = Number(bill_before_tip) * 0.20;
var bill_and_tip = Number(bill_before_tip) + Number(tip);

function tip_amount(bill_before_tip) {
  return tip;
}
function total_bill(bill_before_tip) {
  return bill_and_tip;
}
console.log("Your current bill is " + "$" + bill_before_tip);
console.log('With the 20% included gratuity the amount for your tip is ' + '$' + tip_amount(bill_before_tip));
console.log('Which brings your total amount due to ' + '$' + bill_and_tip)

alert('Which brings your total amount due to ' + '$' + bill_and_tip)
