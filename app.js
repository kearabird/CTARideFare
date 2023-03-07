async function main(){
    const readline = require('readline/promises').createInterface({
        input: process.stdin,
        output: process.stdout,
      });
    //get user input using readline
    const bills = await readline.question('What bills do you have? Please list in comma seperated values (example: if you had a 1G bill and a 2 G bill you would enter 1,2) ');
    const fare = await readline.question('What is the fare? Please give the numerical value only ');
    //change bills into readable array
    const availBills = bills.split(',');
    //run the change function
    const change = exactChange(availBills,fare);
    readline.close();
    //output if the fare is possible
    if(change){
      console.log(`you can make the fare of ${fare} using ${change.join(',')}`);
    }
    else{
      console.log(`sorry you cannot make the fare of ${fare} using the given bills`);
    }
}

//recursion function
function exactChange (bills, price){
  //since we are using JS and not TS, make sure the types match
  fare = parseInt(price);
  //base case
  if(fare === 0){
    return [];
  }
   // We've run out of pieces to use
  if (bills.length === 0) {
    return null;
  }
  //iterate through the remaining bills
  for (let i = 0; i < bills.length; i++){
    //next bill
    const curr = bills[i];
    //must be less than or equal to fare in order to be added
    if(curr <= fare){
      //run with remaining bills
      const remainingBills = bills.slice(i+1);
      const billsNeeded = exactChange(remainingBills, fare - curr);

      //if that did not return null, we found solution
      if(billsNeeded !== null){
        return [curr].concat(billsNeeded);
      }
    }
    //else, try skipping that piece
    const rest = bills.slice(1);
    return exactChange(rest, parseInt(price));
  }
}


module.exports = { exactChange, main }