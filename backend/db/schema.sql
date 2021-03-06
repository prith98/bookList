/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
*/

DROP DATABASE IF EXISTS Books;
CREATE DATABASE Books;
USE Books;

CREATE TABLE BookList (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  author VARCHAR(50),
  released VARCHAR(50),
  PAGES INT(13),
  publisher VARCHAR(50),
  purchased BOOLEAN
)

