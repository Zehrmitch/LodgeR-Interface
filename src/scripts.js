var mysql = require('mysql');

// Requiring modules 
const express = require('express');
const app = express();
const mssql = require("mssql");
dateTime = require('node.date-time')

app.use('/', express.static('static'))

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "new_password",
    port: 3306,
    database: "lodger",
    multipleStatements: true
});
//make connection
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

//login landlord
app.get('/', function (req, res) {
    res.render('/Login.html');
});

app.get('/loginlandlord/:email/:password', function (req, res) {
    console.log("Connected!");
    email = req.params.email;
    password = req.params.password;

    con.query("SELECT name FROM landlord WHERE email = ? AND password = ?", [email, password], (error, results) => {
        if (error) {
            console.log("error: ", error);
            res.status(400).send("Login failed")
        } else {
            console.log(results);
            res.status(200).send(results);
        }
    })
});

//login tentant
app.get('/logintenant/:email/:password', function (req, res) {
    email = req.params.email;
    password = req.params.password;
    console.log(email + " " + password);
    con.query("SELECT * FROM tenant WHERE email = ? AND password = ?", [email, password], (error, results) => {
        if (error) {
            console.log("error: ", error);
            res.status(400).send("Login failed")
        } else {
            console.log(results);
            res.status(200).send("Login success");

        }
    })
});

//search all landlord properties and update them
app.put('/updateproperties/:price/:num', function (req, res) {
    price = req.params.price;
    num = req.params.num;
    con.query(`UPDATE property SET price = ${price} WHERE accountNumL = ${num} `, (error, results) => {
        if (error) {
            console.log("error: ", error);
            res.status(400).send("Property not found")
        } else {
            console.log(results);
            res.status(200).send(results);
        }
    })
});

//find a property and add a review 
app.put('/addreview/:name/:review', function (req, res) {
    let name = req.params.name;
    let numOfStars = req.params.review;
    let date = '2020-12-03';

    con.query((`SELECT * FROM propertyRental p WHERE p.accountNumT = (SELECT accountNumT FROM tenant t WHERE t.name = '${name}')`), (error, results) => {
        if (error) {
            console.log("error: ", error);
            res.status(400).send("Something went wrong")
        } else {
            let propertyNum = results[0].propertyNum;
            con.query((`SELECT loanNum FROM propertyrental p WHERE p.propertyNum=${propertyNum}`), (error1, results1) => {
                if (error1) {
                    console.log(error1);
                    res.status(400).send("Something went wrong")
                } else {
                    let loanNum = results1[0].loanNum;

                    con.query((`INSERT INTO review VALUES(${loanNum},'${name}','${date}',${numOfStars})`), (error2, results2) => {
                        if (error2) {
                            console.log(error2)
                            res.status(400).send("Something went wrong")
                        } else {
                            console.log(results2)
                            res.status(200).send(results2)
                        }
                    })
                }

            })
        }
    })
})

//add an amenity to a property
app.post('/addamenity/:num/:newAmmenity', function (req, res) {

    let landlordNum = req.params.num;
    let amenity = req.params.newAmmenity;

    console.log(landlordNum);
    con.query((`SELECT propertyNum 
    FROM property
    WHERE price > 200 AND accountNumL = ${landlordNum}`), (error, results) => {
        if (error) {
            console.log("error: ", error);
            res.status(400).send("Something went wrong")
        } else {
            let propertyNum = results[0].propertyNum;
            console.log(propertyNum)
            con.query((`INSERT INTO amenities VALUES('${amenity}', ${propertyNum})`), (error1, results1) => {
                if (error1) {
                    console.log("error: ", error1);
                    res.status(400).send("Something went wrong")
                } else {
                    console.log(results1);
                    res.status(200).send(results1)
                }
            })
        }
    })

})

//search a property my location and price
app.get('/searchproperty/:location/:price', function (req, res) {
    
    let maxprice = req.params.price;
    let location = req.params.location;

    con.query((`SELECT * FROM property p WHERE p.address LIKE "%${location}%" AND p.price < ${maxprice} `), (error, result) => {
        if (error) {
            console.log("error: ", error);
        }
        let psearch = result[0];
        con.query((`SELECT isAvailable FROM property p WHERE p.propertyNum = ${psearch.propertyNum}`), (error1, result1) => {
            if (error1) {
                console.log("error: ", error);
            } else {
                let arr = {
                    'propertyNum': psearch.propertyNum,
                    'address': psearch.address,
                    'isAvailable': result1[0].isAvailable
                }
                console.log(arr)
                res.status(200).send(arr)
            }
        })
    })
})

//rent a property
app.post('/rent/:accountNumT/:propertyNum/:dateFrom/:dateTo', function (req, res) {
    let propertyNum = req.params.propertyNum;
    let dateFrom = req.params.dateFrom;
    let dateTo = req.params.dateTo;

    let accountNumT = req.params.accountNumT;
    let loanNum = Math.floor(Math.random() * 10)

    con.query((`SELECT accountNumL FROM property p WHERE p.propertyNum = ${propertyNum}`), (error1, result1) => {
        if (error1) {
            console.log("error: ", error);
        }
        accountNumL = result1[0].accountNumL;
        console.log(accountNumL)
        con.query((`INSERT INTO propertyrental VALUES(${propertyNum}, ${loanNum}, '${dateFrom}' , '${dateTo}' , 1, ${accountNumT}, ${accountNumL})`), (error2, result2) => {
            if (error2) {
                console.log("error: ", error2);
            }
            console.log(result2)
            con.query((`UPDATE property SET isAvailable = 1 WHERE propertyNum = ${propertyNum}`), (error3, result3) => {
                if (error3) {
                    console.log("error: ", error3);
                }
                console.log(result3)
                res.send(result3)
            })
        })

    })

})

//show stars, and delete
app.get(('/stars/:numstars'), function (req, res) {
    let numstars = req.params.numstars;
    con.query((`SELECT propertyNum 
    FROM propertyrental p
    JOIN review r
    ON p.loanNum = r.loanNum
    WHERE r.numOfStars = ${numstars}
    `), (error, results) => {
        if (error) {
            console.log(error)
        } else {
            console.log(results[0].propertyNum)
            let arr = {
                "num": results[0].propertyNum
            }
            res.send(arr)
        }
    })

})

app.delete(('/delstars/:property'), function (req, res) {
    property = req.params.property;

    con.query((`DELETE 
    FROM property p
    WHERE p.propertyNum = ${property}`), (error, result) => {
        if (error) {
            console.log(error)
        } else {
            if (result.affectedRows == 0){
            res.status(404).send('Does not exist')
            }else{
            res.status(200).send('Deleted' + property)
            }
        }
    })
})



var server = app.listen(3000, function () {
    console.log('Server is listening at port 3000...');
});

