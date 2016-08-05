-- READY, SET, GO

create database hitch;

\c

-- USERS TABLE BUILD

create table users(
  id serial4 primary key,
  first_name varchar(30),
  last_name varchar(50),
  email varchar(100) not null,
  password_digest varchar(400) not null,
  username varchar(100),
  dob date,

  driver boolean,
  driver_onduty boolean,
  drivers_license varchar(20),
  location varchar(100),
  current_location varchar(150),
  review_outof_five integer,

  car_brand varchar(30),
  car_model varchar(50),
  car_year integer,
  car_colour varchar(10),
  car_plate varchar(10)
);

-- RIDES TABLE

create table rides(
  id serial4 primary key,
  creator_id varchar(20) not null,

  origin varchar(150),
  destination varchar(150),
  when_date varchar(70),
  when_time varchar(70),
  price_ask varchar(50),
  price_bid varchar(50),
  passengers varchar(10),

  accepted boolean,
  driver_id varchar(20)
);
