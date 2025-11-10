drop schema if exists public cascade;
create schema public;

create table Schools (
	SchoolID	int				primary key generated always as identity,
	SchoolName 	varchar(255)	not null,
	Acronym		varchar(15)		not null,
	Address		varchar(255)	not null
);

create table Courses (
	CourseID	int				primary key generated always as identity,
	SchoolID	int				not null references Schools (SchoolID),
	CRN			char(5)			not null,
	CourseCode	varchar(15)		not null,
	CourseName	varchar(255)	not null,
	StartDate	date			not null
);

create table Books (
	ISBN			char(13)		primary key,
	BookTitle		varchar(255)	not null,
	Description		text			not null,
	Authors			varchar(255)	not null,
	Publishers		varchar(255)	not null,
	PublishDate		date			not null
);

create type req_e as enum ('Required', 'Optional');

create table CourseBooks (
	CourseBookID	int			primary key generated always as identity,
	CourseID		int			not null references Courses (CourseID),
	ISBN			char(13)	not null references Books (ISBN),
	RequirementType	req_e		not null
);

create table Users (
	UserID			int				primary key generated always as identity,
	SchoolID		int				not null references Schools (SchoolID),
	FirstName		varchar(255)	not null,
	LastName		varchar(255)	not null,
	MiddleName		varchar(255)	default null,
	EmailAddress	varchar(255)	not null,
	AltEmailAddress	varchar(255)	default null,
	-- TEMP; use Argon2id later
	PasswordHash	char(64)		not null
);

create type purchase_e as enum ('Buy', 'Rent');

create table BookListings (
	BookListingID	int				primary key generated always as identity,
	SellerID		int				not null references Users (UserID),
	ISBN			char(13)		not null references Books (ISBN),
	BookCondition	varchar(63)		not null,
	ListPrice		money			not null,
	PurchaseType	purchase_e		not null
);

-- Permissions management

GRANT ALL ON SCHEMA public TO michael_mark;
GRANT ALL ON TABLE public.booklistings TO michael_mark;
GRANT ALL ON TABLE public.books TO michael_mark;
GRANT ALL ON TABLE public.coursebooks TO michael_mark;
GRANT ALL ON TABLE public.courses TO michael_mark;
GRANT ALL ON TABLE public.schools TO michael_mark;
GRANT ALL ON TABLE public.users TO michael_mark;

GRANT ALL ON SCHEMA public TO khadijah_wright;
GRANT ALL ON TABLE public.booklistings TO khadijah_wright;
GRANT ALL ON TABLE public.books TO khadijah_wright;
GRANT ALL ON TABLE public.coursebooks TO khadijah_wright;
GRANT ALL ON TABLE public.courses TO khadijah_wright;
GRANT ALL ON TABLE public.schools TO khadijah_wright;
GRANT ALL ON TABLE public.users TO khadijah_wright;

GRANT ALL ON SCHEMA public TO scott_harris;
GRANT ALL ON TABLE public.booklistings TO scott_harris;
GRANT ALL ON TABLE public.books TO scott_harris;
GRANT ALL ON TABLE public.coursebooks TO scott_harris;
GRANT ALL ON TABLE public.courses TO scott_harris;
GRANT ALL ON TABLE public.schools TO scott_harris;
GRANT ALL ON TABLE public.users TO scott_harris;

GRANT ALL ON SCHEMA public TO beau_coffie;
GRANT ALL ON TABLE public.booklistings TO beau_coffie;
GRANT ALL ON TABLE public.books TO beau_coffie;
GRANT ALL ON TABLE public.coursebooks TO beau_coffie;
GRANT ALL ON TABLE public.courses TO beau_coffie;
GRANT ALL ON TABLE public.schools TO beau_coffie;
GRANT ALL ON TABLE public.users TO beau_coffie;

-- Dummy data; in production it's probably best to comment these lines out

insert into Schools (SchoolName, Acronym, Address) values
('Oregon Institute of Technology (Klamath Falls Campus)', 'OIT', 'Klamath Falls, OR'),
('Oregon Institute of Technology (Portland-Metro Campus)', 'OIT', 'Wilsonville, OR');

insert into Courses (SchoolID, CRN, CourseCode, CourseName, StartDate) values
(2, 10638, 'CST 316 01P', 'JR Team-Based Proj Dev I', '2025-10-01');

insert into Books (ISBN, BookTitle, Description, Authors, Publishers, PublishDate) values
('9780930289232', 'Watchmen', '', 'Alan Moore, Dave Gibbons', 'DC Comics', 'April 1, 1995');

insert into CourseBooks (CourseID, ISBN, RequirementType) values
(1, '9780930289232', 'Required');

insert into Users (SchoolID, FirstName, LastName, EmailAddress, PasswordHash) values
(2, 'Michael', 'Mark', 'michael.mark@oit.edu', '4355a46b19d348dc2f57c046f8ef63d4538ebb936000f3c9ee954a27460dd865'),
(2, 'Beau', 'Coffie', 'beau.coffie@oit.edu', '53c234e5e8472b6ac51c1ae1cab3fe06fad053beb8ebfd8977b010655bfdd3c3'),
(2, 'Khadijah', 'Wright', 'kahdijah.wright@oit.edu', '1121cfccd5913f0a63fec40a6ffd44ea64f9dc135c66634ba001d10bcf4302a2'),
(2, 'Scott', 'Harris', 'scott.harris@oit.edu', '7de1555df0c2700329e815b93b32c571c3ea54dc967b89e81ab73b9972b72d1d');

insert into BookListings (SellerID, ISBN, BookCondition, ListPrice, PurchaseType) values
(1, '9780930289232', 'Used', '$9.99', 'Buy');