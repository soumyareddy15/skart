create database onlineshopping
use onlineshopping
create table tblUser(
    userid int identity primary key,
	username varchar(40) not null,
	useremail nvarchar(255),
	userphone varchar(15) unique not null,
	userpassword nvarchar(100) not null,
	useraddress varchar(40) not null, 
)
create table tblCategory(
	categoryid int primary key identity(101,1),
	categoryname nvarchar(max) not null,
	categorydescription nvarchar(max),
)
create table tblRetailer(
	retailerid int primary key identity(201,1),
	retailername varchar(40) not null,
	retaileremail nvarchar(40) unique not null,
	retailerpassword nvarchar(100) not null,
	approved int default 0
)

create table tblProduct(
	productid int primary key identity(501,1),
	productname nvarchar(max),
	productprice float ,
	productquantity  int,
	productdescription nvarchar(max),
	productbrand varchar(45),
	productimage nvarchar(max),
	retailerid int references tblRetailer(retailerid),
	categoryid int references tblCategory(categoryid)
)
create table tblCart(
	cartid int identity(1001,1),	
	productid int references tblProduct(productid),
	cartquantity int,
	Primary key(cartid, productid),
)
create table tblOrder(
	orderid int identity(2001,1) primary key,
	orderdate date,
	userid int references tblUser(userid),
	productid int references tblProduct(productid),
	orderquantity int,
	orderprice float,
)

create table tblOrderdetails(
    orderid int  references tblOrder(orderid),
	productid int references tblProduct(productid),
	userid int references tblUser(userid),
	orderquantity int,
	orderprice float
	)

select * from tblProduct
SELECT * FROM tblUser
insert into tblUser(username,useremail,userphone,userpassword,useraddress)
values('Soumya','soumya@gmail.com',9874563245,HASHBYTES('SHA2_512','soumya15#'),'Hyderabad'),
('kirti','kirti@gmail.com',7874564781,Hashbytes('SHA2_512','kirti41#'),'mumbai') ,
('ashwin','ashwin@gmail.com',5877566321,hashbytes('SHA2_512','laoas09'),'chennai') ,
('varad','varad@gmail.com',1445327581,hashbytes('SHA2_512','aski7'),'delhi'),
('vamshi','vamshi@gmail.com',9445327581,hashbytes('SHA2_512','bhj7'),'pune') 


insert into tblCategory(categoryname,categorydescription)
values('Mobile ','Mobile and Devices'),
('Watches','Analog and Digital watches'),
('Shoes','Sports and Casual Footwear'),
('Clothing','Traditional and Western clothing')

select * from tblCategory
insert into tblRetailer(retailername,retaileremail,retailerpassword,approved) values
('Rishi','rishi@gmail.com',HASHBYTES('SHA2_512','RIVH#'),1),
('Vaishnavi','vaishnavi@gmail.com',HASHBYTES('SHA2_512','sHBKN'),0),
('Mounika','mounika@gmail.com',HASHBYTES('SHA2_512','dddx'),1),
('srujan','srujan@gmail.com',HASHBYTES('SHA2_512','xsjbxd'),1),
('devika','devika@gmail.com',HASHBYTES('SHA2_512','xefvv'),0)

select * from tblRetailer

insert into tblProduct(productname,productprice ,productquantity,productdescription ,productbrand ,productimage ,retailerid,categoryid)
values ('redmi note 9',45000,10,'color:blue','redmi','xyz',201,101),
 ('laptop',95000,17,'color:grey','dell','xyz',203,102),
  ('bracelet',600,10,'color:gold','zara','x4z',205,104),
   ('kurta',1050,10,'color:yellow','biba','xyz',201,103),
    ('headphones',45000,10,'color:black,water resistant','boat','xyz',202,102),
	('shoes',10050,10,'color:beige','puma','xyz',204,103)
select * from tblProduct

insert into tblCart(productid,cartquantity)values
(501,4),(502,1),(503,5),(504,2),(505,7)
select * from tblCart

insert into tblOrder(orderdate,userid,productid,orderquantity,orderprice)values
('2021-08-04',1,502,4,5000),
('2021-07-07',4,501,7,4500),
('2021-08-04',2,504,9,8000),
('2021-05-08',3,503,4,2500),
('2021-07-12',5,501,6,7000)
select * from tblOrder

insert into tblOrderdetails(orderid,productid,userid,orderquantity,orderprice)values
(2001,503,1,4,4200),(2002,502,4,2,5000),(2003,501,2,3,1500),(2004,504,3,2,1500)
select * from tblOrderdetails


select * from tblUser
select * from tblCategory
select * from tblRetailer
select * from tblProduct
select * from tblCart
select * from tblOrder
select * from tblOrderdetails

