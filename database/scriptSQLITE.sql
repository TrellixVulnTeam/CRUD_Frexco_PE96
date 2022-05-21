CREATE TABLE stock(
	id INTEGER,
	product_name varchar(255) NOT NULL,
	description varchar(4096) NOT NULL,
	quantity INT NOT NULL,
	primary key (id)
);

INSERT INTO stock (product_name, description, quantity) VALUES ('Maçã', 'Fuji', 10);
INSERT INTO stock (product_name, description, quantity) VALUES ('Banana', 'Caturra', 5);
INSERT INTO stock (product_name, description, quantity) VALUES ('Mamão', 'Papaia', 12);