INSERT INTO payment
VALUES
(111, "Debit", 200, "2020-11-11", 1, 2),
(112, "Credit", 300, "2018-08-01", 1, 3),
(113, "Debit", 450, "2020-11-11", 2, 6),
(114, "Credit", 600, "2019-04-03", 2, 7),
(115, "Debit", 500, "2020-06-11", 1, 9);

INSERT INTO review
VALUES 
(1, "Jackson H. Montgomery", "2020-11-11", 3),
(2, "Nola N. Valdez", "2020-06-11", 3),
(3, "Alec C. Shields", "2020-11-01", 0),
(4, "Jaime H. Frye", "2020-03-11", 2),
(9, "Jaime H Frye", "2019-04-16", 4),
(10, "Dana P. Ball", "2018-10-17", 5),
(11, "Colorado B. Suarez", "2020-06-04", 1),
(17, "Guy W. Shields", "2020-07-09", 0);

INSERT INTO amenities	
VALUES
("pool", 1),
("hottub", 2),
("view", 3),
("Full kitchen", 4),
("sauna", 1);

INSERT INTO property
VALUES
(1, "58 Marcus Crescent, London, ON, Canada, N6G 4Z3", 525.00, true, 6, 1, 5, 4, 1),
(2, "93 rue Pierre Motte, Mersin, Guadeloupe, France, 92484", 600.00, true, 4, 4, 4, 2, 2),
(3, "3141  May Street, Eugene, United Kingdom, 40507", 350.00, false, 5, 2, 3, 3, 3),
(4, "San Andrés 78, Boada, Salamanca, Spain, 37290", 475.00, false, 2, 3, 1, 1, 5),
(5, "Vergiliusstraat 59, Heerlen, Limburg, Netherlands, 6417 XB", 725.00, true, 3, 1, 2, 2, 5);

INSERT INTO propertyrental
VALUES
(1, 6,  "2020-7-11", "2020-11-11", false,  30001, 1),
(2, 7,  "2019-9-10", NULL, true,  3, 2),
(3, 8,  "2020-3-22", "2020-11-22", false,  20001, 3),
(4, 9,  "2019-4-15", NULL, true, 4, 4),
(4, 10,  "2018-10-15", "2019-3-15", false, 5, 4),
(5, 11, “2019-12-01”, “2020-6-01”, 0, 6, 5),
(5, 17, “2020-6-02”, “2020-7-08”, 0, 7, 5);

INSERT INTO `landlord` (`accountNumL`,`name`,`password`,`phonenumber`,`email`)
VALUES
  (1,"Basia Parsons","3682096-9","1-481-263-7698","aliquam.nisl.nulla@elementumpurus.co.uk"),
  (2,"Graiden Moore","47652997-2","1-206-877-5650","pellentesque.habitant@dui.edu"),
  (3,"Jasper Gonzales","12711747-0","1-169-718-7707","mi.eleifend.egestas@acurna.com"),
  (4,"Dean Simpson","40829337-5","1-671-674-3616","nunc.sollicitudin@conubianostra.co.uk"),
  (5,"Alden Long","33918867-K","1-584-882-1874","orci@nonsapien.net"),
  (6,"Uriel Scott","29684691-0","1-696-509-5686","hendrerit.donec@nectellus.com"),
  (7,"Vincent Klein","39367568-3","1-758-888-2721","aenean.eget@dapibus.ca"),
  (8,"Griffith Wilkerson","20335749-4","1-834-942-2406","donec.felis@ac.ca"),
  (9,"Channing Todd","34577645-1","1-729-352-7961","nisi.cum@ridiculusmusdonec.net"),
  (10,"Griffith Mosley","30249382-0","1-741-422-3686","risus.duis@donecnibh.org");
INSERT INTO `landlord` (`accountNumL`,`name`,`password`,`phonenumber`,`email`)
VALUES
  (11,"Xaviera Keller","23690977-8","1-531-815-7455","ligula.consectetuer@velnislquisque.com"),
  (12,"Nicole Mays","45925149-9","1-808-296-3532","cursus.purus@euismodest.ca"),
  (13,"Kirsten Nash","7884286-5","1-859-945-8558","montes.nascetur@felisnullatempor.co.uk"),
  (14,"Zoe Vance","3631120-7","1-491-264-4308","vel.faucibus@nulladignissimmaecenas.edu"),
  (15,"Jennifer Holloway","33326839-6","1-278-272-6675","sed.auctor@semsempererat.net"),
  (16,"Jameson Gilbert","31428544-1","1-323-653-8063","in.dolor@fringillacursus.com"),
  (17,"Guy Lowe","1358651-9","1-484-672-0672","nulla.facilisis.suspendisse@loremfringilla.net"),
  (18,"Uriel Bray","18188549-1","1-176-601-1325","arcu.aliquam.ultrices@sapiencrasdolor.net"),
  (19,"Noelani Blackburn","22739264-9","1-741-289-7241","nec.mauris@uttincidunt.com"),
  (20,"Russell Floyd","129167-K","1-536-642-5571","arcu@orcisem.ca");
INSERT INTO `landlord` (`accountNumL`,`name`,`password`,`phonenumber`,`email`)
VALUES
  (21,"Rae Cote","2571455-5","1-662-831-6012","nulla.integer@est.ca"),
  (22,"Upton Carlson","27790110-2","1-261-624-5481","non.vestibulum@velit.net"),
  (23,"Kirestin Shelton","13683170-4","1-234-313-4847","arcu.vivamus.sit@convallis.com"),
  (24,"Chancellor Lee","13702592-2","1-780-813-2721","risus@orcitinciduntadipiscing.edu"),
  (25,"Athena Sloan","12119641-7","1-681-597-1395","euismod.mauris@proinnisl.co.uk"),
  (26,"Lesley Pickett","40777353-5","1-518-393-8022","egestas.nunc.sed@telluseu.ca"),
  (27,"Rudyard Arnold","42368106-3","1-770-810-1337","ut.quam.vel@quistristique.org"),
  (28,"Karina Mitchell","29371250-6","1-377-983-9435","ridiculus.mus@dapibusrutrum.com"),
  (29,"Chava Sears","48996125-3","1-242-529-3631","ante.maecenas.mi@utsem.edu"),
  (30,"Clementine Freeman","15888925-0","1-265-946-5185","morbi@imperdietnonvestibulum.org");
  
INSERT INTO `location` (`city`,`postalcode`,`countries`)
VALUES
  ("Serang","92484","United Kingdom"),
  ("Mersin","SD6F 3HK","France"),
  ("Picton","75454","Sweden"),
  ("Avesta","616498","Sweden"),
  ("Vaux-sur-Sure","35568","Australia"),
  ("Eugene","763444","United Kingdom"),
  ("Charsadda","398375","Mexico"),
  ("Trần Cao","0767","Costa Rica"),
  ("Adrano","161826","Netherlands"),
  ("Thái Nguyên","35235","Peru");
INSERT INTO `location` (`city`,`postalcode`,`countries`)
VALUES
  ("El Tambo","4540","Colombia"),
  ("Cumberland County","32150","Spain"),
  ("Pishin Valley","384071","Poland"),
  ("Porto Alegre","63850","Nigeria"),
  ("Houston","21303","Mexico"),
  ("Chihuahua","2582","New Zealand"),
  ("Göteborg","79233","United Kingdom"),
  ("Langen","045365","Germany"),
  ("Ravenstein","1924 GN","Russian Federation"),
  ("Khyber Agency","719355","Colombia");
INSERT INTO `location` (`city`,`postalcode`,`countries`)
VALUES
  ("Mostazal","65117-77335","Mexico"),
  ("Soria","23188-301","Austria"),
  ("Sincelejo","115144","Belgium"),
  ("Valparaíso de Goiás","02075-90463","Spain"),
  ("Burnie","7693","Australia"),
  ("Cabo de Santo Agostinho","09382","India"),
  ("Saintes","9588","Russian Federation"),
  ("Sogamoso","747252","Australia"),
  ("Christchurch","41737","Nigeria"),
  ("Waidhofen an der Ybbs","69082","New Zealand");

                                        
INSERT INTO `tenant` (`name`,`password`,`phoneNumber`,`email`,`accountNumT`)
VALUES
  ("Jackson H. Montgomery","CR6214506712475282125","1-892-318-3653","ut@necmollisvitae.net",30001),
  ("Alec C. Shields","HR9786355643534123661","1-915-800-9763","quam.vel.sapien@facilisis.co.uk",20001),
  ("Nola N. Valdez","NL64TNFV6913827844","1-452-506-4743","curabitur.vel@aliquamerat.ca",3),
  ("Jaime H. Frye","SA7623830398426541995369","1-706-319-3715","pede@quistristique.co.uk",4),
  ("Dana P. Ball","CY90780358700507562869428447","1-665-578-2371","ultrices@aenean.com",5),
  ("Colorado B. Suarez","MC8569617214686384361243143","1-298-757-5719","eu.odio@phasellusat.edu",6),
  ("Guy W. Shields","SM6137153500577834606979955","1-223-308-2295","sed@eleifendnuncrisus.net",7),
  ("Kitra O. Rosales","PL36330148563571804377618423","1-595-385-5509","at@ipsumcurabitur.edu",8),
  ("Felix Z. Morrow","MU8007348615428274261526156514","1-359-632-2112","per@commodohendrerit.ca",9),
  ("Marshall K. Whitley","FR7921745160235506461683734","1-328-478-6978","vestibulum.massa@arcu.com",10);
INSERT INTO `tenant` (`name`,`password`,`phoneNumber`,`email`,`accountNumT`)
VALUES
  ("Cora Y. Wagner","SK0784598040585886891256","1-781-563-4459","ipsum.porta@elementumsem.co.uk",11),
  ("Clark C. Raymond","HR8893382775010819257","1-484-679-4675","torquent.per@egestas.co.uk",12),
  ("Xenos U. Moore","BE92476726398478","1-431-524-0665","mauris.nulla@integeraliquamadipiscing.ca",13),
  ("Bryar F. Santana","TN4142508537227556922664","1-451-794-7335","orci@anteipsum.org",14),
  ("Gil O. Mcdaniel","PL31498371760844888167343126","1-282-758-6921","malesuada.augue.ut@laciniamattis.net",15),
  ("MacKenzie W. Sharpe","CH4753657608516114651","1-342-434-1751","iaculis.quis@imperdietdictummagna.ca",16),
  ("Fulton N. Fitzgerald","GT07372935748450938607812262","1-853-709-6336","molestie@craseget.co.uk",17),
  ("Dillon C. Berger","SM4385539786318026226076182","1-674-896-1167","ac.mi@at.co.uk",18),
  ("Jacob K. Lambert","MT80EQNU42734334748195246392956","1-622-550-3581","eleifend.cras@ipsum.co.uk",19),
  ("Ann W. James","FO0284012178241758","1-125-705-8531","fames@maurisquis.ca",20);
INSERT INTO `tenant` (`name`,`password`,`phoneNumber`,`email`,`accountNumT`)
VALUES
  ("Hiroko W. Tillman","CZ1535863649145736312454","1-647-927-4601","vitae.aliquet@euelit.edu",21),
  ("Aurelia Y. Manning","DK4742224168517562","1-235-655-5765","curabitur.vel@enimcommodo.edu",22),
  ("Xandra B. Lyons","MR4779611232361866122374840","1-288-483-5674","dapibus.id.blandit@ipsumprimis.ca",23),
  ("Ursa M. Gates","MU2385623921754412805264556813","1-580-844-6037","nam.nulla@egetipsum.ca",24),
  ("Jennifer C. Byers","HU71497237884907443295458823","1-738-353-8285","maecenas@volutpatornare.com",25),
  ("Scarlett P. Odom","LV89ZPPK3365888632252","1-112-707-2548","mus.aenean.eget@elitpedemalesuada.edu",26),
  ("Portia J. David","AD3481184938081431883029","1-836-499-3564","vel.turpis@ametconsectetueradipiscing.edu",27),
  ("Robin J. Jefferson","PS262686446544764354531045251","1-389-827-6104","at@aeneangravidanunc.co.uk",28),
  ("Alika O. Britt","GL6810595665750716","1-964-685-2648","nulla.facilisis@sem.org",29),
  ("Alice H. Peters","MR9339658099378340971610585","1-890-398-2910","eu.eleifend@duis.edu",30);
