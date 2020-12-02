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
            window.href = "Login.html";
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
            window.href = "Tenant.html";
//load tenant.html
           }
           else{
//load login.html
            window.href = "Login.html";
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
  fetch(url, {method:'PUT'})
  .then(
      function(response){ 
         if(response.status!=200){
       display=document.getElementById('landlord2Results');
       error=document.createElement('p');
       errormsg=document.createTextNode("Could not update price. Check inputs are correct.");
       error.appendChild(errormsg);
       display.appendChild(error);
         }
         else{
      display=document.getElementbyId('landlord2Results');
      success=document.createElement('p');
       successmsg=document.createTextNode("Successfully updated price");
       success.appendChild(successmsg);
       display.appendChild(success);

         }
    }
  )
.catch(function(error){
console.log("Error:", error);
  });
}

function addBonusAmenity(){
  var accountNumL1=document.getElementById('landLordAccountNumber').value;
  var newAmmenity=document.getElementById('landLordNewAmmenity').value;
  
  if((accountNumL1=="")||(minPrice=="")||(newAmmenity=="")){
    alert("Please enter enter inputs");
  }

  let url='/api/addamenity/'+accountNumL1+'/'+newAmmenity;
  fetch(url, {method:'POST'})
  .then(
      function(response){ 
         if(response.status!=200){
       display=document.getElementById('updatePriceDisplay');
       error=document.createElement('p');
       errormsg=document.createTextNode("Could not add ammenity. Check inputs are correct.");
       error.appendChild(errormsg);
       display.appendChild(error);
         }
         else{
      display=document.getElementbyId('updatePriceDisplay');
      success=document.createElement('p');
       successmsg=document.createTextNode("Successfully added ammenity");
       success.appendChild(successmsg);
       display.appendChild(success);

         }
    }
  )
.catch(function(error){
console.log("Error:", error);
  });
}