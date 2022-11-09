CREATE DATABASE MasjidNoorDB;



CREATE TABLE parent(
    parent_id SERIAL PRIMARY KEY,
    parent_name VARCHAR,
    parent_phone_number VARCHAR
);

--heroku pg:cd "C:\Program Files\PostgreSQL\15\bin>"