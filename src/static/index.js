//Landlord login
<<<<<<< HEAD
function landlordLogin(landlordEmail,landlordPassword){
    fetch('/loginlandlord/'+landlordEmail+'/'+landlordPassword)
    .then(
        function(response){ 
          console.log("Landlord Login");
           if(response){
             window.location.href = "Landlord.html";
           }
           else{
            window.location.href = "Index.html";
           }
      }
    )
  .catch(function(error){
  console.log("Error:", error);
    });
=======
function landlordLogin(landlordEmail, landlordPassword) {
	fetch("/loginlandlord/" + landlordEmail + "/" + landlordPassword)
		.then(function (response) {
			console.log("Landlord Login");
			if (response) {
				window.location.href = "Landlord.html";
				//load landlord.html
			} else {
				//load Login.html
				window.location.href = "Index.html";
			}
		})
		.catch(function (error) {
			console.log("Error:", error);
		});
>>>>>>> 5a3f0f840f12e1b8e5e1f9a8a9979b48b4fb87c4
}

//Tenant login
function tenantLogin(tenantEmail, tenantPassword) {
	fetch("/logintenant/" + tenantEmail + "/" + tenantPassword)
		.then(function (response) {
			console.log(response.status);
			if (response.status == 200) {
				window.location.href = "Tenant.html";
			} else {
				window.location.href = "Index.html";
			}
		})
		.catch(function (error) {
			console.log("Error:", error);
		});
}

function updateLPropertyPrice() {
	var accountNumL = document.getElementById("landLordNum").value;
	var updatePrice = document.getElementById("landLordPrice").value;

<<<<<<< HEAD
function updateLPropertyPrice(){
  var accountNumL=document.getElementById('landLordNum').value;
  var updatePrice=document.getElementById('landLordPrice').value;

  if((accountNumL=="")||(updatePrice=="")){
    alert("Please enter enter inputs");
  }

  let del = document.getElementById('landlord2Results');
  while(del.firstChild){
    del.removeChild(del.firstChild);
  }
  let url='/updateproperties/'+updatePrice+'/'+accountNumL;
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
      display=document.getElementById('landlord2Results');
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
=======
	if (accountNumL == "" || updatePrice == "") {
		alert("Please enter enter inputs");
	}
	let url = "/updateproperties/" + updatePrice + "/" + accountNumL;
	fetch(url, { method: "PUT" })
		.then(function (response) {
			if (response.status != 200) {
				display = document.getElementById("landlord2Results");
				error = document.createElement("p");
				errormsg = document.createTextNode(
					"Could not update price. Check inputs are correct."
				);
				error.appendChild(errormsg);
				display.appendChild(error);
			} else {
				display = document.getElementById("landlord2Results");
				success = document.createElement("p");
				successmsg = document.createTextNode("Successfully updated price");
				success.appendChild(successmsg);
				display.appendChild(success);
			}
		})
		.catch(function (error) {
			console.log("Error:", error);
		});
>>>>>>> 5a3f0f840f12e1b8e5e1f9a8a9979b48b4fb87c4
}

function addBonusAmmenity() {
	var accountNumL1 = document.getElementById("landLordAccountNumber").value;
	var newAmmenity = document.getElementById("landLordNewAmmenity").value;

<<<<<<< HEAD
  let del = document.getElementById('updatePriceDisplay');
  while(del.firstChild){
    del.removeChild(del.firstChild);
  }

  let url='/addamenity/'+accountNumL1+'/'+newAmmenity;
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
      display=document.getElementById('updatePriceDisplay');
      success=document.createElement('p');
       successmsg=document.createTextNode("Successfully added ammenity");
       success.appendChild(successmsg);
       display.appendChild(success);
=======
	if (accountNumL1 == "" || newAmmenity == "") {
		alert("Please enter enter inputs");
	}
>>>>>>> 5a3f0f840f12e1b8e5e1f9a8a9979b48b4fb87c4

	let url = "/addamenity/" + accountNumL1 + "/" + newAmmenity;
	fetch(url, { method: "POST" })
		.then(function (response) {
			if (response.status != 200) {
				display = document.getElementById("updatePriceDisplay");
				error = document.createElement("p");
				errormsg = document.createTextNode(
					"Could not add ammenity. Check inputs are correct."
				);
				error.appendChild(errormsg);
				display.appendChild(error);
			} else {
				display = document.getElementById("updatePriceDisplay");
				success = document.createElement("p");
				successmsg = document.createTextNode("Successfully added ammenity");
				success.appendChild(successmsg);
				display.appendChild(success);
			}
		})
		.catch(function (error) {
			console.log("Error:", error);
		});
}

<<<<<<< HEAD
function addReview(){
  var rreview=document.getElementById('rreview').value;
  var tName=document.getElementById('tenantName').value;
  console.log(rreview)
  if((tName=="")||(rreview=="")){
    alert("Please enter enter inputs");
  }
  let del = document.getElementById('reviewResults');
  while(del.firstChild){
    del.removeChild(del.firstChild);
  }

  console.log("review: " + rreview);
  console.log(tName)
  let url='/addreview/'+tName+'/'+rreview;
  fetch(url, {method:'PUT'})
  .then(
      function(response){ 
         if(response.status!=200){
       display=document.getElementById('reviewResults');
       error=document.createElement('p');
       errormsg=document.createTextNode("Could not add review.");
       error.appendChild(errormsg);
       display.appendChild(error);
         }
         else{
      display=document.getElementById('reviewResults');
      success=document.createElement('p');
       successmsg=document.createTextNode("Successfully added review.");
       success.appendChild(successmsg);
       display.appendChild(success);
=======
function addReview() {
	var tName = document.getElementById("tenantName").value;
	var review = document.getElementById("tenantReview").value;
>>>>>>> 5a3f0f840f12e1b8e5e1f9a8a9979b48b4fb87c4

	if ((tName == "") || (review = "")) {
		alert("Please enter enter inputs");
	}
	console.log("review: " + review);
	console.log(tName);
	let url = "/addreview/" + tName + "/" + String(review);
	fetch(url, { method: "PUT" })
		.then(function (response) {
			if (response.status != 200) {
				display = document.getElementById("reviewResults");
				error = document.createElement("p");
				errormsg = document.createTextNode("Could not add review.");
				error.appendChild(errormsg);
				display.appendChild(error);
			} else {
				display = document.getElementById("reviewResults");
				success = document.createElement("p");
				successmsg = document.createTextNode("Successfully added review.");
				success.appendChild(successmsg);
				display.appendChild(success);
			}
		})
		.catch(function (error) {
			console.log("Error:", error);
		});
}


function getProperties(){
  var propLocation=document.getElementById('tenantLocationSearch').value;
  var maxPrice=document.getElementById('tenantPriceSearch').value;

  let del = document.getElementById('tenant1Results');
  while(del.firstChild){
    del.removeChild(del.firstChild);
  }

  if((propLocation=="")||(maxPrice=="")){
    alert("Please enter enter inputs");
  }

  fetch(`/searchproperty/${propLocation}/${maxPrice}`)
  .then(
      function(response){ 
         if(response.status!=200){
       display=document.getElementById('tenant1Results');
       error=document.createElement('p');
       errormsg=document.createTextNode("Could not find any properties.");
       error.appendChild(errormsg);
       display.appendChild(error);
         }
         else{
          response.json().then(function(data){
       // console.log(data.address);   
        display=document.getElementById('tenant1Results');
        success=document.createElement('p');
        br = document.createElement('br')
         msg=document.createTextNode("Address: " + data.address);
         msg2 = document.createTextNode("Property Number: " + data.propertyNum)
         msg3 = document.createTextNode('Is Available: ' + data.isAvailable)
         success.appendChild(msg);
        success.appendChild(br);
         success.appendChild(msg2);
         success.appendChild(br);
         success.appendChild(msg3);
         display.appendChild(success); 
          })
         }
    }
  )
.catch(function(error){
console.log("Error:", error);
  });
}

function bookProperty(){
  var propnum=document.getElementById('propNum').value;
  var tnum=document.getElementById('tNum').value;
  var datefrom=document.getElementById('dateFrom').value;
  var dateto=document.getElementById('dateTo').value;

  if((propnum=="")||(tnum=="")||(datefrom=="")||(dateto=="")){
    alert("Please enter enter inputs");
  }
  let del = document.getElementById('bookresults');
  while(del.firstChild){
    del.removeChild(del.firstChild);
  }
  let url=`/rent/${tnum}/${propnum}/${datefrom}/${dateto}`;

  fetch(url,{method: 'POST'})
  .then(
      function(response){ 
         if(response.status!=200){
       display=document.getElementById('bookresults');
       error=document.createElement('p');
       errormsg=document.createTextNode("Could not book this property.");
       error.appendChild(errormsg);
       display.appendChild(error);
         }
         else{
          response.json().then(function(data){
        
        display=document.getElementById('bookresults');
        success=document.createElement('p');
        successmsg=document.createTextNode('Successfully booked this property.');
        success.appendChild(successmsg);
        display.appendChild(success);
          })
         }
    }
  )
.catch(function(error){
console.log("Error:", error);
  });
}

function getStars(){
  var numforstars=document.getElementById('landLordAccountNumber2').value;
  
  let del = document.getElementById('landLord2Results');
  while(del.firstChild){
    del.removeChild(del.firstChild);
  }

  if(numforstars==""){
    alert("Please enter a valid input");
  }

  fetch(`/stars/${numforstars}`)
  .then(
      function(response){ 
         if(response.status!=200){
       display=document.getElementById('landLord2Results');
       error=document.createElement('p');
       errormsg=document.createTextNode("Could not find any properties.");
       error.appendChild(errormsg);
       display.appendChild(error);
         }
         else{
          response.json().then(function(data){
        console.log(data.num)
        display=document.getElementById('landLord2Results');
        success=document.createElement('p');
      
         msg=document.createTextNode('Number of Stars:'  + data.num);
         success.appendChild(msg);
         display.appendChild(success); 
          })
         }
    }
  )
.catch(function(error){
console.log("Error:", error);
  });
}

function deleteResults(){

  var proptodelete=document.getElementById('deleteprop').value;
  let url=`/delstars/${proptodelete}`;

  let del = document.getElementById('deletedisplay');
  while(del.firstChild){
    del.removeChild(del.firstChild);
  }

  fetch(url,{method:'DELETE'})
  .then(
      function(response){ 
         if(response.status!=200){
       display=document.getElementById('deletedisplay');
       error=document.createElement('p');
       errormsg=document.createTextNode("Could not delete the property.");
       error.appendChild(errormsg);
       display.appendChild(error);
         }
         if(response.status==200){
        
        display=document.getElementById('deletedisplay');
        success=document.createElement('p');
         msg=document.createTextNode("Successfully deleted the property.");
         success.appendChild(msg);
         display.appendChild(success); 
          }
         
    }
  )
.catch(function(error){
console.log("Error:", error);
  });
}