var mysql = require('mysql');

// Requiring modules 
const express = require('express'); 
const app = express(); 
const mssql = require("mssql"); 
  
// Get request 
app.get('/', function (req, res) { 
  
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "new_password",
        port: 3306,
        database: "lodger"
    });

    con.connect(function(err) {
        if (err) throw err;
    console.log("Connected!");
   // });
    // Connect to your database 
    //mssql.connect(config, function (err) { 
  
        // Create Request object to preform 
        // query operation 
       // var request = new mysql.Request(); 
        con.query("SELECT * FROM landlord", (err, res) => {
            if (err) {
              console.log("error: ", err);
             // result(null, err);
             //turn;
            }
            else{
        
            if(res){
                console.log("landlord: ", res);
               
            }
            //result(null, res);
            
            }
          });
  
        
          // Query to the database and get the records 
      
    }); 
}); 
  
var server = app.listen(3000, function () { 
    console.log('Server is listening at port 5000...'); 
}); 

/*
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "new_password",
  port: 3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/