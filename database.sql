CREATE DATABASE MasjidNoorDB;



CREATE TABLE parent(
    parent_id SERIAL PRIMARY KEY,
    parent_name VARCHAR,
    parent_phone_number VARCHAR
);

--heroku pg:psql

--git push heroku master

INSERT INTO parent (parent_id,parent_name,parent_phone_number) VALUES (2,'Asjad','07309099078');