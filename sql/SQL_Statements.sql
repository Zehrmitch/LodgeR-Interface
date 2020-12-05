#login landord SQL statement
#email: anusha@gmail.com, password: abcdefg
#email: kylie@gmail.com, password: abcdefg
SELECT name
FROM landlord 
WHERE email = ? AND password = ?;

#login tenant
#email: mitchell@gmail.com, password: abcdefg
#email: sarah@gmail.com, password: abcdefg
SELECT * 
FROM tenant 
WHERE email = ? AND password = ?;

#updating a landlaords properties price
#price: 200, accountNumL = 2
#priceL 300, accountNumL = 1
UPDATE property 
SET price = ? 
WHERE accountNumL = ?;

#find a property and add a reviw
#tenantname: Sarah Tan, starsforreview: 5
#tenantname: Dana P. Ball , starsforreview: 2
SELECT * 
FROM propertyRental p 
WHERE p.accountNumT = (SELECT accountNumT 
						FROM tenant t 
                        WHERE t.name = '${name}');
	
SELECT loanNum 
FROM propertyrental p 
WHERE p.propertyNum= '${propertyNum}';

INSERT INTO review 
VALUES
('${loanNum}','${name}','${date}','${numOfStars}');

#add an amenity to a property
#landlordNum: 3, amenity: garage
#landlordNum: 2, amenity: bathtub
SELECT propertyNum 
    FROM property
    WHERE price > 200 AND accountNumL = '${landlordNum}';
    
INSERT INTO amenities VALUES('${amenity}', '${propertyNum}');

#search property by location and price
#location: May Street, maxprice: 2000
#location: France, maxprice: 1000
SELECT * 
FROM property p 
WHERE p.address
LIKE "%${location}%" AND p.price < '${maxprice}';

SELECT isAvailable 
FROM property p 
WHERE p.propertyNum = '${psearch.propertyNum}';

#rent a property
#propertyNum: 2, tenantNum: 2, dateFrom: 2021-04-15, dateTo: 2021-04-18
#propertyNum: 4, tenantNum: 2, dateFrom: 2021-04-20, dateTo: 2021-04-25
SELECT accountNumL 
FROM property p 
WHERE p.propertyNum = '${propertyNum}';

INSERT INTO propertyrental 
VALUES
('${propertyNum}', '${loanNum}', '${dateFrom}' , '${dateTo}' , 1, '${accountNumT}', '${accountNumL}');

UPDATE property 
SET isAvailable = 1 
WHERE propertyNum = '${propertyNum}';

#search property by number of starts
#numstars: 4
SELECT propertyNum 
    FROM propertyrental p
    JOIN review r
    ON p.loanNum = r.loanNum
    WHERE r.numOfStars = '${numstars}';
    
#delete a property
#propertyNum: 1
DELETE 
    FROM property p
    WHERE p.propertyNum = '${property}';
