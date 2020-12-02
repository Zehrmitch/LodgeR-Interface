//Landlord login
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
}

function addBonusAmmenity() {
	var accountNumL1 = document.getElementById("landLordAccountNumber").value;
	var newAmmenity = document.getElementById("landLordNewAmmenity").value;

	if (accountNumL1 == "" || newAmmenity == "") {
		alert("Please enter enter inputs");
	}

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

function addReview() {
	var tName = document.getElementById("tenantName").value;
	var review = document.getElementById("tenantReview").value;

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
