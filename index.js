const denominations = [2000,500,200,100,20,10,5,1]

function calculate_return_change(){
   let no_of_notes_denomination = new Object();
   const bill_amt = parseInt(document.getElementById("bill_amt").value);
   const cash_given = parseInt(document.getElementById("cash_given_box").value);
   if (bill_amt > cash_given)
   {
      document.getElementById('main').style.visibility = "visible";
   }
   else
   {
      let amt_to_be_returned = cash_given - bill_amt;
      for(let i=0;i<denominations.length;i++)
      {
         document.getElementById(denominations[i]).innerHTML = 0;
         if (denominations[i] <= amt_to_be_returned)
         {
            no_of_notes = Math.floor(amt_to_be_returned / denominations[i]);
            document.getElementById(denominations[i]).innerHTML = no_of_notes;
            no_of_notes_denomination[ denominations[i] ] = no_of_notes;
            amt_to_be_returned = amt_to_be_returned % denominations[i];
         }
      }
      console.log(no_of_notes_denomination);
   }
}
function closePopUp(){
   document.getElementById('main').style.visibility = "hidden";
 }