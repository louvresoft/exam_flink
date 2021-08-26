CREATE TABLE enterprise (
	name_enterprise VARCHAR (50) NOT NULL,
	description VARCHAR ( 100 ) NOT NULL,
	symbol VARCHAR ( 10 ) NOT NULL,
	market_value jsonb,
    uuid_ uuid NOT NULL DEFAULT uuid_generate_v1(),
    CONSTRAINT pet_pkey_ PRIMARY KEY (uuid_)
);


insert into enterprise values
('flink', 'some description', 
 'aazzxx', '{"email": "thom22@gmail.com", "country": "US"}',
 uuid_generate_v4());
 

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";