//Landlord login
function landlordLogin(landlordEmail,landlordPassword){
    fetch('/api/loginlandlord/'+landlordEmail+'/'+landlordPassword)
    .then(
        function(response){ 
          console.log("Landlord Login");
           if(response){
             window.href = "Landlord.html";
//load landlord.html
           }
           else{
//load Login.html
           }
      }
    )
  .catch(function(error){
  console.log("Error:", error);
    });
}

//Tenant login
function tenantLogin(tenantEmail,tenantPassword){
    fetch('/api/logintenant/'+tenantEmail+'/'+tenantPassword)
    .then(
        function(response){ 
           if(response){
//load tenant.html
           }
           else{
//load login.html
           }
      }
    )
  .catch(function(error){
  console.log("Error:", error);
    });

}


function updateLPropertyPrice(){
  var accountNumL=document.getElementById('landLordNum').value;
  var updatePrice=document.getElementById('landLordPrice').value;

  if((accountNumL=="")||(updatePrice=="")){
    alert("Please enter enter inputs");
  }
  let url='/api/updateproperties/'+updatePrice+'/'+accountNumL;
  fetch(url, {method:'POST'})
  .then(
      function(response){ 
         if(response.status!=200){
       display=document.getElementById('updatePriceDisplay');
       error=document.createElement('p');
       errormsg=document.createTextNode("Could not update price. Check inputs are correct.");
       error.appendChild(errormsg);
       display.appendChild(error);
         }
         else{
      display=document.getElementbyId('updatePriceDisplay');
      success=document.createElement('p');
       successmsg=document.createTextNode("Could not update price. Check inputs are correct.");
       success.appendChild(successmsg);
       display.appendChild(success);

         }
    }
  )
.catch(function(error){
console.log("Error:", error);
  });





}