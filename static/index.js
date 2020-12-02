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

//Landlord-Search all properties 
function searchLProperties(landlordName){


}

//Landlord-Update a property 
function updateLProperty(propertyNum){

}