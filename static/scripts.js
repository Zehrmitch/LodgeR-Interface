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
con.connect(function (err) {
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

    con.query("SELECT * FROM tenant WHERE email = ? AND password = ?", [email, password], (error, results) => {
        if (error) {
            console.log("error: ", error);
            res.status(400).send("Login failed")
        } else {
            console.log(results);
            res.status(200).send(results);
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
app.put('/addreview', function (req, res) {
    let name = "Nola N. Valdez";
    let numOfStars = 7;
    let date = '2020-07-11';

    con.query((`SELECT * FROM propertyRental p WHERE p.accountNumT = (SELECT accountNumT FROM tenant t WHERE t.name = '${name}')`), (error, results) => {
        if (error) {
            console.log("error: ", error);
            res.status(400).send("Something went wrong")
        } else {
            let propertyNum = results[0].propertyNum;
            con.query((`SELECT  loanNum FROM propertyrental p WHERE p.propertyNum=${propertyNum}`), (error1, results1) => {
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


app.post('/addamenity/:num/:newAmmenity', function (req, res) {
    //let landlordNum = 3;
    //let amenity = "Sauna"

    let landlordNum=req.params.num;
    let amenity=req.params.newAmmenity;

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
app.post('/searchproperty', function (req, res) {
    let location = 'May Street';
    let tenantnum = 2;

    con.query((`SELECT * FROM property p WHERE p.address LIKE "%${location}%" AND p.price < 500.00 `), (error, result) => {
        if (error) {
            console.log("error: ", error);
        }
        psearch = result[0];
        console.log(psearch)
        con.query((`SELECT currentlyRented FROM propertyRental p WHERE p.propertyNum = ${psearch.propertyNum}`), (error1, result1) => {
            if (error1) {
                console.log("error: ", error);
            }
            rented = result1[0].currentlyRented;
            console.log(rented)
            if (rented == 0) {
                console.log('you can rent')
                con.query((`INSERT INTO propertyrental VALUES(${psearch.propertyNum}, 44, '2020-10-21','2020-10-22', 1, 1, ${psearch.accountNumL})`), (error2, result2) => {
                    if (error2) {
                        console.log("error: ", error);
                    }
                    console.log(result2)
                    con.query((`UPDATE property SET isAvailable = 1 WHERE propertyNum = ${psearch.propertyNum}`), (error3, result3) => {
                        if (error3) {
                            console.log("error: ", error);
                        }
                        console.log(result3)
                    })
                })
            }
            else {
                console.log('cannot rent')
            }
        })

    })
})

//show stars, and delete
app.get(('/stars'), function (req, res) {
    let name = "Alden Long"

    con.query((`SELECT r.loanNum, r.propertyNum
                FROM propertyrental r
	            WHERE r.propertyNum IN (SELECT p.propertyNum
                    FROM property p
                    WHERE p.accountNumL IN (SELECT l.accountNumL
                        FROM landlord l
                        WHERE l.name LIKE "%${name}%"))`), (error, result) => {
        if (error) {
            console.log(error)
        }
        //console.log(result)
        loansearch = [];
        propertysearch = [];

        for (var i = 0; i < result.length; i++) {
            loansearch.push(result[i].loanNum);
            propertysearch.push(result[i].propertyNum)
        }
        console.log(loansearch)
        reviews = [];

        for (var i = 0; i < loansearch.length; i++) {
            con.query(
                
                (`SELECT r.numOfStars
                    FROM review r
                    WHERE r.loanNum = ${loansearch[i]}
                    GROUP BY r.numOfStars
                    `), (error1, result1) => {
                if (error1) {
                    console.log(error)
                } else {
                    console.log(result1[0])
                    reviews.push(result1[0])
                }

            })

        }
       // console.log(reviews)
        res.status(200).send({ review: reviews, properties: propertysearch })
    })
})

app.delete(('/stars/:property'), function (req, res) {
    property = req.params.property;

    con.query((`DELETE 
    FROM property p
    WHERE p.propertyNum = ${property}
`))


})
var server = app.listen(3000, function () {
    console.log('Server is listening at port 3000...');
});

