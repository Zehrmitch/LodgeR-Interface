var mysql = require('mysql');

// Requiring modules 
const express = require('express'); 
const app = express(); 
const mssql = require("mssql"); 

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "new_password",
    port: 3306,
    database: "lodger",
    multipleStatements: true
});
//make connection
con.connect(function(err) {
    if (err) throw err;
console.log("Connected!");
}); 

//login landlord
app.get('/loginlandlord/:email/:password', function (req, res) { 
    console.log("Connected!");
    email = req.params.email;
    password = req.params.password;
 
con.query("SELECT name FROM landlord WHERE email = ? AND password = ?", [email, password], (error, results) => {
    if (error) {
        console.log("error: ", error);
    }
    console.log(results);
    res.send(results);
    })
});

//login tentant
app.get('/logintenant/:email/:password', function (req, res) {  
     email = req.params.email;
     password = req.params.password;
  
 con.query("SELECT * FROM tenant WHERE email = ? AND password = ?", [email, password], (error, results) => {
     if (error) {
         console.log("error: ", error);
     }
     console.log(results);
     res.send(results);
     })
 }); 

 //search all landlord properties and update them
app.put('/updateproperties/:price/:num', function (req, res) {  
    price = req.params.price;
    num = req.params.num;
con.query(`UPDATE property SET price = ${price} WHERE accountNumL = ${num} `, (error, results) => {
    if (error) {
        console.log("error: ", error);
    }
    console.log(results);
    res.send(results);
    })
}); 

//find a property and add a review 
app.put('/addreview', function(req,res){
    let name = "Nola N. Valdez";
    let numOfStars = 7;
    let date = '2020-07-11';
    
    con.query((`SELECT * FROM propertyRental p WHERE p.accountNumT = (SELECT accountNumT FROM tenant t WHERE t.name = '${name}')`), (error, results) => {
        if (error) {
            console.log("error: ", error);
        }
        let propertyNum = results[0].propertyNum;
        con.query((`SELECT  loanNum FROM propertyrental p WHERE p.propertyNum=${propertyNum}` ), (error1, results1) => {
            if (error1){
                console.log(error1);
            }
            let loanNum = results1[0].loanNum;
            con.query((`INSERT INTO review VALUES(${loanNum},'${name}','${date}',${numOfStars})`), (error2, results2) =>{
                if (error2){
                    console.log(error2)
                }
                console.log(results2)
                res.send(results2)
            })

        })
        })
})

app.post('/addamenity', function(req,res){
    let landlordNum = 3;
    let amenity = "Sauna"

    con.query((`SELECT propertyNum 
    FROM property
    WHERE price > 200 AND accountNumL = ${landlordNum}`), (error, results) =>{
        if (error) {
            console.log("error: ", error);
        }
        let propertyNum = results[0].propertyNum;
        console.log(propertyNum)
        con.query((`INSERT INTO amenities VALUES('${amenity}', ${propertyNum})`), (error1, results1) => {
            if(error1){
                console.log("error: ", error1);
            }
            console.log(results1);
            res.send(results1)
        })
    })
    
})

var server = app.listen(3000, function () { 
    console.log('Server is listening at port 3000...'); 
}); 

